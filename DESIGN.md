# Design: soapstone-web

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose;
the file is the rule. It follows the soft.rocks site (`soft.rocks.official`).

## System

- Genre: modern-minimal
- Shape of the first page: app screen (a study tool: lists, a note reader, a dictation test)
- Theme: custom (vibe: "soft.rocks: white, near-black ink, square, one red")
- Axes: white paper / bold sans display / one red accent · posture: restrained

## Tokens

`app/assets/css/main.css` is the source of truth: the `@theme static` block and the `--ui-*`
remap under it. `app/app.config.ts` points Nuxt UI's `primary` at `rock` and `neutral` at `zinc`.
The roles:

```css
:root {
  --color-paper: #ffffff;
  --color-paper-2: var(--color-zinc-50);
  --color-paper-3: var(--color-zinc-100);
  --color-ink: #0b1013;
  --color-muted: var(--color-zinc-500);
  --color-dimmed: var(--color-zinc-400);
  --color-rule: var(--color-zinc-200);
  --color-accent: #992f33; /* rock-600, the logo red */
  --color-accent-tint: #fbf3f3; /* rock-50 */
  --color-alert: #992f33; /* a wrong answer */
  --font-body:
    'Public Sans', ui-sans-serif, system-ui, -apple-system, 'PingFang TC', 'Noto Sans TC',
    sans-serif;
  --radius-card: 0;
  --radius-pill: 0;
  --rule-hair: 1px;
  --shadow-card: none;
}
```

## Rules

1. One theme, light. `colorMode` is fixed to light, and `.light` and `.dark` get the same values.
2. One chromatic accent: the logo red. It marks the active state: the playing row, a toggle that
   is on, a hovered card. Grays are Tailwind's `zinc`. No other hue.
3. No rounded corners. `--ui-radius` is 0, Nuxt UI buttons are `rounded-none`, the switch is
   squared in `app.config.ts`, and no class in `main.css` sets `border-radius`. Do not add
   `rounded-*` to a template.
4. Type: Public Sans for Latin, PingFang TC or Noto Sans TC for Chinese. Headings are 700 with
   negative letter-spacing (`.section-title` is -0.025em). Body is 400 at 16px, line-height 1.6.
5. Chinese takes no positive letter-spacing and no uppercase styling. Labels are `.group-label`:
   14px, 600, muted, untracked. An 11px label at 0.18em tracking split 句子測驗 into separate
   glyphs and read as a missing font.
6. Hairlines separate things. A page title gets one under it (`.section-title::after`). Long
   lists are hairline rows (`.list-row`), not boxes.
7. A box is allowed only for a small set of choices, such as the home page categories
   (`.category-card`: square, white, 1px zinc border, a 3px ink left bar that turns red on
   hover).
8. In the dictation test, a wrong blank is red, a correct blank gets a solid ink underline. A
   correct blank is never red, because red means wrong there.
9. No drop shadows, no gradients.

## Controls

- Primary: `.icon-button.is-primary`, filled ink, red on hover · square · 48px (44px on a phone)
- Secondary: `.icon-button`, white with a zinc-300 border, ink border on hover · square · same
  size. `.is-on` marks a toggle that is on (red border and icon).

## Motion

- Character: still. Color transitions of 0.15s only; no reveals. The loading spinner and the
  scroll-to-top stop under reduced motion.

## Exports

None. Tokens live in `app/assets/css/main.css`; there is no separate `tokens.css`.
