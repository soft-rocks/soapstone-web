<script setup lang="ts">
/**
 * One start of a sentence that splits into two endings, drawn as SVG: the shared words on the
 * left, a line to each ending, and under each ending what it means and its translation. When
 * the slide is too narrow (a phone), the start sits on top and the endings hang under it. A
 * phone draws at full size with smaller type; it does not shrink the desktop drawing.
 */
import { measure } from '~/utils/measure';

export interface ForkBranch {
  /** The words that differ, bold. */
  head: string;
  /** The rest of the ending. */
  rest: string;
  meaning: string;
  zh: string;
}

const props = defineProps<{ stem: string; branches: ForkBranch[] }>();

const box = useTemplateRef<HTMLElement>('box');
const width = ref(634);
let observer: ResizeObserver | undefined;
onMounted(() => {
  if (!box.value) return;
  observer = new ResizeObserver(([entry]) => {
    if (entry?.contentRect.width) width.value = entry.contentRect.width;
  });
  observer.observe(box.value);
});
onBeforeUnmount(() => observer?.disconnect());

const layout = computed(() => {
  // 600 units fill the desktop slide. A phone draws 1 unit to 1px.
  const phone = width.value < 560;
  const [s, m, z] = phone ? [24, 16, 15] : [28, 18, 16];
  const block = s + 12 + m + 10 + z;
  const desktop = Math.min(1, width.value / 600);
  const room = phone ? width.value - 4 : width.value / desktop;
  const stem = measure(props.stem, s, 700);
  const ends = props.branches.map(
    (branch) =>
      Math.max(
        measure(branch.head, s, 700) + measure(` ${branch.rest}`, s),
        measure(branch.meaning, m),
        measure(branch.zh, z),
      ) + 4,
  );
  const gap = 34;
  const across = stem + 80 + Math.max(...ends);
  const side = across <= room;

  // Each branch: where its block starts, and the middle of its first line
  const x = side ? stem + 80 : 40;
  const first = side ? 6 : s + 28;
  const branches = props.branches.map((branch, index) => {
    const y = first + index * (block + gap);
    return { ...branch, y, line: y + s * 0.8, middle: y + s * 0.5 };
  });
  const height = first + props.branches.length * (block + gap) - gap + 4;
  const stemLine = side ? height / 2 + s * 0.3 : s * 0.85;

  const lines = branches.map((branch) =>
    side
      ? `M${stem + 10} ${stemLine - s * 0.3}C${stem + 50} ${stemLine - s * 0.3} ${x - 50} ${branch.middle} ${x - 10} ${branch.middle}`
      : `M14 ${s + 8}V${branch.middle}H${x - 10}`,
  );
  const wide = side ? across : Math.max(stem, x + Math.max(...ends));
  // A phone shrinks only an ending wider than the slide
  const k = phone ? Math.min(1, width.value / (wide + 4)) : desktop;
  return { s, m, z, k, side, x, stemLine, branches, lines, height, wide };
});
</script>

<template>
  <div ref="box" class="note-words">
    <svg
      :viewBox="`-2 0 ${layout.wide + 4} ${layout.height}`"
      :width="(layout.wide + 4) * layout.k"
      :height="layout.height * layout.k"
      role="img"
      :aria-label="branches.map((branch) => `${stem} ${branch.head} ${branch.rest}`).join('; ')"
    >
      <text
        :x="0"
        :y="layout.stemLine"
        class="w-word is-key"
        text-anchor="start"
        :style="{ fontSize: `${layout.s}px` }"
      >
        {{ stem }}
      </text>
      <path v-for="(line, index) in layout.lines" :key="`l${index}`" :d="line" class="w-arrow" />
      <g v-for="(branch, index) in layout.branches" :key="index">
        <text
          :x="layout.x"
          :y="branch.line"
          class="w-word"
          text-anchor="start"
          :style="{ fontSize: `${layout.s}px` }"
        >
          <tspan class="is-key">{{ branch.head }}</tspan>
          {{ branch.rest }}
        </text>
        <text
          :x="layout.x"
          :y="branch.line + 12 + layout.m"
          class="w-meaning"
          :style="{ fontSize: `${layout.m}px` }"
        >
          {{ branch.meaning }}
        </text>
        <text
          :x="layout.x"
          :y="branch.line + 22 + layout.m + layout.z"
          class="w-zh"
          :style="{ fontSize: `${layout.z}px` }"
        >
          {{ branch.zh }}
        </text>
      </g>
    </svg>
  </div>
</template>

<style src="./words.css"></style>
