<script setup lang="ts">
/**
 * An index of notes, shared by every index page (the English Grammar Profile, Dragon English
 * Basic 100). Each row is a label with a second line under it and links to its note. A row
 * without a note has no link. The head has play-all of the rows' sentences and the link to
 * their practice run.
 *
 * The reader sets the order: the row clicked last moves to the top, and the button on the
 * right of a row moves it to the bottom. The order is kept in localStorage under
 * `storageKey`; without a stored order the rows keep the order of `items`.
 */
export interface IndexItem {
  key: string;
  label: string;
  /** The line under the label. */
  detail?: string;
  /** The note. A row without it has no note yet. */
  to?: string;
  /** The sentence play-all reads for this row. */
  sentence?: string;
}

const props = defineProps<{
  title: string;
  items: IndexItem[];
  /** The practice run of these sentences. Without it the head has no play-all and no practice. */
  practiceTo?: string;
  /** The localStorage key that keeps the reader's order of the rows. */
  storageKey: string;
}>();

const { t } = useI18n();

// A row without a note is the same row with no link
const NuxtLink = resolveComponent('NuxtLink');

// The stored order is read after mount, so the server and the first client render match
const order = ref<string[]>([]);
onMounted(() => {
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(props.storageKey) ?? '[]');
    if (Array.isArray(stored)) order.value = stored.filter((key) => typeof key === 'string');
  } catch {
    // No stored order: keep the default
  }
});

// Rows in the stored order first, then any row the stored order does not name, in default order
const rows = computed(() => {
  const byKey = new Map(props.items.map((item) => [item.key, item]));
  const listed = order.value.flatMap((key) => byKey.get(key) ?? []);
  const named = new Set(order.value);
  return [...listed, ...props.items.filter((item) => !named.has(item.key))];
});

function save(keys: string[]) {
  order.value = keys;
  try {
    localStorage.setItem(props.storageKey, JSON.stringify(keys));
  } catch {
    // Storage is blocked: the order lasts until the page is left
  }
}

function moveToTop(key: string) {
  const keys = rows.value.map((item) => item.key).filter((other) => other !== key);
  save([key, ...keys]);
}

function moveToBottom(key: string) {
  const keys = rows.value.map((item) => item.key).filter((other) => other !== key);
  save([...keys, key]);
}

const {
  start: playAll,
  stop,
  isPlaying,
  currentIndex,
} = usePlayAll(() => playable.value.map((item) => item.sentence ?? ''), {
  album: () => props.title,
});
const playable = computed(() => rows.value.filter((item) => item.sentence));
const playing = computed(() => (isPlaying.value ? playable.value[currentIndex.value] : undefined));
</script>

<template>
  <div class="max-w-[720px]">
    <header class="mb-10 flex items-start justify-between gap-6">
      <h1 class="m-0 text-[clamp(30px,4vw,44px)] leading-[1.06] font-bold tracking-[-0.025em]">
        {{ title }}
      </h1>

      <ClientOnly>
        <div v-if="playable.length && practiceTo" class="flex shrink-0 items-center gap-3">
          <button
            type="button"
            class="icon-button size-12"
            :class="{ 'is-on': isPlaying }"
            :aria-label="isPlaying ? t('sentence.stop') : t('grammar.playAll')"
            :title="isPlaying ? t('sentence.stop') : t('grammar.playAll')"
            @click="isPlaying ? stop() : playAll()"
          >
            <UIcon :name="isPlaying ? 'i-lucide-square' : 'i-lucide-play'" class="size-5" />
          </button>

          <NuxtLink
            :to="practiceTo"
            :aria-label="t('practice.start')"
            :title="t('practice.start')"
            class="icon-button is-primary size-12"
          >
            <UIcon name="i-lucide-pencil" class="size-5" />
          </NuxtLink>
        </div>
      </ClientOnly>
    </header>

    <p v-if="!items.length" class="text-dimmed m-0 text-[13px]">{{ t('grammar.empty') }}</p>

    <ul v-else class="border-muted m-0 list-none border-t p-0">
      <li v-for="item in rows" :key="item.key" class="relative">
        <component
          :is="item.to ? NuxtLink : 'div'"
          :to="item.to"
          class="list-row hover:text-primary pr-14 hover:before:bg-(--color-rock-600)"
          :class="{ 'is-active': item === playing }"
          @click="moveToTop(item.key)"
        >
          <span class="block min-w-0">
            <span class="block text-lg font-medium" :class="{ 'text-primary': item === playing }">
              {{ item.label }}
            </span>
            <span v-if="item.detail" class="text-muted mt-1 block text-base">
              {{ item.detail }}
            </span>
          </span>
        </component>
        <button
          type="button"
          class="row-action absolute top-1/2 right-0 size-11 -translate-y-1/2 sm:right-2"
          :aria-label="t('index.moveToBottom')"
          :title="t('index.moveToBottom')"
          @click="moveToBottom(item.key)"
        >
          <UIcon name="i-lucide-list-end" class="size-4" />
        </button>
      </li>
    </ul>

    <BackToTop />
  </div>
</template>
