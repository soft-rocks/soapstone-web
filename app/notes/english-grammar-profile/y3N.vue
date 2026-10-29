<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-narrative-device, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="You should have + seen / heard + 名詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You should have', kind: 'key', ring: true },
          { t: 'seen', kind: 'key', ring: true },
          { t: 'my face. I was so', kind: 'dim' },
          { t: 'happy.', role: '名詞' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="You should have seen、You should have heard、名詞或子句">
      <div class="rows is-labeled">
        <div>
          <span class="term">You should have seen</span>
          <span>你真該看看。</span>
        </div>
        <div>
          <span class="term">You should have heard</span>
          <span>你真該聽聽。</span>
        </div>
        <div>
          <span class="term">名詞或子句</span>
          <span>說話者想強調的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="加上解釋" mark="You should have seen">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You should have heard the noise. It was like a bomb."
              :marks="[]"
            /><span class="translation">你真該聽聽那個聲音。就像炸彈一樣。</span></span
          >
        </div>
      </div>
      <p class="remark">說完 You should have seen … 以後，常接著說明當時的情況。</p>
    </NoteSlide>
    <NoteSlide title="see 的過去分詞是 seen" mark="seen">
      <NoteFix
        wrong="You should have saw his face."
        right="You should have seen his face."
        :fix="['seen']"
      />
    </NoteSlide>
    <NoteSlide title="should 和過去分詞中間要有 have" mark="should">
      <NoteFix
        wrong="You should seen the view."
        right="You should have seen the view."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="疑問詞後面的子句用直述句的順序">
      <NoteFix
        wrong="You should have seen how big was the fish."
        right="You should have seen how big the fish was."
        :fix="['the', 'fish was.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
