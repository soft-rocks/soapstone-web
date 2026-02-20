<script lang="ts" setup>
  useSeoMeta({
    title: 'SoftRocks - Japanese Learning Resources',
  });

  const version = import.meta.env.VITE_GIT_COMMIT || 'dev';
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-6 py-10">
    <Icon name="s:logo-red" class="h-48 w-48" />
    <div class="h-0.5 w-12 bg-gray-200"></div>
    <h1 class="text-4xl font-bold">SoftRocks</h1>
    <div class="h-0.5 w-12 bg-gray-200"></div>
    <pre class="max-w-md text-center text-lg text-gray-600 dark:text-gray-400">
我買了一個網域，
但還在想能用它來做些什麼。
我才剛意識到，
我的網站需要放一些說明文字，
所以這就是說明。 
浪費您的時間閱讀這些，
我深感抱歉。
    </pre>
    <div class="mt-4 flex flex-col items-center gap-3">
      <UButton to="/daily" size="xl" label="Start Daily Practice" />
      <UButton to="/about" variant="ghost" label="About" />
      <span class="mt-2 text-xs text-gray-400">{{ version }}</span>
    </div>
  </div>
</template>
