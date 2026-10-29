<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-use-after-if-only-and-wish, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + wish + 主詞 + had (not) + 過去分詞" mark="wish">
      <div class="rows is-labeled">
        <div>
          <span class="term">wish</span>
          <span>希望。後面接過去完成式，說後悔過去的事。</span>
        </div>
        <div>
          <span class="term">if only</span>
          <span>要是……就好了。語氣比 wish 更強。</span>
        </div>
        <div>
          <span class="term">had / hadn't + 過去分詞</span>
          <span>和事實相反的過去。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="if only 常用驚嘆號">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="If only I had listened to my father!" :marks="['If only']" /><span
              class="translation"
              >要是我當時聽我爸爸的話就好了！</span
            ></span
          >
        </div>
      </div>
      <p class="remark">If only 常放在句首，句尾加驚嘆號，表示很強烈的後悔。</p>
    </NoteSlide>
    <NoteSlide title="後悔過去的事，wish 後面用 had 加過去分詞" mark="wish">
      <NoteFix
        wrong="I wish I didn't tell Pat yesterday."
        right="I wish I hadn't told Pat yesterday."
        :fix="['hadn\'t told']"
      />
    </NoteSlide>
    <NoteSlide title="if only 後面用 had 加過去分詞">
      <NoteFix
        wrong="If only I would have met her before."
        right="If only I had met her before."
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞">
      <NoteFix
        wrong="I wish they had took more photos."
        right="I wish they had taken more photos."
        :fix="['taken']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
