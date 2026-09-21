/**
 * Play the clear take of an example sentence, addressed by its content hash.
 * Nothing is fetched until a reader asks for it, and a sentence the CDN does not
 * carry simply fails quietly.
 */
export function useSentenceAudio() {
  const playing = ref('');
  let element: HTMLAudioElement | null = null;

  const stop = () => {
    element?.pause();
    playing.value = '';
  };

  const play = async (sentence: string) => {
    if (playing.value === sentence) {
      stop();
      return;
    }

    const url = sentenceAudioUrl(await sentenceHash(sentence));
    element ??= new Audio();
    element.onended = () => (playing.value = '');
    element.onerror = () => (playing.value = '');
    element.src = url;

    playing.value = sentence;
    try {
      await element.play();
    } catch {
      playing.value = '';
    }
  };

  onBeforeUnmount(() => {
    stop();
    element = null;
  });

  return { play, stop, playing };
}
