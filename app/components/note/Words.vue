<script setup lang="ts">
/**
 * A sentence or a sentence pattern drawn as SVG. Each part is a word on a rule with its name
 * under the rule; `alts` lists other words that fit the same place. The parts wrap into rows
 * that fit the slide. A phone (under 560px) draws at full size in more rows; it does not
 * shrink the desktop drawing. `move` draws an arrow from one part to another, for a word that
 * moved. Text widths come from `measure`, because SVG text does not flow.
 */
import { measure } from '~/utils/measure';
import { ring } from '~/utils/ring';

export interface WordPart {
  /** The words. Leave it out for a gap: a place with nothing in it. */
  t?: string;
  /** The name under the rule. A line break puts the rest on a second line. */
  role?: string;
  /**
   * key: what the slide is about, bold. slot: a placeholder like someone. dim: context.
   * gone: words the sentence leaves out, gray with a line through them.
   */
  kind?: 'key' | 'slot' | 'dim' | 'gone';
  ring?: boolean;
  /** Other words that fit the same place, listed under the name. */
  alts?: string[];
}

const props = withDefaults(
  defineProps<{ parts: WordPart[]; size?: number; move?: { from: number; to: number } }>(),
  { size: 30, move: undefined },
);

// The desktop slide is 634px wide; the server lays out for it, the client re-measures
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
  // 600 units fill the desktop slide. A phone draws 1 unit to 1px with the words at 24px at most.
  const phone = width.value < 560;
  const s = phone ? Math.min(props.size, 24) : props.size;
  const label = Math.round(s * 0.6);
  const alt = Math.round(s * 0.62);
  const desktop = Math.min(1.06, width.value / 600);
  const room = phone ? width.value - 8 : width.value / desktop;
  const lines = Math.max(1, ...props.parts.map((part) => part.role?.split('\n').length ?? 0));

  const top = props.move ? s * 1.5 : s * 0.35;
  const base = top + s * 0.8;
  const rule = base + s * 0.3;
  const name = rule + label + 6;
  const leading = label * 1.3;
  const last = name + (lines - 1) * leading;
  const alts = (i: number) => last + 10 + (i + 1) * alt * 1.35;

  const named = props.parts.some((part) => part.role);
  const space = named ? s * 0.42 : measure(' ', s) + s * 0.1;
  const weight = (part: WordPart) => (part.kind === 'key' ? 700 : 400);
  // A part wider than the slide breaks into lines of whole words, of about the same width. A
  // named part keeps the rule on each line, and the name goes under the last line. `first`
  // maps a part to its first line, for `move`.
  const pieces: (WordPart & { joined?: boolean })[] = [];
  const first: number[] = [];
  for (const part of props.parts) {
    first.push(pieces.length);
    if (!part.t || measure(part.t, s, weight(part)) <= room) {
      pieces.push(part);
      continue;
    }
    const words = part.t.split(' ');
    const split = (limit: number) => {
      const lines: string[] = [];
      for (const word of words) {
        const last = lines.at(-1);
        if (last !== undefined && measure(`${last} ${word}`, s, weight(part)) <= limit) {
          lines[lines.length - 1] = `${last} ${word}`;
        } else lines.push(word);
      }
      return lines;
    };
    const count = split(room).length;
    let [low, high] = [0, room];
    while (high - low > 1) {
      const mid = (low + high) / 2;
      if (split(mid).length > count) low = mid;
      else high = mid;
    }
    const lines = split(high);
    lines.forEach((line, at) => {
      const end = at === lines.length - 1;
      pieces.push({
        ...part,
        t: line,
        role: end ? part.role : undefined,
        joined: !end && !!part.role,
      });
    });
  }

  const items = pieces.map((part) => {
    const word = part.t ? measure(part.t, s, weight(part)) : s * 2.4;
    // A ringed word keeps room for the ring, so the ring does not touch the next word
    const column = Math.max(
      part.ring ? word + s * 0.9 : word,
      ...(part.role?.split('\n') ?? []).map((line) => measure(line, label)),
      ...(part.alts ?? []).map((text) => measure(text, alt)),
    );
    return { ...part, word, column, x: 0, row: 0 };
  });

  let x = 0;
  let row = 0;
  let wide = 0;
  for (const item of items) {
    if (x > 0 && x + item.column > room) {
      x = 0;
      row += 1;
    }
    item.x = x + item.column / 2;
    item.row = row;
    x += item.column + space;
    wide = Math.max(wide, x - space);
  }

  // An arrow between two parts in one row goes over the row. An arrow from the first part of
  // a lower row goes up the left side. It ends at the left of the target when the target
  // starts its row; otherwise it goes on over the target's row and comes down on it. An arrow
  // from another part of another row goes along the right side, over the target's row and
  // down. It leaves from the right end of the part when the part ends its row; otherwise it
  // leaves from over the part, so it does not cross the words after it.
  const from = props.move && items[first[props.move.from] ?? -1];
  const to = props.move && items[first[props.move.to] ?? -1];
  const side = !!from && !!to && from.row !== to.row && from.x === from.column / 2;
  const level = side && to.x === to.column / 2;
  const right = !!from && !!to && from.row !== to.row && !side;
  const over = from && to && (from.row === to.row || (side && !level) || right) ? to.row : -1;
  const lift = right && !!from && items.filter((item) => item.row === from.row).at(-1) !== from;
  const pad = side ? 28 : 0;
  const after = right ? 28 : 0;

  // Each row is as tall as its words, names and alternatives. Only the row with an arrow
  // over it keeps the room for the arrow.
  const extra = top - s * 0.35;
  const tops: number[] = [];
  let y = 0;
  for (let at = 0; at <= row; at += 1) {
    const cells = items.filter((item) => item.row === at);
    const most = Math.max(0, ...cells.map((item) => item.alts?.length ?? 0));
    // Alternatives go under the names, so a row with alternatives keeps the room for the names
    // A row of plain words, with no rule, ring or name, is as tall as a line of text, so the
    // lines of a long part read as one paragraph
    const plain = cells.every((item) => item.t && !item.role && !item.joined && !item.ring);
    const bottom = cells.some((item) => item.role || item.alts?.length)
      ? last
      : plain
        ? base - s * 0.1
        : rule;
    tops.push(y - (at === over || (lift && from && at === from.row) ? 0 : extra));
    y = tops[at]! + bottom + most * alt * 1.35 + (most ? 10 : 0) + s * 0.45;
  }
  // The last row keeps room for the tails of letters like g and y
  const height = Math.max(y - s * 0.3, tops[row]! + base + s * 0.3);

  // A phone shrinks only a part wider than the slide
  const k = phone ? Math.min(1, width.value / (wide + 8 + pad + after)) : desktop;
  let arrow = '';
  let head = '';
  if (from && to && side) {
    const x1 = from.x - from.word / 2 - 6;
    const x2 = to.x - to.word / 2;
    const y1 = tops[from.row]! + base - s * 0.35;
    const y2 = tops[to.row]! + base - s * 0.35;
    const bend = Math.min(x1, x2) - 22;
    if (level) {
      arrow = `M${x1} ${y1}C${bend} ${y1} ${bend} ${y2} ${x2 - 12} ${y2}`;
      head = `M${x2 - 2} ${y2}l-10 -6v12z`;
    } else {
      const y3 = tops[to.row]! + base - s * 0.9;
      const peak = y3 - s * 0.9;
      arrow = `M${x1} ${y1}C${bend} ${y1} ${bend} ${peak} ${bend + s} ${peak}H${to.x - s * 0.6}Q${to.x} ${peak} ${to.x} ${y3 - 9}`;
      head = `M${to.x} ${y3}l-6 -10h12z`;
    }
  } else if (from && to && right) {
    // Straight lines with round corners, so the side line stays right of every row
    const y3 = tops[to.row]! + base - s * 0.9;
    const peak = y3 - s * 0.9;
    const bend = wide + 22;
    const r = s * 0.6;
    const y0 = tops[from.row]! + base - s * 0.9;
    const y1 = lift ? y0 - s * 0.9 : tops[from.row]! + base - s * 0.55;
    const start = lift
      ? `M${from.x} ${y0 - 4}V${y1 + r}Q${from.x} ${y1} ${from.x + r} ${y1}`
      : `M${from.x + from.word / 2 + 6} ${y1}`;
    const up = y1 > peak ? -1 : 1;
    arrow = `${start}H${bend - r}Q${bend} ${y1} ${bend} ${y1 + up * r}V${peak - up * r}Q${bend} ${peak} ${bend - r} ${peak}H${to.x + s * 0.6}Q${to.x} ${peak} ${to.x} ${y3 - 9}`;
    head = `M${to.x} ${y3}l-6 -10h12z`;
  } else if (from && to) {
    const y1 = tops[from.row]! + base - s * 0.9;
    const y2 = tops[to.row]! + base - s * 0.9;
    const lift = s * 1.1 + Math.abs(y1 - y2) * 0.3;
    const peak = Math.min(y1, y2) - lift;
    arrow = `M${from.x} ${y1}C${from.x} ${peak} ${to.x} ${peak} ${to.x} ${y2 - 9}`;
    head = `M${to.x} ${y2}l-6 -10h12z`;
  }
  return {
    s,
    label,
    alt,
    k,
    base,
    rule,
    name,
    leading,
    alts,
    tops,
    pad,
    after,
    items,
    wide,
    height,
    arrow,
    head,
  };
});
</script>

