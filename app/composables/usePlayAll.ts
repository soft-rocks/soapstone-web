interface Options {
  /** Album name shown on the lock screen and headphone controls. */
  album: () => string | undefined;
  /** Runs before the sequence starts, for example to stop a single sentence playing. */
  onStart?: () => void;
}

/**
 * Play-all for a list page: every sentence in order, clear take only. Lock screen and
 * headphone controls follow the run. Shared by the grammar note and the Dragon list.
 */
export function usePlayAll(sentences: () => string[], options: Options) {
  const takes = ref<string[]>([]);
  const { play, playFrom, pause, resume, stop, isPlaying, isPaused, currentIndex } =
    useAudioSequence(takes);

  const media = useMediaSession();

  watchEffect(() => {
    if (!isPlaying.value) {
      media.clear();
      return;
    }

    const sentence = sentences()[currentIndex.value];
    if (sentence) media.setTrack({ title: sentence, album: options.album() });
    media.setState(isPaused.value ? 'paused' : 'playing');
    media.setHandlers({
      play: resume,
      pause,
      stop,
      nexttrack: () => playFrom(currentIndex.value + 1),
      previoustrack: () => playFrom(currentIndex.value - 1),
    });
  });

  async function start() {
    options.onStart?.();
    if (!takes.value.length) {
      takes.value = await Promise.all(
        sentences().map(async (text) => sentenceAudioUrl(await sentenceHash(text))),
      );
    }
    play();
  }

  return { start, stop, isPlaying, currentIndex };
}
