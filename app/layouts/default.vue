<script lang="ts" setup>
  const items = [
    [
      { label: 'Daily', to: '/today', icon: 'i-heroicons-calendar' },
      { label: 'About', to: '/about', icon: 'i-heroicons-information-circle' },
    ],
  ];
</script>
<template>
  <div class="light text-primary flex min-h-dvh w-full flex-col bg-zinc-50">
    <header
      class="sticky top-0 z-50 flex h-16 flex-none items-center border-b border-zinc-200 bg-white/80 px-4 backdrop-blur-md"
    >
      <div class="mx-auto flex w-full max-w-7xl items-center">
        <NuxtLink to="/" class="flex items-center gap-2">
          <Icon name="s:logo-red" class="h-10 w-10" />
          <span class="text-lg font-bold">SoftRocks</span>
        </NuxtLink>
        <div class="flex flex-1 justify-end">
          <UDropdownMenu :items="items" :popper="{ placement: 'bottom-end' }">
            <UButton variant="ghost" icon="i-heroicons-bars-3" />
          </UDropdownMenu>
        </div>
      </div>
    </header>

    <main class="flex h-[calc(100dvh-64px)] flex-col px-4">
      <UContainer class="flex h-full min-h-0 w-full flex-1 flex-col py-6">
        <slot />
      </UContainer>
    </main>
  </div>
</template>
