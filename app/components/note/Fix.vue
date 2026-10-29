<script setup lang="ts">
/**
 * A common mistake: the wrong sentence struck through in red, the right sentence with the
 * fixed words circled, and the reason, if any, in the default slot. `fix` takes NoteMark's marks.
 */
defineProps<{ wrong: string; right: string; fix: string | string[] }>();
</script>

<template>
  <div class="note-fix">
    <p class="fix-line is-wrong">
      <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 4l12 12M16 4L4 16" /></svg>
      <s>{{ wrong }}</s>
    </p>
    <div class="fix-line">
      <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10.5l4.5 4.5L17 5" /></svg>
      <NoteMark :sentence="right" :marks="Array.isArray(fix) ? fix : [fix]" />
    </div>
    <p v-if="$slots.default" class="remark"><slot /></p>
  </div>
</template>

<style>
/* A common mistake: the wrong sentence struck in red over the right one */
/* Name the layer order first. A component style can load before main.css; without this,
   components would become the first layer, and the base reset would override it. */
@layer theme, base, components, utilities;

@layer components {
  .deck .note-fix {
    display: flex;
    flex-direction: column;
    gap: 0.7em;
  }

  .deck .note-fix .fix-line {
    display: flex;
    align-items: baseline;
    gap: 0.6em;
    font-size: 1.2em;
    line-height: 1.4;
  }

  .deck .note-fix .fix-line > svg {
    flex: none;
    width: 0.8em;
    height: 0.8em;
    fill: none;
    stroke: var(--ui-text);
    stroke-width: 2.2;
  }

  .deck .note-fix .fix-line.is-wrong {
    color: var(--ui-text-muted);
  }

  .deck .note-fix .fix-line.is-wrong > svg {
    stroke: var(--color-alert);
  }

  .deck .note-fix .fix-line.is-wrong s {
    text-decoration-color: var(--color-alert);
    text-decoration-thickness: 2px;
  }

  .deck .note-fix .remark {
    margin-top: 0.4em;
    padding-top: 0.8em;
    border-top: 1px solid var(--ui-border-accented);
  }

  .deck .note-fix .translation {
    display: block;
  }

  .deck .note-fix .mark-sentence {
    flex: 1 1 auto;
    min-width: 0;
    margin: 0;
    font-size: 1em;
    white-space: normal;
    color: var(--ui-text);
  }

  .deck .note-fix .mark-ring {
    font-weight: 700;
  }
}
</style>
