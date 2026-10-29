<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// focus-form-use-the-thing-fact-point-problem, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="The problem is 先點出後面那句話是一個問題">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The problem', role: 'The + 名詞', kind: 'key' },
          { t: 'is', role: 'is', kind: 'key' },
          { role: 'that（省略）' },
          { t: 'I am always late when I have to leave my house.', role: '子句' },
        ]"
      />
      <p class="translation">問題是，我只要得出門，就一定會遲到。</p>
    </NoteSlide>

    <NoteSlide title="每個名詞點出不同的東西" mark="problem">
      <div class="rows is-labeled">
        <div>
          <span class="term">thing<br /><i>麻煩或藉口</i></span>
          <span
            ><NoteMark
              sentence="The thing is, I've already promised to help Jane."
              :marks="['thing']"
            /><span class="translation">問題是，我已經答應要幫 Jane 了。</span></span
          >
        </div>
        <div>
          <span class="term">fact<br /><i>事實</i></span>
          <span
            ><NoteMark
              sentence="The fact is that we can't afford a new car."
              :marks="['fact']"
            /><span class="translation">事實是，我們買不起新車。</span></span
          >
        </div>
        <div>
          <span class="term">point<br /><i>重點</i></span>
          <span
            ><NoteMark
              sentence="The point is that the car itself doesn't cause accidents."
              :marks="['point']"
            /><span class="translation">重點是，車子本身不會造成事故。</span></span
          >
        </div>
        <div>
          <span class="term">reason<br /><i>原因</i></span>
          <span
            ><NoteMark
              sentence="The reason is that I enjoy working with children."
              :marks="['reason']"
            /><span class="translation">原因是我喜歡和小孩一起工作。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="that 可以省略，省略時 is 後面常加逗號" mark="is">
      <div class="rows is-labeled">
        <div>
          <span class="term">有 that</span>
          <span
            ><NoteMark
              sentence="The fact is that nobody read the report."
              :marks="['is that']"
            /><span class="translation">事實是，根本沒有人看那份報告。</span></span
          >
        </div>
        <div>
          <span class="term">沒有 that</span>
          <span
            ><NoteMark sentence="The fact is, nobody read the email." :marks="['is,']" /><span
              class="translation"
              >事實是，根本沒有人看那封電子郵件。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞前面要有 The" mark="The">
      <NoteFix
        wrong="Problem is I don't have a car."
        right="The problem is I don't have a car."
        fix="The"
      />
    </NoteSlide>

    <NoteSlide title="is 後面直接接 that 子句" mark="is">
      <NoteFix
        wrong="The point is it that the car doesn't cause the accident."
        right="The point is that the car doesn't cause the accident."
        fix="is that"
      />
    </NoteSlide>

    <NoteSlide title="名詞用單數，和 is 一致" mark="problem">
      <NoteFix
        wrong="The problems is that the rooms are small."
        right="The problem is that the rooms are small."
        fix="problem"
      />
    </NoteSlide>

    <NoteSlide title="完整的子句用 that 帶出來，不用 what" mark="is">
      <NoteFix
        wrong="The fact is what she never called back."
        right="The fact is that she never called back."
        fix="that"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面有修飾語，就說出了問題的性質" mark="The problem">
      <div class="rows is-labeled">
        <div>
          <span class="term">沒有修飾語</span>
          <span
            ><NoteMark
              sentence="The problem is the flat is too far from the station."
              :marks="['The problem']"
            /><span class="translation">問題是那間公寓離車站太遠了。</span></span
          >
        </div>
        <div>
          <span class="term">有修飾語</span>
          <span
            ><NoteMark sentence="The only problem is that it's expensive." :marks="['only']" /><span
              class="translation"
              >唯一的問題是很貴。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="the fact that 是名詞片語，後面另有動詞" mark="is">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The fact that he lied', role: '主詞' },
          { t: 'upset', role: '動詞', kind: 'key', ring: true },
          { t: 'me.', kind: 'dim' },
        ]"
      />
      <p class="translation">他說了謊，這件事讓我很難過。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
