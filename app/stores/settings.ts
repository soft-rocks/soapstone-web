import { defineStore } from 'pinia';

export type LocaleCode = 'en' | 'zhtw';

interface SettingsState {
  /**
   * Interface language. `null` means follow the browser, which is the default until
   * the reader picks one. Never part of the URL; applied on the client after hydration.
   */
  locale: LocaleCode | null;
  /** Show translations without the reader having to open them. */
  alwaysShowTranslation: boolean;
  /** Keep replaying a sentence's takes while practising, instead of stopping after one pass. */
  loopAudio: boolean;
}

const defaults = (): SettingsState => ({
  locale: null,
  alwaysShowTranslation: false,
  loopAudio: false,
});

export const useSettingsStore = defineStore('settings', {
  state: defaults,

  actions: {
    setLocalePreference(locale: LocaleCode) {
      this.locale = locale;
    },
    setAlwaysShowTranslation(value: boolean) {
      this.alwaysShowTranslation = value;
    },
    setLoopAudio(value: boolean) {
      this.loopAudio = value;
    },
    resetAll() {
      this.$patch(defaults());
    },
  },

  // Persisted to localStorage['soapstone:settings'] by app/plugins/persistedstate.client.ts
  persist: true,
});
