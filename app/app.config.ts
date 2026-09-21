export default defineAppConfig({
  ui: {
    // Ink blue is the only chromatic accent; neutrals are warm gray
    colors: {
      primary: 'ink',
      neutral: 'sand',
    },
    button: {
      slots: {
        base: 'rounded-none font-ui font-medium tracking-[0.2px] transition-transform duration-150 hover:-translate-y-px',
      },
      defaultVariants: {
        size: 'lg',
      },
    },
  },
});
