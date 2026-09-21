<script setup lang="ts">
import type { WordToken } from '~/types/sentence';

const props = defineProps<{ tokens: WordToken[] }>();

const complete = defineModel<boolean>('complete', { default: false });

const answers = ref<Record<number, string>>({});
const fields = ref<Record<number, HTMLInputElement | null>>({});
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

const focusSibling = (from: number, direction: 1 | -1) => {
  const position = maskedIndexes.value.indexOf(from);
  const next = maskedIndexes.value[position + direction];
  if (next !== undefined) fields.value[next]?.focus();
};

const onInput = (index: number, token: WordToken) => {
  if ((answers.value[index] ?? '').length >= token.text.length) focusSibling(index, 1);
};

const onKeydown = (event: KeyboardEvent, index: number) => {
  // A word never contains a space, so use it to jump to the next blank instead
  if (event.key === ' ') {
    event.preventDefault();
    focusSibling(index, 1);
    return;
  }

  if (event.key === 'Backspace' && !answers.value[index]) {
    event.preventDefault();
    focusSibling(index, -1);
  }
};

/** Fill in the blank the reader is sitting on, then move along. */
const revealFocused = () => {
  const index = focusedIndex.value;
  if (index === null) return;

  const token = props.tokens[index];
  if (!token) return;

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

// A new sentence starts from an empty grid with the first blank focused
watch(
  () => props.tokens,
  async () => {
    answers.value = {};
    fields.value = {};
    focusedIndex.value = null;
    await nextTick();
    const first = maskedIndexes.value[0];
    if (first !== undefined) fields.value[first]?.focus();
  },
  { immediate: true },
);
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

        <input
          :ref="(el) => (fields[index] = el as HTMLInputElement)"
          v-model="answers[index]"
          type="text"
          spellcheck="false"
          autocomplete="off"
          autocapitalize="off"
          :maxlength="token.text.length"
          :aria-label="`Blank ${index + 1}`"
          class="focus:bg-primary/5 absolute inset-0 w-full bg-transparent text-center focus:outline-none"
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
input {
  appearance: none;
  border-radius: 0;
  padding: 0;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
}
</style>
