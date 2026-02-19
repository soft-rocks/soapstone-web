import { onMounted, onUnmounted, ref, toValue, watch, type MaybeRefOrGetter } from 'vue';

export function useAudioPlayer(src: MaybeRefOrGetter<string>) {
  let audio: HTMLAudioElement | null = null;

  const currentTime = ref(0);
  const duration = ref(0);
  const isPlaying = ref(false);
  const playbackRate = ref(1);
  const isReady = ref(false);

  const syncState = () => {
    if (!audio) return;
    currentTime.value = audio.currentTime;
    duration.value = audio.duration || 0;
    isPlaying.value = !audio.paused;
  };

  const handleReady = () => {
    if (!audio) return;
    syncState();
    isReady.value = true;
  };

  const setupListeners = (el: HTMLAudioElement) => {
    el.addEventListener('timeupdate', syncState);
    el.addEventListener('loadedmetadata', syncState);
    el.addEventListener('play', () => (isPlaying.value = true));
    el.addEventListener('pause', () => (isPlaying.value = false));
    el.addEventListener('ratechange', () => (playbackRate.value = el.playbackRate));
    el.addEventListener('ended', () => (isPlaying.value = false));
    el.addEventListener('canplaythrough', handleReady);
    el.addEventListener('waiting', () => (isReady.value = false));
  };

  onMounted(() => {
    audio = new Audio();
    setupListeners(audio);

    watch(
      () => toValue(src),
      (newSrc) => {
        if (newSrc && audio) {
          isReady.value = false;
          audio.src = newSrc;
          audio.load();
        }
      },
      { immediate: true },
    );
  });

  onUnmounted(() => {
    if (audio) {
      audio.pause();
      audio.removeEventListener('timeupdate', syncState);
      audio.removeEventListener('canplaythrough', handleReady);
      audio.src = '';
      audio.load();
      audio = null;
    }
  });

  return {
    currentTime,
    duration,
    isPlaying,
    isReady,
    playbackRate,
    play: () =>
      audio?.play().catch((e) => {
        syncState();
      }),
    pause: () => audio?.pause(),
    seek: (time: number) => {
      if (audio) audio.currentTime = Math.min(Math.max(time, 0), duration.value);
    },
    setRate: (rate: number) => {
      if (audio) audio.playbackRate = rate;
    },
  };
}
