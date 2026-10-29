<script setup lang="ts">
/**
 * A note shown as slides. Each child <NoteSlide> registers itself, so the slide order is
 * the template order on the server and on the client. The slides sit side by side in a
 * scroll-snap row: a phone swipes them with its own scrolling, and the buttons and arrow
 * keys scroll the row. The expand button shows the deck over the whole page; the close
 * button and Esc leave it. Expanded on a phone, the slides stack in one column, like a
 * webtoon, and the reader scrolls down through them; a swipe from left to right closes it.
 * The Fullscreen API is not used: iPhone Safari does not support it for a page element.
 */
import { deckKey } from '~/utils/deck';

const props = defineProps<{ sentence?: string }>();

const { t } = useI18n();

const count = ref(0);
const index = ref(0);
provide(deckKey, { register: () => count.value++, index, sentence: props.sentence });

// The children register while the deck hydrates, so the count shows once mounted
const mounted = ref(false);
const root = useTemplateRef<HTMLElement>('root');
const stage = useTemplateRef<HTMLElement>('stage');

// The stylesheet stacks the slides in one column when the deck is expanded on a phone
const vertical = ref(false);
function readDirection() {
  vertical.value = !!stage.value && getComputedStyle(stage.value).flexDirection === 'column';
}

function show(target: number, behavior: ScrollBehavior = 'smooth') {
  const element = stage.value;
  if (!element) return;
  const next = Math.min(count.value - 1, Math.max(0, target));
  const slide = element.children[next] as HTMLElement | undefined;
  if (!slide) return;
  element.scrollTo(
    vertical.value ? { top: place(slide), behavior } : { left: place(slide), behavior },
  );
}

// Where a slide starts in the stage. offsetLeft and offsetTop count from the page, not from
// the stage, so take the first slide's offset away.
function place(slide: HTMLElement) {
  const first = stage.value?.children[0] as HTMLElement | undefined;
  return vertical.value
    ? slide.offsetTop - (first?.offsetTop ?? 0)
    : slide.offsetLeft - (first?.offsetLeft ?? 0);
}

// The slide in view is the last one that starts at or before the middle of the stage
function onScroll() {
  const element = stage.value;
  if (!element) return;
  const middle = vertical.value
    ? element.scrollTop + element.clientHeight / 2
    : element.scrollLeft + element.clientWidth / 2;
  const slides = [...element.children] as HTMLElement[];
  const at = slides.findLastIndex((slide) => place(slide) <= middle);
  index.value = Math.max(0, at);
}

// A click that reaches the first or last slide disables the button it came from, and the
// browser then drops focus to the page, so the arrow keys stop working. Keep focus on the deck.
function step(delta: number) {
  const target = index.value + delta;
  show(target);
  if (target <= 0 || target >= count.value - 1) root.value?.focus({ preventScroll: true });
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && expanded.value) {
    expanded.value = false;
    return;
  }
  const next = ['ArrowRight', 'ArrowDown', 'PageDown'].includes(event.key);
  const previous = ['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key);
  if (!next && !previous) return;
  event.preventDefault();
  show(index.value + (next ? 1 : -1));
}

// In the webtoon column a swipe from left to right closes the deck, like going back: a move
// of 80px or more to the right that is at least twice as far across as down. The column
// scrolls only up and down, so the swipe does not compete with a scroll.
let start: { x: number; y: number } | undefined;
function onTouchStart(event: TouchEvent) {
  const touch = event.touches[0];
  start =
    expanded.value && vertical.value && touch ? { x: touch.clientX, y: touch.clientY } : undefined;
}
function onTouchEnd(event: TouchEvent) {
  const touch = event.changedTouches[0];
  if (!start || !touch) return;
  const across = touch.clientX - start.x;
  const down = Math.abs(touch.clientY - start.y);
  start = undefined;
  if (across >= 80 && across >= down * 2) expanded.value = false;
}

// The layout changes direction, so keep the slide number and scroll back to it
const expanded = ref(false);
watch(expanded, async (value) => {
  const keep = index.value;
  document.documentElement.style.overflow = value ? 'hidden' : '';
  await nextTick();
  readDirection();
  show(keep, 'instant');
  root.value?.focus();
});

// A new width (expand, rotate, resize) keeps the same slide in view. The scroll waits for
// the next frame: a scroll inside the observer callback starts a ResizeObserver loop error.
let observer: ResizeObserver | undefined;
let frame = 0;
let width = 0;
onMounted(() => {
  mounted.value = true;
  if (!stage.value) return;
  observer = new ResizeObserver(([entry]) => {
    const next = entry?.contentRect.width ?? 0;
    if (next === width) return;
    width = next;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      readDirection();
      show(index.value, 'instant');
    });
  });
  observer.observe(stage.value);
});
onBeforeUnmount(() => {
  observer?.disconnect();
  cancelAnimationFrame(frame);
  document.documentElement.style.overflow = '';
});
</script>

