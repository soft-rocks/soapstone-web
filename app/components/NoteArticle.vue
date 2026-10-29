<script setup lang="ts">
/**
 * A rendered note, shared by every note page (a grammar note, a Dragon sentence note).
 * Clicking an example under 例句 plays it; the 例句 heading gets play-all, and the note
 * head gets the link to the practice run.
 */
const props = defineProps<{
  /**
   * The note rendered by renderMarkdown. A note written as a page passes its body in
   * the default slot instead, and leaves this out.
   */
  html?: string | null;
  /** The practice sentences: the numbered list under 例句. */
  sentences: string[];
  /** Album name for the lock screen controls. */
  album?: string;
  practiceTo: string;
}>();

const { t } = useI18n();

const { play, playing, stop } = useSentenceAudio();

const {
  start: playAll,
  stop: stopAll,
  isPlaying: playingAll,
  currentIndex,
} = usePlayAll(() => props.sentences, { album: () => props.album, onStart: stop });

const highlighted = computed(() =>
  playingAll.value ? (props.sentences[currentIndex.value] ?? '') : playing.value,
);

// The note body is injected markup or a slot, so playback is wired up by delegation
function onNoteClick(event: MouseEvent) {
  const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-audio]');
  if (!target) return;
  stopAll();
  play(target.dataset.audio ?? '');
}

watchEffect(() => {
  if (!import.meta.client) return;
  for (const element of document.querySelectorAll<HTMLElement>('.note .sentence')) {
    element.classList.toggle('is-playing', element.dataset.audio === highlighted.value);
  }
});
</script>

<template>
  <article class="max-w-[720px]">
    <p v-if="!html && !$slots.default" class="text-dimmed m-0 text-[13px]">
      {{ t('grammar.notFound') }}
    </p>

    <template v-else>
      <div v-if="$slots.default" class="note" @click="onNoteClick"><slot /></div>
      <!-- eslint-disable-next-line vue/no-v-html -- build-time markdown from this repo -->
      <div v-else class="note" @click="onNoteClick" v-html="html" />

      <BackToTop />

      <ClientOnly>
        <Teleport v-if="sentences.length" defer to="#note-head">
          <NuxtLink
            :to="practiceTo"
            :aria-label="t('practice.start')"
            :title="t('practice.start')"
            class="icon-button is-primary size-12 shrink-0"
          >
            <UIcon name="i-lucide-pencil" class="size-5" />
          </NuxtLink>
        </Teleport>

        <Teleport v-if="sentences.length" defer to="#examples-heading">
          <button
            type="button"
            class="icon-button size-9 shrink-0"
            :aria-label="playingAll ? t('sentence.stop') : t('grammar.playAll')"
            :title="playingAll ? t('sentence.stop') : t('grammar.playAll')"
            @click="playingAll ? stopAll() : playAll()"
          >
            <UIcon :name="playingAll ? 'i-lucide-square' : 'i-lucide-play'" class="size-4" />
          </button>
        </Teleport>
      </ClientOnly>
    </template>
  </article>
</template>
