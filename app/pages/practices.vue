<script setup lang="ts">
const { t } = useI18n();

const practice = usePracticeStore();
const router = useRouter();
const trailOf = useBreadcrumbTrail();

// A row names its set by the trail of the set's practice page, the same trail the layout
// shows there, without the home and practice crumbs. The labels are looked up now, in the
// current language. The row is a link already, so no crumb in it links anywhere.
const crumbsOf = (path: string) => {
  const target = router.resolve(path);
  return trailOf(String(target.name ?? ''), String(target.params.id ?? ''))
    .slice(1, -1)
    .map((crumb) => ({ label: crumb.label }));
};

useSeoMeta({
  title: 'Practice',
});
</script>

<template>
  <div class="max-w-[720px]">
    <h1 class="section-title m-0 mb-10">{{ t('practices.title') }}</h1>

    <!-- The records live in localStorage, so the list exists only in the browser -->
    <ClientOnly>
      <p v-if="!practice.summaries.length" class="text-muted m-0">{{ t('practices.empty') }}</p>

      <ul v-else class="m-0 list-none p-0">
        <li v-for="item in practice.summaries" :key="item.runId">
          <NuxtLink
            :to="item.path"
            class="list-row flex flex-col gap-1 pr-4 sm:flex-row sm:items-start sm:gap-6"
          >
            <span class="min-w-0 flex-1">
              <!-- Long sentences wrap here instead of being cut off -->
              <UBreadcrumb
                :items="crumbsOf(item.path)"
                :ui="{ list: 'flex-wrap', linkLabel: 'whitespace-normal' }"
              />
              <span class="text-muted mt-1 block text-sm">
                {{
                  item.finished
                    ? t('practices.finished')
                    : t('practices.progress', { done: item.done, total: item.total })
                }}
              </span>
            </span>
            <span class="text-muted shrink-0 text-sm">
              {{ t('practices.completions', { count: item.completions }) }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </ClientOnly>
  </div>
</template>
