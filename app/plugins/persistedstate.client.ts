import type { Pinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

/**
 * Client-only persistence. This is a static site: localStorage does not exist
 * during prerender, so the generated HTML always carries the defaults and the
 * stored preferences are restored in the browser.
 */
export default defineNuxtPlugin(({ $pinia }) => {
  ($pinia as Pinia).use(
    createPersistedState({
      storage: localStorage,
      key: (id: string) => `soapstone:${id}`,
    }),
  );
});
