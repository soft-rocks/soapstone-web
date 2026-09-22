<script setup lang="ts">
const { t } = useI18n();

const menuOpen = ref(false);
const route = useRoute();

// A practice run is a page below a note, so it offers the way back up to it
const backToNote = computed(() =>
  route.name === 'grammars-id-sentences' ? `/grammars/${route.params.id}` : '',
);

// CI injects the commit through NUXT_PUBLIC_GIT_COMMIT; it reads 'dev' locally
const version = computed(() => useRuntimeConfig().public.gitCommit.slice(0, 6));

const links = [
  { to: '/grammars', label: 'nav.grammar' },
  { to: '/settings', label: 'nav.settings' },
];
</script>

<template>
  <div class="mx-auto flex min-h-screen max-w-[1120px] flex-col px-8 pb-20 md:px-16">
    <header class="border-muted flex h-16 items-center justify-between gap-6 border-b">
      <div class="flex items-center gap-4">
        <NuxtLink to="/" aria-label="English Notes" class="flex items-center">
          <img src="/icon.svg" alt="" class="size-9" />
        </NuxtLink>

        <NuxtLink
          v-if="backToNote"
          :to="backToNote"
          :aria-label="t('practice.backToNote')"
          :title="t('practice.backToNote')"
          class="text-dimmed hover:text-primary flex items-center transition-colors"
        >
          <UIcon name="i-lucide-arrow-left" class="size-5" />
        </NuxtLink>
      </div>

      <USlideover v-model:open="menuOpen" side="left" :title="t('nav.menu')">
        <button
          type="button"
          class="text-dimmed hover:text-primary flex cursor-pointer items-center transition-colors"
          :aria-label="t('nav.menu')"
        >
          <UIcon name="i-lucide-menu" class="size-6" />
        </button>

        <template #body>
          <nav class="flex flex-col">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="border-muted hover:text-primary border-b py-4 text-lg transition-colors"
              active-class="text-primary"
              @click="menuOpen = false"
            >
              {{ t(link.label) }}
            </NuxtLink>

            <div class="border-muted flex items-baseline justify-between gap-4 border-b py-4">
              <span class="text-lg">{{ t('nav.version') }}</span>
              <span class="text-dimmed font-mono text-xs">{{ version }}</span>
            </div>
          </nav>
        </template>
      </USlideover>
    </header>

    <main class="flex-1 pt-4 sm:pt-10">
      <slot />
    </main>
  </div>
</template>
