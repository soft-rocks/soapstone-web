# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build locally
npm run preview

# Code formatting
npm run format          # Format all files
npm run format:check    # Check formatting without modifying
```

## Tech Stack

- **Framework**: Nuxt 4 with Vue 3
- **Styling**: Tailwind CSS v4 via @nuxt/ui module
- **Language**: TypeScript
- **i18n**: @nuxtjs/i18n for internationalization
- **Content**: @nuxt/content for file-based content management
- **Linting/Formatting**: ESLint + Prettier

## Project Structure

- `app/` - Main application directory
  - `pages/` - Route components (file-based routing)
  - `components/` - Reusable Vue components
  - `composables/` - Vue composables (Composition API)
  - `layouts/` - Page layouts
  - `types/` - TypeScript type definitions
  - `app.vue` - Root component
  - `app.config.ts` - App configuration

- `public/` - Static assets served as-is
- `nuxt.config.ts` - Nuxt configuration

## Key Configuration

Tailwind CSS v4 is configured via Vite plugin (`@tailwindcss/vite`) with CSS entry point at `~/assets/css/main.css`.