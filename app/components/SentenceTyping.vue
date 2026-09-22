<script setup lang="ts">
import type { WordToken } from '~/types/sentence';

const props = defineProps<{ tokens: WordToken[] }>();

const complete = defineModel<boolean>('complete', { default: false });

const answers = ref<Record<number, string>>({});
const fields = ref<Record<number, HTMLElement | null>>({});
const focusedIndex = ref<number | null>(null);

const maskedIndexes = computed(() =>
  props.tokens.reduce<number[]>((acc, token, index) => {
    if (token.is_masked) acc.push(index);
    return acc;
  }, []),
);

const statusOf = (index: number, expected: string) => {
  const value = answers.value[index];
  if (!value) return 'idle';
  return value === expected ? 'correct' : 'wrong';
};

const isComplete = computed(
  () =>
    maskedIndexes.value.length > 0 &&
    maskedIndexes.value.every((index) => answers.value[index] === props.tokens[index]?.text),
);

watchEffect(() => {
  complete.value = isComplete.value;
});

function caretToEnd(field: HTMLElement) {
  const selection = window.getSelection();
  if (!selection) return;

  const range = document.createRange();
  range.selectNodeContents(field);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

function focusField(index: number) {
  const field = fields.value[index];
  if (!field) return;
  field.focus();
  caretToEnd(field);
}

const focusSibling = (from: number, direction: 1 | -1) => {
  const position = maskedIndexes.value.indexOf(from);
  const next = maskedIndexes.value[position + direction];
  if (next !== undefined) focusField(next);
};

/**
 * Blanks are contenteditable rather than inputs on purpose: iOS Safari offers its
 * AutoFill bar (passwords, cards, addresses) on a text input whatever autocomplete
 * says, and a contenteditable element is not a form field at all. The trade-off is
 * that length, whitespace and the caret are managed here by hand.
 */
function onInput(index: number, token: WordToken) {
  const field = fields.value[index];
  if (!field) return;

  const raw = field.textContent ?? '';
  const text = raw.replace(/\s/g, '').slice(0, token.text.length);

  if (text !== raw) {
    field.textContent = text;
    caretToEnd(field);
  }

  answers.value[index] = text;
  if (text.length >= token.text.length) focusSibling(index, 1);
}

function onKeydown(event: KeyboardEvent, index: number) {
  // A word never contains a space, so use it to jump to the next blank instead
  if (event.key === ' ') {
    event.preventDefault();
    focusSibling(index, 1);
    return;
  }

  // Nothing in a blank spans two lines
  if (event.key === 'Enter') {
    event.preventDefault();
    return;
  }

  if (event.key === 'Backspace' && !answers.value[index]) {
    event.preventDefault();
    focusSibling(index, -1);
  }
}

/** Fill in the blank the reader is sitting on, then move along. */
const revealFocused = () => {
  const index = focusedIndex.value;
  if (index === null) return;

  const token = props.tokens[index];
  const field = fields.value[index];
  if (!token || !field) return;

  field.textContent = token.text;
  answers.value[index] = token.text;
  focusSibling(index, 1);
};

/** A hint needs a blank to sit on, and there is nothing to reveal once it is right. */
const canReveal = computed(() => {
  const index = focusedIndex.value;
  if (index === null) return false;
  return answers.value[index] !== props.tokens[index]?.text;
});

defineExpose({ revealFocused, canReveal });

/**
 * A new sentence starts from an empty grid with the first blank focused.
 *
 * The blanks are refs inside a v-for, so one tick is not enough: on the run's first
 * sentence the watcher fires during setup, before any of them exist. Waiting for a
 * painted frame as well is what makes the focus land every time rather than most times.
 */
async function reset() {
  answers.value = {};
  focusedIndex.value = null;

  await nextTick();
  await new Promise((resolve) => requestAnimationFrame(resolve));

  for (const field of Object.values(fields.value)) {
    if (field) field.textContent = '';
  }

  const first = maskedIndexes.value[0];
  if (first !== undefined) focusField(first);
}

watch(() => props.tokens, reset);
onMounted(reset);
</script>

<template>
  <p class="m-0 text-[28px] leading-[1.6] tracking-[0.2px] whitespace-pre-wrap">
    <template v-for="(token, index) in tokens" :key="index">
      <span v-if="!token.is_masked">{{ token.text }}</span>

      <!-- The hidden copy of the answer sizes the blank, so a filled-in sentence
           keeps exactly the spacing and line breaks of the original -->
      <span
        v-else
        class="relative inline-block border-b transition-colors"
        :class="{
          'border-primary/40': statusOf(index, token.text) === 'idle',
          'border-primary': statusOf(index, token.text) === 'correct',
          'border-alert': statusOf(index, token.text) === 'wrong',
        }"
      >
        <span aria-hidden="true" class="invisible">{{ token.text }}</span>

        <span
          :ref="(el) => (fields[index] = el as HTMLElement)"
          contenteditable="plaintext-only"
          role="textbox"
          spellcheck="false"
          autocorrect="off"
          autocapitalize="off"
          enterkeyhint="next"
          :aria-label="`Blank ${index + 1}`"
          class="blank focus:bg-primary/5 absolute inset-0 block text-center focus:outline-none"
          :class="{
            'text-primary': statusOf(index, token.text) === 'correct',
            'text-alert': statusOf(index, token.text) === 'wrong',
          }"
          @input="onInput(index, token)"
          @keydown="onKeydown($event, index)"
          @focus="focusedIndex = index"
          @blur="focusedIndex = null"
        />
      </span>
    </template>
  </p>
</template>

<style scoped>
.blank {
  /* A stray paste or line break must never change the sentence's layout */
  overflow: hidden;
  white-space: pre;
  line-height: inherit;
  -webkit-user-modify: read-write-plaintext-only;
}
</style>
