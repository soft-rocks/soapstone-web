<script setup lang="ts">
  const started = ref(false);
  const originalSentences: string[] = [
    'https://cdn.jsdelivr.net/gh/soft-rocks/soapstone-cdn@main/sentence/256d88d9e22cf9a138818b21a35ce766/zhtw.json',
    'https://cdn.jsdelivr.net/gh/soft-rocks/soapstone-cdn@main/sentence/e8272f030280fcfb5be026dd3b6d4e04/zhtw.json',
  ];
  const queue = ref<string[]>([...originalSentences]);
  const completed = ref<{ answer: string; hint: string }[]>([]);

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
    queue.value = [...originalSentences];
    completed.value = [];
    started.value = false;
  };
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <div class="flex w-full max-w-md flex-1 flex-col items-center" v-if="!started">
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
