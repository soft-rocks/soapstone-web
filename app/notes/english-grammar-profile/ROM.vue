<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-deductions-and-conclusions-543, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + must have + 過去分詞, because + 子句">
      <div class="rows is-labeled">
        <div>
          <span class="term">must have</span>
          <span>過去一定。</span>
        </div>
        <div>
          <span class="term">because / since 子句</span>
          <span>推論的證據或時間。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="先說證據，再推論" mark="must have">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="His boots were covered in mud. He must have walked across the fields."
              :marks="['must have']"
            /><span class="translation">他的靴子沾滿了泥巴。他一定是走田裡過來的。</span></span
          >
        </div>
      </div>
      <p class="remark">推論常先說看到或聽到的證據，再用 must have 說結論。</p>
    </NoteSlide>
    <NoteSlide title="must have changed since">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The town must have changed a lot since you lived here."
              :marks="[]"
            /><span class="translation">你住在這裡以後，這個鎮一定改變了很多。</span></span
          >
        </div>
      </div>
      <p class="remark">must have changed since 說從過去某個時間到現在，一定改變了很多。</p>
    </NoteSlide>
    <NoteSlide title="推論過去用 must have 加過去分詞" mark="must have">
      <NoteFix
        wrong="I must looked terrible."
        right="I must have looked terrible."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="形容詞前面要有 been">
      <NoteFix
        wrong="She must have very tired."
        right="She must have been very tired."
        :fix="['been']"
      />
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="The city must have grow a lot."
        right="The city must have grown a lot."
        :fix="['grown']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
