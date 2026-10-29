<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-either-or, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="either + 動詞 + or + 動詞" mark="either write or phone">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'ll', role: '主詞 + 助動詞', kind: 'dim' },
          { t: 'either', role: '連接詞', kind: 'key' },
          { t: 'write', role: '動詞' },
          { t: 'or', role: '連接詞', kind: 'key' },
          { t: 'phone you soon.', role: '動詞片語' },
        ]"
      />
      <p class="translation">我很快就會寫信或打電話給你。</p>
    </NoteSlide>

    <NoteSlide title="連接字、片語、子句" mark="either">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark
              sentence="They wear suits, either white or black."
              :marks="['either white or black.']"
            /><span class="translation">他們穿西裝，不是白色就是黑色。</span></span
          >
        </div>
        <div>
          <span class="term">介系詞片語</span>
          <span
            ><NoteMark
              sentence="We can go either to the beach or to the countryside."
              :marks="['either', 'or']"
            /><span class="translation">我們可以去海邊或去鄉下。</span></span
          >
        </div>
        <div>
          <span class="term">子句</span>
          <span
            ><NoteMark
              sentence="Either you come with me, or you stay here."
              :marks="['Either', 'or']"
            /><span class="translation">要嘛你跟我走，要嘛你待在這裡。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="either 放在第一個選項前面" mark="either">
      <NoteMark sentence="You can pay either in cash or by card." :marks="['either in cash']" />
      <p class="translation">你可以付現金或刷卡。</p>
    </NoteSlide>

    <NoteSlide title="動詞跟 or 後面的主詞一致">
      <div class="rows is-labeled">
        <div>
          <span class="term">are</span>
          <span
            ><NoteMark
              sentence="Either my sister or my parents are coming."
              :marks="['my parents are']"
          /></span>
        </div>
        <div>
          <span class="term">is</span>
          <span
            ><NoteMark
              sentence="Either my parents or my sister is coming."
              :marks="['my sister is']"
          /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="either 放在選項前面" mark="either">
      <NoteFix
        wrong="Either you can visit us on Friday or on Saturday."
        right="You can visit us either on Friday or on Saturday."
        fix="either on Friday"
      />
    </NoteSlide>

    <NoteSlide title="either 配 or，不配 and" mark="or">
      <NoteFix
        wrong="You can have either soup and salad."
        right="You can have either soup or salad."
        fix="or"
      />
    </NoteSlide>

    <NoteSlide title="either 配 or，不配 nor" mark="or">
      <NoteFix
        wrong="We can either take the bus nor walk."
        right="We can either take the bus or walk."
        fix="or"
      />
    </NoteSlide>

    <NoteSlide title="or 後面不再加 either">
      <NoteFix
        wrong="You can have either tea or either coffee."
        right="You can have either tea or coffee."
        fix="or coffee."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
