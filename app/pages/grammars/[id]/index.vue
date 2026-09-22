<script setup lang="ts">
import notes from '~/content/grammar/index.json';

const route = useRoute();
const { t } = useI18n();

const id = computed(() => String(route.params.id ?? ''));
const note = computed(() => notes.find((entry) => entry.id === id.value));

// Notes are vendored markdown, so each one is its own chunk and the page prerenders
// with the HTML already in place
const sources = import.meta.glob('../../../content/grammar/*.md', {
  query: '?raw',
  import: 'default',
});

const { data: html } = await useAsyncData(
  () => `grammar:${id.value}`,
  async () => {
    const load = sources[`../../../content/grammar/${id.value}.md`];
    if (!load) return null;
    const guideword = note.value?.guideword ?? '';
    return renderMarkdown((await load()) as string, {
      title: guideword ? guidewordForm(guideword) : undefined,
      subtitle: guideword ? guidewordFormZh(guideword) : undefined,
    });
  },
  { watch: [id] },
);

const { play, playing, stop } = useSentenceAudio();

// Play-all: every example in 例句, in the order they are listed, clear take only
const sentences = computed(() => note.value?.sentences ?? []);
const allTakes = ref<string[]>([]);
const {
  play: playAll,
  playFrom: playAllFrom,
  pause: pauseAll,
  resume: resumeAll,
  stop: stopAll,
  isPlaying: playingAll,
  isPaused: pausedAll,
  currentIndex,
} = useAudioSequence(allTakes);

const media = useMediaSession();

// Lock screen and headphone controls follow the play-all run
watchEffect(() => {
  if (!playingAll.value) {
    media.clear();
    return;
  }

  const sentence = sentences.value[currentIndex.value];
  if (sentence) media.setTrack({ title: sentence, album: note.value?.title });
  media.setState(pausedAll.value ? 'paused' : 'playing');
  media.setHandlers({
    play: resumeAll,
    pause: pauseAll,
    stop: stopAll,
    nexttrack: () => playAllFrom(currentIndex.value + 1),
    previoustrack: () => playAllFrom(currentIndex.value - 1),
  });
});

async function toggleAll() {
  stop();
  if (!allTakes.value.length) {
    allTakes.value = await Promise.all(
      sentences.value.map(async (text) => sentenceAudioUrl(await sentenceHash(text))),
    );
  }
  playAll();
}

const highlighted = computed(() =>
  playingAll.value ? (sentences.value[currentIndex.value] ?? '') : playing.value,
);

// The note body is injected markup, so playback is wired up by delegation
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

const backToTop = () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
};

useSeoMeta({
  title: () => note.value?.title ?? 'Grammar',
});
</script>

<template>
  <article class="max-w-[720px]">
    <p v-if="!html" class="text-dimmed m-0 text-[13px]">{{ t('grammar.notFound') }}</p>

    <template v-else>
      <!-- eslint-disable-next-line vue/no-v-html -- build-time markdown from this repo -->
      <div class="note" @click="onNoteClick" v-html="html" />

      <div class="border-muted mt-16 flex justify-center border-t pt-8">
        <button
          type="button"
          class="border-accented text-toned hover:border-primary hover:text-primary flex size-11 cursor-pointer items-center justify-center border transition-colors"
          :aria-label="t('grammar.backToTop')"
          :title="t('grammar.backToTop')"
          @click="backToTop"
        >
          <UIcon name="i-lucide-arrow-up" class="size-5" />
        </button>
      </div>

      <ClientOnly>
        <Teleport v-if="sentences.length" defer to="#note-head">
          <NuxtLink
            :to="`/grammars/${id}/sentences`"
            :aria-label="t('practice.start')"
            :title="t('practice.start')"
            class="border-primary text-primary hover:bg-primary hover:text-inverted flex size-12 shrink-0 items-center justify-center border transition-colors"
          >
            <UIcon name="i-lucide-pencil" class="size-5" />
          </NuxtLink>
        </Teleport>

        <Teleport v-if="sentences.length" defer to="#examples-heading">
          <button
            type="button"
            class="border-accented text-toned hover:border-primary hover:text-primary inline-flex size-9 shrink-0 cursor-pointer items-center justify-center border transition-colors"
            :aria-label="playingAll ? t('sentence.stop') : t('grammar.playAll')"
            :title="playingAll ? t('sentence.stop') : t('grammar.playAll')"
            @click="playingAll ? stopAll() : toggleAll()"
          >
            <UIcon :name="playingAll ? 'i-lucide-square' : 'i-lucide-play'" class="size-4" />
          </button>
        </Teleport>
      </ClientOnly>
    </template>
  </article>
</template>
