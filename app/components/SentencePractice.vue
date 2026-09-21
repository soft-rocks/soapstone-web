<script setup lang="ts">
import type { Sentence } from '~/types/sentence';

const props = defineProps<{ sentence: Sentence }>();

const complete = defineModel<boolean>('complete', { default: false });

const { t } = useI18n();
const settings = useSettingsStore();
const resolvedLocale = useResolvedLocale();

const audios = computed(() => props.sentence.audios ?? []);

// One press plays every take in order: the blurred ones first, the clear one last
const { play, isPlaying } = useAudioSequence(audios);

/**
 * Start playing as soon as a sentence lands, and again on the next one.
 *
 * A page opened straight from its URL has no user interaction behind it, so the browser
 * refuses to start audio. When that happens the first tap or keystroke starts it, which
 * on this screen is usually the reader typing into the first blank.
 */
const armed = ref(false);

const startOnInteraction = (event: Event) => {
  if (!armed.value) return;

  // The toolbar's own play button already handles its click; starting here too would
  // immediately toggle playback back off
  const target = event.target as HTMLElement | null;
  if (target?.closest('[data-toolbar]')) return;

  armed.value = false;
  play();
};

watch(
  () => props.sentence.link,
  async () => {
    const started = await play();
    armed.value = !started;
  },
  { immediate: true },
);

onMounted(() => {
  window.addEventListener('pointerdown', startOnInteraction);
  window.addEventListener('keydown', startOnInteraction);
});

onBeforeUnmount(() => {
  window.removeEventListener('pointerdown', startOnInteraction);
  window.removeEventListener('keydown', startOnInteraction);
});

const translation = computed(() => {
  const all = props.sentence.translations ?? {};
  return all[resolvedLocale.value] ?? Object.values(all)[0] ?? '';
});

const { copy, copied } = useCopyToClipboard();
const typing = useTemplateRef('typing');

const showTranslation = ref(false);
watchEffect(() => {
  showTranslation.value = settings.alwaysShowTranslation;
});

defineExpose({ reveal: () => typing.value?.revealFocused() });
</script>

<template>
  <div>
    <article class="mx-auto max-w-[640px]">
      <SentenceTyping ref="typing" v-model:complete="complete" :tokens="sentence.word_tokens" />

      <div v-if="translation" class="border-muted mt-6 border-t pt-6">
        <button
          v-if="!settings.alwaysShowTranslation"
          type="button"
          class="eyebrow hover:text-primary cursor-pointer transition-colors"
          @click="showTranslation = !showTranslation"
        >
          {{ showTranslation ? t('sentence.hideTranslation') : t('sentence.showTranslation') }}
        </button>

        <p v-if="showTranslation" class="text-toned m-0 text-lg leading-[1.55]">
          {{ translation }}
        </p>
      </div>
    </article>

    <div
      data-toolbar
      class="border-muted bg-default fixed inset-x-0 bottom-0 z-40 border-t pb-[env(safe-area-inset-bottom)]"
    >
      <div
        class="mx-auto flex max-w-[640px] items-center gap-2 px-4 py-3 sm:gap-3 sm:px-8 sm:py-4 md:px-16"
      >
        <button
          v-if="audios.length"
          type="button"
          class="border-primary text-primary hover:bg-primary hover:text-inverted flex size-11 shrink-0 cursor-pointer items-center justify-center border transition-colors sm:size-12"
          :aria-label="isPlaying ? t('sentence.stop') : t('sentence.play')"
          @click="play"
        >
          <UIcon :name="isPlaying ? 'i-lucide-square' : 'i-lucide-play'" class="size-5" />
        </button>

        <button
          type="button"
          class="border-accented text-toned enabled:hover:border-primary enabled:hover:text-primary flex size-11 shrink-0 items-center justify-center border transition-colors enabled:cursor-pointer disabled:opacity-40 sm:size-12"
          :disabled="!typing?.canReveal"
          :aria-label="t('sentence.hint')"
          :title="t('sentence.hint')"
          @mousedown.prevent
          @click="typing?.revealFocused()"
        >
          <UIcon name="i-lucide-lightbulb" class="size-5" />
        </button>

        <button
          type="button"
          class="border-accented text-toned hover:border-primary hover:text-primary flex size-11 shrink-0 cursor-pointer items-center justify-center border transition-colors sm:size-12"
          :aria-label="copied ? t('sentence.copied') : t('sentence.copy')"
          :title="copied ? t('sentence.copied') : t('sentence.copy')"
          @click="copy(sentence.original)"
        >
          <UIcon :name="copied ? 'i-lucide-check' : 'i-lucide-copy'" class="size-5" />
        </button>

        <div class="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <span
            v-if="complete"
            class="text-primary font-ui flex shrink-0 items-center gap-2 text-sm"
            :title="t('sentence.correct')"
          >
            <UIcon name="i-lucide-check" class="size-4" />
            <span class="hidden sm:inline">{{ t('sentence.correct') }}</span>
          </span>

          <slot name="toolbar" />
        </div>
      </div>
    </div>
  </div>
</template>
