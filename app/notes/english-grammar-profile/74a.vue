<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-how-dare, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="How dare + 主詞 + 原形動詞!">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'How dare', kind: 'key', ring: true },
          { t: 'you say that', kind: 'dim' },
          { t: 'this', role: '主詞' },
          { t: 'event', role: '原形動詞!' },
          { t: 'was a complete failure!', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="How dare、主詞、原形動詞" mark="you">
      <div class="rows is-labeled">
        <div>
          <span class="term">How dare</span>
          <span>你怎麼敢、竟敢。</span>
        </div>
        <div>
          <span class="term">主詞</span>
          <span>常用 you，也可以用 he、she、they、people。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>讓說話者生氣的事。前面不加 to，也不加 -&#x2060;s。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說第三人稱" mark="dare">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="How dare she read my diary!" :marks="['dare', 'she']" /><span
              class="translation"
              >她竟敢看我的日記！</span
            ></span
          >
        </div>
      </div>
      <p class="remark">主詞是 he、she 時，dare 也不加 -&#x2060;s。</p>
    </NoteSlide>
    <NoteSlide title="單獨說 How dare you!" mark="How dare you">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence='"You&apos;re lying." "How dare you!"'
              :marks="['How dare you!']"
            /><span class="translation">「你在說謊。」「你好大的膽子！」</span></span
          >
        </div>
      </div>
      <p class="remark">How dare you! 可以單獨說，表示非常生氣。</p>
    </NoteSlide>
    <NoteSlide title="How dare 後面的主詞是第三人稱，dare 也不加 -s" mark="How dare">
      <NoteFix
        wrong="How dares he speak to me like that!"
        right="How dare he speak to me like that!"
        :fix="['dare']"
      />
    </NoteSlide>
    <NoteSlide title="How dare 後面直接接主詞，不加 do" mark="How dare">
      <NoteFix
        wrong="How do you dare say that!"
        right="How dare you say that!"
        :fix="['dare', 'say']"
      />
    </NoteSlide>
    <NoteSlide title="主詞後面直接接原形動詞">
      <NoteFix
        wrong="How dare you to take my bike!"
        right="How dare you take my bike!"
        :fix="['take']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
