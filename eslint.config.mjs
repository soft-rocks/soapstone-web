// @ts-check
import prettier from 'eslint-config-prettier';
import withNuxt from './.nuxt/eslint.config.mjs';

// The Hallmark skill ships its own scripts, and .hallmark holds its run records
export default withNuxt({ ignores: ['.claude/**', '.hallmark/**'] }, prettier);
