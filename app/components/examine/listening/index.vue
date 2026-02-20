<script lang="ts" setup>
  import DetailDrawer from '~/components/examine/DetailDrawer.vue';
  import ExamineTyping from '~/components/examine/typing.vue';
  import OneBtnAudio from '~/components/OneBtnAudio.vue';
  import type { Sentence } from '~/composables/useCdnApi';
  import { ListeningExam, WordToken } from '~/types';

  const props = defineProps({
    url: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits<{
    (e: 'next', data: { answer: string; hint: string }): void;
    (e: 'skip', data: { answer: string; hint: string }): void;
  }>();

  const loading = ref(true);
  const exam = ref<ListeningExam | null>(null);
  const showWordDrawer = ref(false);
  const showGrammarDrawer = ref(false);
  const showHint = ref(false);
  const showAnswer = ref(false);

  const emitData = computed(() =>
    exam.value ? { answer: exam.value.answer, hint: exam.value.hint } : { answer: '', hint: '' },
  );

  const wordDetailItems = computed(() =>
    (exam.value?.wordDetails || []).map((w) => ({
      title: w.word,
      content: w.markdown,
    })),
  );

  const grammarDetailItems = computed(() =>
    (exam.value?.grammarDetails || []).map((g) => ({
      title: g.category,
      content: g.markdown,
    })),
  );

  const openWordDrawer = () => {
    if (wordDetailItems.value.length > 0) {
      showGrammarDrawer.value = false;
      showWordDrawer.value = true;
    }
  };

  const openGrammarDrawer = () => {
    if (grammarDetailItems.value.length > 0) {
      showWordDrawer.value = false;
      showGrammarDrawer.value = true;
    }
  };

  const fetchSentence = async () => {
    const response = await fetch(props.url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${props.url}: ${response.statusText}`);
    }
    const sentence: Sentence = await response.json();
    const e = new ListeningExam();
    e.hint = sentence.translations[0]?.content || '';
    e.answer = sentence.text;
    e.tokens = sentence.word_tokens.map((t) =>
      WordToken.from({ text: t.text, isMasked: t.is_masked }),
    );
    e.audioUrl = sentence.audio_url;
    e.interactionMode = 'TYPING';
    e.wordDetails = sentence.words;
    e.grammarDetails = sentence.grammars;
    return e;
  };

  const loadSentence = async () => {
    loading.value = true;
    showHint.value = false;
    showAnswer.value = false;
    try {
      exam.value = await fetchSentence();
    } finally {
      loading.value = false;
    }
    await nextTick();
    replayAudio();
  };

  onMounted(loadSentence);

  watch(() => props.url, loadSentence);

  const typingRef = ref<InstanceType<typeof ExamineTyping> | null>(null);
  const audioRef = ref<InstanceType<typeof OneBtnAudio> | null>(null);

  const replayAudio = () => {
    audioRef.value?.play();
  };
  const toggleHint = () => {
    if (exam.value?.hint) {
      showHint.value = !showHint.value;
    }
  };

  const canGoNext = computed(() => typingRef.value?.isCorrect ?? false);

  const handleKeydown = (e: KeyboardEvent) => {
    const key = e.code.toLowerCase();
    const mod = e.metaKey || e.ctrlKey;
    if (mod) return;

    // Space: Replay (always works)
    if (key === 'space') {
      e.preventDefault();
      replayAudio();
      return;
    }

    // Enter: Next (when correct)
    if (key === 'enter' && canGoNext.value) {
      e.preventDefault();
      emit('next', emitData.value);
      return;
    }

    // Shift+Alt+1-5
    if (e.shiftKey && e.altKey && !e.ctrlKey && !e.metaKey) {
      if (key === 'digit1' && exam.value?.hint) {
        e.preventDefault();
        showHint.value = !showHint.value;
      } else if (key === 'digit2') {
        e.preventDefault();
        showAnswer.value = !showAnswer.value;
      } else if (key === 'digit3') {
        e.preventDefault();
        emit('skip', emitData.value);
      } else if (key === 'digit4') {
        e.preventDefault();
        openWordDrawer();
      } else if (key === 'digit5') {
        e.preventDefault();
        openGrammarDrawer();
      }
    }
  };

  onMounted(() => window.addEventListener('keydown', handleKeydown));
  onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
</script>
<template>
  <div class="flex w-full flex-1 flex-col items-center gap-3 pb-4 md:pb-10">
    <template v-if="loading">
      <div class="flex flex-col items-center">
        <Icon name="s:logo-red" class="h-12 w-12 animate-spin opacity-50" />
        <p class="text-muted mt-2">Loading...</p>
      </div>
    </template>
    <template v-else-if="exam">
      <div class="flex grow flex-col items-center justify-center">
        <OneBtnAudio ref="audioRef" :src="exam.audioUrl" class="pb-4" />
        <span v-if="exam.hint && showHint" class="text-primary/60 text-xl">
          {{ exam.hint }}
        </span>
        <span v-if="showAnswer" class="text-xl font-medium">
          {{ exam.answer }}
        </span>
        <div class="flex w-full flex-row items-center justify-center">
          <ExamineTyping :wordTokens="exam.tokens" ref="typingRef" />
        </div>
      </div>

      <div class="flex grow flex-col items-center justify-end gap-3">
        <!-- Row: Skip -->
        <div class="flex justify-center">
          <UButton
            icon="i-heroicons-forward"
            size="md"
            variant="ghost"
            label="Skip"
            title="Hotkey: Shift+Alt+3"
            @click="emit('skip', emitData)"
          >
            <template #trailing>
              <div class="ml-1 hidden gap-1 opacity-60 sm:inline-flex">
                <UKbd>⇧</UKbd>
                <UKbd>⌥</UKbd>
                <UKbd>3</UKbd>
              </div>
            </template>
          </UButton>
        </div>

        <!-- Row: Words, Grammar -->
        <div class="flex flex-wrap justify-center gap-3">
          <UButton
            icon="i-heroicons-book-open"
            size="md"
            variant="ghost"
            label="Words"
            title="Hotkey: Shift+Alt+4"
            @click="openWordDrawer"
          >
            <template #trailing>
              <div class="ml-1 hidden gap-1 opacity-60 sm:inline-flex">
                <UKbd>⇧</UKbd>
                <UKbd>⌥</UKbd>
                <UKbd>4</UKbd>
              </div>
            </template>
          </UButton>

          <UButton
            icon="i-heroicons-scale"
            size="md"
            variant="ghost"
            label="Grammar"
            title="Hotkey: Shift+Alt+5"
            @click="openGrammarDrawer"
          >
            <template #trailing>
              <div class="ml-1 hidden gap-1 opacity-60 sm:inline-flex">
                <UKbd>⇧</UKbd>
                <UKbd>⌥</UKbd>
                <UKbd>5</UKbd>
              </div>
            </template>
          </UButton>
        </div>
        <!-- Row: Replay, Hint, Show Answer -->
        <div class="flex flex-wrap justify-center gap-3">
          <UButton
            icon="i-heroicons-arrow-path-20-solid"
            size="md"
            variant="ghost"
            label="Replay"
            title="Hotkey: Space"
            @click="replayAudio"
          >
            <template #trailing>
              <div class="ml-1 hidden gap-1 opacity-60 sm:inline-flex">
                <UKbd>␣</UKbd>
              </div>
            </template>
          </UButton>

          <UButton
            v-if="exam.hint"
            icon="i-heroicons-light-bulb"
            size="md"
            :variant="showHint ? 'solid' : 'ghost'"
            label="Hint"
            title="Hotkey: Shift+Alt+1"
            @click="toggleHint"
          >
            <template #trailing>
              <div class="ml-1 hidden gap-1 opacity-60 sm:inline-flex">
                <UKbd>⇧</UKbd>
                <UKbd>⌥</UKbd>
                <UKbd>1</UKbd>
              </div>
            </template>
          </UButton>

          <UButton
            icon="i-heroicons-eye"
            size="md"
            label="Show Answer"
            :variant="showAnswer ? 'solid' : 'ghost'"
            @click="showAnswer = !showAnswer"
          >
            <template #trailing>
              <div class="ml-1 hidden gap-1 opacity-60 sm:inline-flex">
                <UKbd>⇧</UKbd>
                <UKbd>⌥</UKbd>
                <UKbd>2</UKbd>
              </div>
            </template>
          </UButton>
        </div>
      </div>
      <div>
        <UButton
          icon="i-heroicons-arrow-right-16-solid"
          size="md"
          label="Next"
          title="Hotkey: Enter"
          v-if="canGoNext"
          @click="emit('next', emitData)"
        >
          <template #trailing>
            <div class="ml-1 hidden opacity-60 sm:inline-flex">
              <UKbd>↵</UKbd>
            </div>
          </template>
        </UButton>
      </div>
    </template>
  </div>

  <DetailDrawer :open="showWordDrawer" :items="wordDetailItems" @close="showWordDrawer = false" />

  <DetailDrawer
    :open="showGrammarDrawer"
    :items="grammarDetailItems"
    @close="showGrammarDrawer = false"
  />
</template>
