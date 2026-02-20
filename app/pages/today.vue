<script setup lang="ts">
  const started = ref(false);
  const completed = ref<{ answer: string; hint: string }[]>([]);
  const loading = ref(true);

  const { fetchToday, fetchDaily } = useCdnApi();

  const loadSentences = async () => {
    try {
      return await fetchToday();
    } catch {
      return await fetchDaily();
    }
  };

  const originalSentences = ref<string[]>([]);
  const queue = ref<string[]>([]);

  // Load sentences on mount
  loadSentences().then((sentences) => {
    originalSentences.value = sentences;
    queue.value = [...sentences];
    loading.value = false;
  });

  const currentUrl = computed(() => queue.value[0] ?? '');
  const isComplete = computed(() => queue.value.length == 0);

  const handleNext = (data: { answer: string; hint: string }) => {
    completed.value.push(data);
    queue.value = queue.value.slice(1);
  };

  const handleSkip = (data: { answer: string; hint: string }) => {
    completed.value.push(data);
    const current = queue.value[0]!;
    queue.value = [...queue.value.slice(1), current];
  };

  const reset = () => {
    queue.value = [...originalSentences.value];
    completed.value = [];
    started.value = false;
  };
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <div v-if="loading" class="flex flex-col items-center">
      <Icon name="s:logo-red" class="h-12 w-12 animate-spin opacity-50" />
      <p class="text-muted mt-2">Loading...</p>
    </div>
    <div class="flex w-full max-w-md flex-1 flex-col items-center" v-else-if="!started">
      <div class="flex flex-1 flex-col items-center justify-center">
        <h1 class="mb-4 text-3xl font-bold">Daily Practice</h1>
        <p class="text-muted mb-6">{{ queue.length }} sentences remaining</p>
      </div>
      <div class="flex shrink-0 justify-center">
        <UButton size="lg" label="Start" @click="started = true" />
      </div>
    </div>
    <div class="flex h-full w-full max-w-md flex-col" v-else-if="isComplete">
      <h1 class="mb-4 shrink-0 text-3xl font-bold">Great Job!</h1>
      <p class="text-muted mb-4 shrink-0">All done for today!</p>
      <div class="max-h-[calc(100vh-300px)] overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <div class="space-y-4 pb-4 text-left">
          <div v-for="(item, i) in completed" :key="i" class="bg-card rounded-lg border p-4">
            <p class="font-medium">{{ item.answer }}</p>
            <p v-if="item.hint" class="text-muted mt-1 text-sm">{{ item.hint }}</p>
          </div>
        </div>
      </div>
      <UButton class="mt-4 shrink-0" size="lg" label="Start Over" @click="reset" />
    </div>
    <ExamineListening :url="currentUrl" @next="handleNext" @skip="handleSkip" v-else />
  </div>
</template>
