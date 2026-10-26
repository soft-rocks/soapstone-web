import type { Sentence } from '~/types/sentence';

/** Three missing sentences in a row means the set is not on the CDN. */
const MAX_MISSING_IN_ROW = 3;

/**
 * One dictation run, shared by every practice page. It starts a fresh shuffled run, loads
 * each sentence from the CDN, and handles failure the same way everywhere:
 *
 * - a sentence the CDN does not have (404) is skipped;
 * - three missing in a row stops the run and goes back to the home page, instead of
 *   requesting every sentence in the set;
 * - a CDN that does not answer after its retries (`fetchCdn`) goes back to the home page.
 */
export async function usePracticeRun(runId: () => string, sentences: () => string[]) {
  const practice = usePracticeStore();
  const complete = ref(false);
  const missingInRow = ref(0);

  // Entering the practice always starts a fresh run, in a new random order
  onMounted(() => practice.start(runId(), sentences()));

  const current = computed(() => practice.current);

  // Sentences live on the CDN under the hash of their own text
  const { data: sentence, error } = await useAsyncData<Sentence | null>(
    () => `practice:${current.value}`,
    async () => (current.value ? fetchSentence<Sentence>(current.value) : null),
    { server: false, watch: [current] },
  );

  watch(sentence, (loaded) => {
    if (loaded) missingInRow.value = 0;
  });

  watch(error, (failed) => {
    if (!failed || !current.value) return;
    if (isCdnUnreachable(failed)) {
      navigateTo('/');
      return;
    }
    practice.markMissing(current.value);
    missingInRow.value += 1;
    if (missingInRow.value >= MAX_MISSING_IN_ROW) {
      navigateTo('/');
      return;
    }
    practice.next();
  });

  watch(current, () => (complete.value = false));

  // A correct answer is recorded at once; the run moves on after the clear read-back
  watch(complete, (done) => {
    if (done) practice.markCorrect(current.value);
  });

  return { practice, sentence, complete };
}
