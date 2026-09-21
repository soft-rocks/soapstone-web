<script setup lang="ts">
import type { LocaleCode } from '~/stores/settings';

const { t, locales } = useI18n();

useSeoMeta({
  title: 'Settings',
});

const settings = useSettingsStore();
const resolvedLocale = useResolvedLocale();

const localeOptions = computed(() =>
  locales.value.map((locale) => ({
    label: t(`languages.${locale.code}`),
    value: locale.code as LocaleCode,
  })),
);
</script>

<template>
  <div class="max-w-[720px]">
    <h1 class="section-title m-0 mb-10">{{ t('settings.title') }}</h1>

    <ClientOnly>
      <section class="border-muted border-t">
        <div class="border-muted flex items-start justify-between gap-8 border-b py-6">
          <div>
            <p class="m-0 text-[15px]">{{ t('settings.language.label') }}</p>
          </div>

          <USelect
            :model-value="resolvedLocale"
            :items="localeOptions"
            value-key="value"
            class="w-48 shrink-0"
            :aria-label="t('settings.language.label')"
            @update:model-value="settings.setLocalePreference($event as LocaleCode)"
          />
        </div>

        <div class="border-muted flex items-start justify-between gap-8 border-b py-6">
          <div>
            <p class="m-0 text-[15px]">{{ t('settings.alwaysShowTranslation.label') }}</p>
          </div>

          <USwitch
            v-model="settings.alwaysShowTranslation"
            :aria-label="t('settings.alwaysShowTranslation.label')"
            class="mt-1 shrink-0"
          />
        </div>
      </section>

      <template #fallback>
        <p class="text-dimmed text-[13px]">{{ t('settings.loading') }}</p>
      </template>
    </ClientOnly>
  </div>
</template>
