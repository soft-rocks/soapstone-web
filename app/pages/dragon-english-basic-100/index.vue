<script setup lang="ts">
import entries from '~/content/dragon-english-basic-100/index.json';

const { t } = useI18n();

const title = computed(() => t('home.dragonEnglish'));

// Play-all: every sentence in the book's order, clear take only
const sentences = entries.map((entry) => entry.sentence);
const allTakes = ref<string[]>([]);
const { play, playFrom, pause, resume, stop, isPlaying, isPaused, currentIndex } =
  useAudioSequence(allTakes);

const media = useMediaSession();

// Lock screen and headphone controls follow the play-all run
watchEffect(() => {
  if (!isPlaying.value) {
    media.clear();
    return;
  }

  const sentence = sentences[currentIndex.value];
  if (sentence) media.setTrack({ title: sentence, album: title.value });
  media.setState(isPaused.value ? 'paused' : 'playing');
  media.setHandlers({
    play: resume,
    pause,
    stop,
    nexttrack: () => playFrom(currentIndex.value + 1),
    previoustrack: () => playFrom(currentIndex.value - 1),
  });
});

async function playAll() {
  if (!allTakes.value.length) {
    allTakes.value = await Promise.all(
      sentences.map(async (text) => sentenceAudioUrl(await sentenceHash(text))),
    );
  }
  play();
}

useSeoMeta({
  title: 'Dragon English Basic English 100',
});
</script>

<template>
  <div class="max-w-[720px]">
    <header class="mb-10 flex items-start justify-between gap-6">
      <h1 class="m-0 text-[clamp(30px,4vw,44px)] leading-[1.06] font-bold tracking-[-0.025em]">
        {{ title }}
      </h1>

      <ClientOnly>
        <div class="flex shrink-0 items-center gap-3">
          <button
            type="button"
            class="icon-button size-12"
            :class="{ 'is-on': isPlaying }"
            :aria-label="isPlaying ? t('sentence.stop') : t('grammar.playAll')"
            :title="isPlaying ? t('sentence.stop') : t('grammar.playAll')"
            @click="isPlaying ? stop() : playAll()"
          >
            <UIcon :name="isPlaying ? 'i-lucide-square' : 'i-lucide-play'" class="size-5" />
          </button>

          <NuxtLink
            to="/dragon-english-basic-100/sentences"
            :aria-label="t('practice.start')"
            :title="t('practice.start')"
            class="icon-button is-primary size-12"
          >
            <UIcon name="i-lucide-pencil" class="size-5" />
          </NuxtLink>
        </div>
      </ClientOnly>
    </header>

    <ul class="border-muted m-0 list-none border-t p-0">
      <li
        v-for="(entry, index) in entries"
        :key="entry.id"
        class="list-row flex gap-3 pr-2 sm:gap-5 sm:pr-4"
        :class="{ 'is-active': isPlaying && index === currentIndex }"
      >
        <span class="text-dimmed w-7 shrink-0 pt-1 text-sm font-medium tabular-nums">
          {{ entry.id }}
        </span>
        <div class="min-w-0">
          <p
            class="m-0 text-lg font-medium"
            :class="{ 'text-primary': isPlaying && index === currentIndex }"
          >
            {{ entry.sentence }}
          </p>
          <p class="text-muted m-0 mt-1 text-base">{{ entry.translation }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
