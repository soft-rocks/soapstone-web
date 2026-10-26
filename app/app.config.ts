export default defineAppConfig({
  ui: {
    // The soft.rocks logo red is the only chromatic accent; neutrals are zinc
    colors: {
      primary: 'rock',
      neutral: 'zinc',
    },
    button: {
      slots: {
        base: 'rounded-none font-semibold transition-colors duration-150',
      },
      defaultVariants: {
        size: 'lg',
      },
    },
    // Nuxt UI hardcodes rounded-full on the switch, so --ui-radius does not reach it
    switch: {
      slots: {
        base: 'rounded-none',
        thumb: 'rounded-none',
      },
    },
  },
});
