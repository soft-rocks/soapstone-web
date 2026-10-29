<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-past-particple-as-adjective, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="過去分詞單獨放在名詞後面，有被動的意思" mark="film shown">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Please list', kind: 'dim' },
          { t: 'the costs', role: '名詞', kind: 'key' },
          { t: 'involved.', role: '過去分詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">請列出相關的費用。</p>
      <p class="remark">等於 <code>the costs that are involved</code>。</p>
    </NoteSlide>

    <NoteSlide title="常放在名詞後面的過去分詞" mark="shown">
      <div class="rows is-labeled">
        <div>
          <span class="term">required</span>
          <span
            ><NoteMark
              sentence="Please bring the documents required."
              :marks="['documents required']"
            /><span class="translation">請帶齊要求的文件。</span></span
          >
        </div>
        <div>
          <span class="term">shown</span>
          <span
            ><NoteMark
              sentence="You won't pay more at the till. The prices shown include tax."
              :marks="['prices shown']"
            /><span class="translation">你在收銀台不會多付錢。標示的價格含稅。</span></span
          >
        </div>
        <div>
          <span class="term">mentioned</span>
          <span
            ><NoteMark
              sentence="Our guidebook is five years old. The hotel mentioned in it is closed now."
              :marks="['hotel mentioned']"
            /><span class="translation"
              >我們的旅遊指南是五年前的。裡面提到的那家飯店現在關了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="involved 放在名詞前面和後面意思不同" mark="shown">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞後面（相關的）</span>
          <span
            ><NoteMark
              sentence="The people involved will get an email."
              :marks="['people involved']"
            /><span class="translation">相關的人會收到電子郵件。</span></span
          >
        </div>
        <div>
          <span class="term">名詞前面（複雜的）</span>
          <span
            ><NoteMark sentence="It's an involved story." :marks="['involved story']" /><span
              class="translation"
              >這個故事很複雜。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被要求的東西用過去分詞" mark="shown">
      <NoteFix
        wrong="Please bring the documents requiring."
        right="Please bring the documents required."
        fix="required"
      />
    </NoteSlide>

    <NoteSlide title="名詞後面直接接過去分詞" mark="film shown">
      <NoteFix
        wrong="Only the students are involved need to stay after class."
        right="Only the students involved need to stay after class."
        fix="students involved"
      />
    </NoteSlide>

    <NoteSlide title="被付的金額用過去分詞 paid" mark="shown">
      <NoteFix
        wrong="Check the amount pay before you leave."
        right="Check the amount paid before you leave."
        fix="paid"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
