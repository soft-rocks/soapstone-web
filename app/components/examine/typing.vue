<script setup lang="ts">
  import type { WordToken } from '~/types';

  const props = defineProps<{
    wordTokens: WordToken[];
  }>();
  const emit = defineEmits<{
    (e: 'onCorrect'): void;
  }>();

  const inputs = ref<Record<number, string>>({});
  const inputRefs = ref<Record<number, HTMLInputElement | null>>({});
  const getStatus = (index: number, originalText: string) => {
    const value = inputs.value[index];
    if (!value) return 'idle';
    return value === originalText ? 'correct' : 'wrong';
  };
  const handleInput = (index: number, token: WordToken) => {
    const currentVal = inputs.value[index] || '';
    if (currentVal.length === token.text.length) {
      const nextIndex = props.wordTokens.findIndex((t, i) => i > index && t.isMasked);
      if (nextIndex !== -1) {
        inputRefs.value[nextIndex]?.focus();
      }
    }
  };
  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    // Allow Space to bubble to window for hotkey, but don't type it
    if (e.key === ' ') {
      e.preventDefault();
      return;
    }

    if (e.key === 'Backspace' && !inputs.value[index]) {
      const prevIndex = [...props.wordTokens]
        .map((t, i) => (t.isMasked ? i : -1))
        .filter((i) => i !== -1 && i < index)
        .pop();

      if (prevIndex !== undefined) {
        inputRefs.value[prevIndex]?.focus();
      }
    }
  };

  const focusFirstInput = async () => {
    await nextTick();
    const firstMaskedIndex = props.wordTokens.findIndex((t) => t.isMasked);

    if (firstMaskedIndex !== -1) {
      const el = inputRefs.value[firstMaskedIndex];
      if (el) {
        // Delay focus to ensure drawer animation completes
        setTimeout(() => {
          el.focus();
        }, 50);
      }
    }
  };

  const isCorrect = computed(() => {
    const maskedTokens = props.wordTokens.filter((t) => t.isMasked);
    if (maskedTokens.length === 0) return false;

    return props.wordTokens.every((token, index) => {
      if (!token.isMasked) return true;
      return inputs.value[index]?.trim() === token.text;
    });
  });
  defineExpose({
    isCorrect,
  });

  onMounted(() => {
    focusFirstInput();
  });
</script>

<template>
  <div class="flex flex-wrap items-baseline gap-x-1 gap-y-2 text-2xl leading-relaxed">
    <template v-for="(token, index) in wordTokens" :key="index">
      <span v-if="!token.isMasked" class="text-foreground">
        {{ token.text }}
      </span>

      <span v-else class="inline-block">
        <input
          :ref="(el) => (inputRefs[index] = el as HTMLInputElement)"
          @input="handleInput(index, token)"
          @keydown="handleKeyDown($event, index)"
          v-model="inputs[index]"
          type="text"
          spellcheck="false"
          autocomplete="off"
          :size="token.text.length"
          :maxlength="token.text.length"
          class="border-b-2 border-primary/50 bg-transparent px-0 py-0 text-center leading-normal transition-all duration-200 focus:border-primary focus:bg-primary/5 focus:outline-none"
          :class="[
            getStatus(index, token.text) === 'correct'
              ? 'border-primary text-primary font-medium'
              : '',
            getStatus(index, token.text) === 'wrong' ? 'border-red-500 text-red-500' : '',
          ]"
        />
      </span>
    </template>
  </div>
</template>

<style scoped>
  input {
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    border-radius: 0;
    line-height: inherit;
    min-width: 1ch;
  }

  .font-mono {
    font-family: 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', monospace;
  }
</style>
