<script setup lang="ts">
/** The title block of a note page: the H1 sentence and the name of its grammar point. */
defineProps<{ title: string; name?: string }>();
</script>

<template>
  <!-- The practice link is teleported into #note-head, beside the title -->
  <header id="note-head" class="note-head">
    <div>
      <h1>{{ title }}</h1>
      <p v-if="name" class="subtitle">{{ name }}</p>
    </div>
  </header>
</template>
