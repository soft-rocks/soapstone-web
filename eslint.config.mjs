// @ts-check
import prettier from 'eslint-config-prettier';
import withNuxt from './.nuxt/eslint.config.mjs';

// The Hallmark skill ships its own scripts, and .hallmark holds its run records
export default withNuxt(
  { ignores: ['.claude/**', '.hallmark/**'] },
  // A note page is named by its note id, like Py5.vue
  { files: ['app/notes/**/*.vue'], rules: { 'vue/multi-word-component-names': 'off' } },
  prettier,
);
