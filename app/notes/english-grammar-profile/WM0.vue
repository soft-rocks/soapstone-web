<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-preposition-the-noun, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞 + the + 時間名詞" mark="on the weekend.">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I work', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'on', role: '介系詞' },
          { t: 'the', role: '冠詞', kind: 'key' },
          { t: 'weekend.', role: '名詞' },
        ]"
      />
      <p class="translation">我週末要上班。</p>
    </NoteSlide>

    <NoteSlide title="加 the 的時間說法" mark="the">
      <div class="rows is-labeled">
        <div>
          <span class="term">in the morning</span>
          <span>早上</span>
        </div>
        <div>
          <span class="term">in the afternoon</span>
          <span>下午</span>
        </div>
        <div>
          <span class="term">in the evening</span>
          <span>晚上</span>
        </div>
        <div>
          <span class="term">on the weekend</span>
          <span>週末，美式英語</span>
        </div>
        <div>
          <span class="term">at the weekend</span>
          <span>週末，英式英語</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不加 the 的時間說法">
      <div class="rows is-labeled">
        <div>
          <span class="term">星期幾</span>
          <span>on Monday、on Friday</span>
        </div>
        <div>
          <span class="term">睡覺的時間</span>
          <span>at night</span>
        </div>
        <div>
          <span class="term">時刻</span>
          <span>at six o'clock、at noon</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="星期幾 + 時段">
      <NoteMark sentence="We have a meeting on Monday morning." :marks="['on Monday morning.']" />
      <p class="translation">我們星期一早上有會議。</p>
    </NoteSlide>

    <NoteSlide title="時段前面加 the" mark="the">
      <NoteFix
        wrong="I drink coffee in morning."
        right="I drink coffee in the morning."
        fix="the morning."
      />
    </NoteSlide>

    <NoteSlide title="睡覺的時間用 at night">
      <NoteFix
        wrong="I can't sleep in the night."
        right="I can't sleep at night."
        fix="at night."
      />
    </NoteSlide>

    <NoteSlide title="星期幾前面不加 the">
      <NoteFix wrong="See you on the Monday." right="See you on Monday." fix="on Monday." />
    </NoteSlide>

    <NoteSlide title="星期幾 + 時段用 on">
      <NoteFix
        wrong="I have a lesson in the Friday morning."
        right="I have a lesson on Friday morning."
        fix="on Friday"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