<template>
  <div ref="box" class="note-words">
    <svg
      :viewBox="`${-4 - layout.pad} 0 ${layout.wide + 8 + layout.pad + layout.after} ${layout.height}`"
      :width="(layout.wide + 8 + layout.pad + layout.after) * layout.k"
      :height="layout.height * layout.k"
      role="img"
      :aria-label="parts.map((part) => part.t ?? '').join(' ')"
    >
      <g
        v-for="(item, index) in layout.items"
        :key="index"
        :transform="`translate(0 ${layout.tops[item.row]})`"
      >
        <text
          v-if="item.t"
          :x="item.x"
          text-anchor="middle"
          :y="layout.base"
          :class="['w-word', item.kind && `is-${item.kind}`]"
          :style="{ fontSize: `${layout.s}px` }"
        >
          {{ item.t }}
        </text>
        <line
          v-if="item.kind === 'gone'"
          :x1="item.x - item.word / 2"
          :x2="item.x + item.word / 2"
          :y1="layout.base - layout.s * 0.3"
          :y2="layout.base - layout.s * 0.3"
          class="w-strike"
        />
        <!-- A ringed word has no rule: the ring marks it, and its bottom runs along the rule -->
        <line
          v-if="(item.role || item.joined || !item.t) && !item.ring"
          :x1="item.x - item.word / 2"
          :x2="item.x + item.word / 2"
          :y1="layout.rule"
          :y2="layout.rule"
          :class="[
            'w-rule',
            (item.kind === 'slot' || item.kind === 'gone' || !item.t) && 'is-dashed',
          ]"
        />
        <text
          v-if="item.role"
          :x="item.x"
          text-anchor="middle"
          :y="layout.name"
          class="w-name"
          :style="{ fontSize: `${layout.label}px` }"
        >
          <tspan
            v-for="(line, at) in item.role.split('\n')"
            :key="at"
            :x="item.x"
            :dy="at ? layout.leading : 0"
          >
            {{ line }}
          </tspan>
        </text>
        <text
          v-for="(text, at) in item.alts"
          :key="text"
          :x="item.x"
          text-anchor="middle"
          :y="layout.alts(at)"
          class="w-alt"
          :style="{ fontSize: `${layout.alt}px` }"
        >
          {{ text }}
        </text>
        <path
          v-if="item.ring"
          :d="ring(item.word + layout.s * 0.8, layout.s * 1.4)"
          class="w-ring"
          :transform="`translate(${item.x - (item.word + layout.s * 0.8) / 2} ${layout.base - layout.s * 1.02})`"
        />
      </g>
      <path v-if="layout.arrow" :d="layout.arrow" class="w-arrow" />
      <path v-if="layout.head" :d="layout.head" class="w-head" />
    </svg>
  </div>
</template>

<style src="./words.css"></style>
