import type { LocaleCode } from '~/stores/settings';

/**
 * The locale actually in use: the stored preference when there is one, otherwise the
 * closest match to the browser's languages, otherwise the default locale.
 */
export function useResolvedLocale() {
  const settings = useSettingsStore();
  const { locales, defaultLocale } = useI18n();

  const available = computed(() =>
    locales.value.map((locale) => ({
      code: locale.code as LocaleCode,
      language: locale.language ?? locale.code,
    })),
  );

  return computed<LocaleCode>(() => {
    if (settings.locale) return settings.locale;
    if (import.meta.server) return defaultLocale as LocaleCode;

    return detectBrowserLocale(
      navigator.languages?.length ? navigator.languages : [navigator.language],
      available.value,
      defaultLocale as LocaleCode,
    );
  });
}
