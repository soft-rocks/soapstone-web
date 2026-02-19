<script setup lang="ts">
  /* props */
  const props = withDefaults(
    defineProps<{
      src: string;
      isPlayOnMount?: boolean;
    }>(),
    {
      isPlayOnMount: false,
    },
  );

  const { play, isPlaying, isReady } = useAudioPlayer(ref(props.src));

  watch(
    isReady,
    (ready) => {
      if (ready && props.isPlayOnMount) {
        play();
      }
    },
    { once: true },
  );

  defineExpose({
    play: play,
  });

  onMounted(() => {
    if (props.isPlayOnMount) {
      play();
    }
  });
</script>

<template>
  <div>
    <template v-if="isReady">
      <UButton
        class="rounded-full"
        @click="play()"
        v-if="!isPlaying"
        icon="mingcute:play-fill"
        size="xl"
      />
      <UButton
        v-if="isPlaying"
        class="animate-pulse rounded-full"
        icon="i-lucide-audio-lines"
        size="xl"
      />
    </template>
    <template v-else>
      <UButton class="animate-pulse rounded-full" icon="eos-icons:three-dots-loading" size="xl" />
    </template>
  </div>
</template>

<style scoped></style>
