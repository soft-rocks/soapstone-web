<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-use-have-obj-ed-proactive-passive, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="have 加受詞，再接過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'had', role: 'have' },
          { t: 'my purse', role: '受詞', kind: 'key' },
          { t: 'stolen.', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="translation">我的錢包被偷了。</p>
    </NoteSlide>

    <NoteSlide title="請人做事，或遇到不好的事" mark="had my purse stolen">
      <div class="rows is-labeled">
        <div>
          <span class="term">請人做事</span>
          <span
            ><NoteMark
              sentence="I had my car serviced on Monday."
              :marks="['had my car serviced']"
            /><span class="translation">我星期一把車送去保養。</span></span
          >
        </div>
        <div>
          <span class="term">遇到不好的事</span>
          <span
            ><NoteMark sentence="I had my purse stolen." :marks="['had my purse stolen']" /><span
              class="translation"
              >我的錢包被偷了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="have 照時態變化" mark="had">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在簡單式</span>
          <span
            ><NoteMark sentence="I have my hair cut every month." :marks="['have']" /><span
              class="translation"
              >我每個月剪一次頭髮。</span
            ></span
          >
        </div>
        <div>
          <span class="term">現在進行式</span>
          <span
            ><NoteMark sentence="I'm having my room redecorated." :marks="['I\'m having']" /><span
              class="translation"
              >我的房間正在重新裝潢。</span
            ></span
          >
        </div>
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark
              sentence="We'll have the windows cleaned next week."
              :marks="['We\'ll have']"
            /><span class="translation">我們下星期會請人來擦窗戶。</span></span
          >
        </div>
        <div>
          <span class="term">-ing</span>
          <span
            ><NoteMark
              sentence="The risk of having your bike stolen is high."
              :marks="['having']"
            /><span class="translation">腳踏車被偷的風險很高。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞後面直接接過去分詞" mark="my purse stolen">
      <NoteFix
        wrong="I had my purse was stolen."
        right="I had my purse stolen."
        fix="purse stolen"
      />
    </NoteSlide>

    <NoteSlide title="受詞後面接過去分詞" mark="stolen">
      <NoteFix
        wrong="I have my hair cutting every month."
        right="I have my hair cut every month."
        fix="cut"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 he / she 時用 has" mark="had">
      <NoteFix
        wrong="She have her nails done every Saturday."
        right="She has her nails done every Saturday."
        fix="has"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
