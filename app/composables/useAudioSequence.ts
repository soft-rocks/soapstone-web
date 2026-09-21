import { type MaybeRefOrGetter, onBeforeUnmount, ref, toValue } from 'vue';

/**
 * Play a list of audio URLs back to back through a single element.
 *
 * Every call bumps a run token, so a second press (or an unmount) cancels the
 * sequence still in flight instead of letting two of them overlap.
 */
export function useAudioSequence(sources: MaybeRefOrGetter<string[]>) {
  const isPlaying = ref(false);
  const currentIndex = ref(-1);

  let element: HTMLAudioElement | null = null;
  let runToken = 0;

  const playOne = (src: string) =>
    new Promise<void>((resolve, reject) => {
      element ??= new Audio();
      element.onended = () => resolve();
      element.onerror = () => reject(new Error(`Failed to play ${src}`));
      element.src = src;
      element.play().catch(reject);
    });

  const stop = () => {
    runToken += 1;
    element?.pause();
    isPlaying.value = false;
    currentIndex.value = -1;
  };

  /** Resolves false when the browser refused to start playback. */
  const play = async (): Promise<boolean> => {
    if (isPlaying.value) {
      stop();
      return false;
    }

    const list = toValue(sources);
    if (!list.length) return false;

    const run = (runToken += 1);
    isPlaying.value = true;

    let started = false;
    try {
      for (const [index, src] of list.entries()) {
        if (run !== runToken) return started;
        currentIndex.value = index;
        await playOne(src);
        started = true;
      }
    } catch {
      // A blocked or failed track ends the sequence; the button returns to idle.
    } finally {
      if (run === runToken) {
        isPlaying.value = false;
        currentIndex.value = -1;
      }
    }

    return started;
  };

  onBeforeUnmount(() => {
    stop();
    element = null;
  });

  return { play, stop, isPlaying, currentIndex, total: computed(() => toValue(sources).length) };
}
