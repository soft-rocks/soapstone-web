import { type MaybeRefOrGetter, onBeforeUnmount, ref, toValue } from 'vue';

/**
 * Play a list of audio URLs back to back through a single element.
 *
 * Every call bumps a run token, so a second press (or an unmount) cancels the
 * sequence still in flight instead of letting two of them overlap.
 */
interface Options {
  /** Keep repeating the whole sequence until it is stopped. */
  loop?: MaybeRefOrGetter<boolean>;
}

export function useAudioSequence(sources: MaybeRefOrGetter<string[]>, options: Options = {}) {
  const isPlaying = ref(false);
  const isPaused = ref(false);
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
    isPaused.value = false;
    currentIndex.value = -1;
  };

  /** Hold the current take without cancelling the run, so it can carry on later. */
  const pause = () => {
    if (!isPlaying.value) return;
    element?.pause();
    isPaused.value = true;
  };

  const resume = () => {
    if (!isPlaying.value) return;
    isPaused.value = false;
    element?.play().catch(() => (isPaused.value = true));
  };

  /** Resolves false when the browser refused to start playback. */
  const play = async (): Promise<boolean> => {
    if (isPlaying.value) {
      stop();
      return false;
    }
    return run(0);
  };

  /** Start at a given position in the list, for next/previous controls. */
  const playFrom = async (start: number): Promise<boolean> => {
    stop();
    return run(start);
  };

  const run = async (start: number): Promise<boolean> => {
    const list = toValue(sources);
    if (!list.length) return false;

    let from = Math.min(Math.max(start, 0), list.length - 1);
    const runId = (runToken += 1);
    isPlaying.value = true;
    isPaused.value = false;

    let started = false;
    try {
      do {
        for (let index = from; index < list.length; index += 1) {
          if (runId !== runToken) return started;
          currentIndex.value = index;

          try {
            await playOne(list[index]!);
            started = true;
          } catch {
            // A take the CDN does not carry is skipped; one gap must not end the run
          }
        }
        // A repeat pass always starts from the top
        from = 0;
        // Looping is checked between passes, so turning it off ends the current one cleanly
      } while (toValue(options.loop) && runId === runToken);
    } catch {
      // A blocked or failed track ends the sequence; the button returns to idle.
    } finally {
      if (runId === runToken) {
        isPlaying.value = false;
        isPaused.value = false;
        currentIndex.value = -1;
      }
    }

    return started;
  };

  onBeforeUnmount(() => {
    stop();
    element = null;
  });

  return {
    play,
    playFrom,
    pause,
    resume,
    stop,
    isPlaying,
    isPaused,
    currentIndex,
    total: computed(() => toValue(sources).length),
  };
}