<template>
  <section
    ref="root"
    class="deck"
    :class="{ 'is-expanded': expanded }"
    tabindex="0"
    :aria-roledescription="t('deck.label')"
    @keydown="onKeydown"
  >
    <div class="deck-frame">
      <div
        ref="stage"
        class="deck-stage"
        @scroll.passive="onScroll"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
      >
        <slot />
      </div>

      <div class="deck-nav">
        <button
          type="button"
          class="icon-button size-10"
          :disabled="index === 0"
          :aria-label="t('deck.previous')"
          :title="t('deck.previous')"
          @click="step(-1)"
        >
          <UIcon
            :name="vertical ? 'i-lucide-chevron-up' : 'i-lucide-chevron-left'"
            class="size-5"
          />
        </button>
        <span class="deck-count">{{ mounted ? `${index + 1} / ${count}` : '' }}</span>
        <button
          type="button"
          class="icon-button size-10"
          :disabled="index === count - 1"
          :aria-label="t('deck.next')"
          :title="t('deck.next')"
          @click="step(1)"
        >
          <UIcon
            :name="vertical ? 'i-lucide-chevron-down' : 'i-lucide-chevron-right'"
            class="size-5"
          />
        </button>
        <button
          type="button"
          class="icon-button ml-auto size-10"
          :aria-label="expanded ? t('deck.close') : t('deck.expand')"
          :title="expanded ? t('deck.close') : t('deck.expand')"
          @click="expanded = !expanded"
        >
          <UIcon :name="expanded ? 'i-lucide-x' : 'i-lucide-maximize'" class="size-5" />
        </button>
      </div>
    </div>
  </section>
</template>

<style>
/* The slides sit in a scroll-snap row, so a phone swipes them natively. From 560px wide the
   stage is 16:9. The stage is the paper-2 surface, not a box: no border, no card inside it. */
/* Name the layer order first. A component style can load before main.css; without this,
   components would become the first layer, and the base reset would override it. */
@layer theme, base, components, utilities;

@layer components {
  .deck {
    margin: 0 0 48px;
    outline: none;
  }

  .deck:focus-visible .deck-stage {
    outline: 2px solid var(--color-ink);
    outline-offset: 2px;
  }

  /* Expanded: the deck covers the page. The close button and Esc leave it. */
  .deck.is-expanded {
    position: fixed;
    inset: 0;
    z-index: 100;
    margin: 0;
    display: flex;
    padding: 16px;
    overflow-y: auto;
    background: var(--ui-bg);
  }

  .deck.is-expanded .deck-frame {
    width: min(100%, (100dvh - 96px) * 16 / 9);
    margin: auto;
  }

  .deck-frame {
    container-type: inline-size;
  }

  .deck-stage {
    display: flex;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    background: var(--ui-bg-muted);
  }

  .deck-stage::-webkit-scrollbar {
    display: none;
  }

  .deck-nav {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
  }

  .deck-count {
    min-width: 4.5em;
    text-align: center;
    font-size: 14px;
    color: var(--ui-text-muted);
    font-variant-numeric: tabular-nums;
  }

  @container (min-width: 560px) {
    .deck-stage {
      aspect-ratio: 16 / 9;
    }
  }

  /* Expanded on a phone: the slides stack edge to edge in one column, like a webtoon, and the
     reader scrolls down through them. No snap: a slide keeps its own height. A hairline
     separates the slides. */
  @media (max-width: 559px) {
    .deck.is-expanded {
      padding: 0;
    }

    .deck.is-expanded .deck-frame {
      width: 100%;
    }

    .deck.is-expanded .deck-nav {
      margin: 0;
      padding: 5px 8px;
      border-top: 1px solid var(--ui-border-accented);
    }
  }

  @container (max-width: 559px) {
    .deck.is-expanded .deck-stage {
      flex-direction: column;
      height: calc(100dvh - 51px);
      overflow: hidden auto;
      overscroll-behavior: contain;
      scroll-snap-type: none;
      background: var(--ui-bg);
    }

    .deck.is-expanded .slide {
      flex: none;
      padding: 40px 20px 48px;
      font-size: 19px;
    }

    .deck.is-expanded .slide + .slide {
      border-top: 1px solid var(--ui-border-accented);
    }
  }
}
</style>
