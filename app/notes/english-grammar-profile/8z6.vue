<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-help-object, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="help 的受詞後面接原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I hope', kind: 'dim' },
          { t: 'my advice', role: '主詞' },
          { t: 'can help', role: '情態動詞 + 動詞', kind: 'key' },
          { t: 'you', role: '受詞', kind: 'key' },
          { t: 'choose', role: '原形動詞', kind: 'key' },
          { t: 'where to go.', role: 'choose 的受詞' },
        ]"
      />
      <p class="translation">希望我的建議能幫你決定要去哪裡。</p>
      <p class="remark"><code>you</code> 是被幫忙的人，也是要做決定的人。</p>
    </NoteSlide>

    <NoteSlide title="原形動詞前面加不加 to，意思一樣" mark="choose">
      <div class="rows is-labeled">
        <div>
          <span class="term">不加 to</span>
          <span
            ><NoteMark sentence="Can you help me find my keys?" :marks="['find']" /><span
              class="translation"
              >你可以幫我找鑰匙嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">加 to</span>
          <span
            ><NoteMark sentence="My uncle helped me to fix my bike." :marks="['to fix']" /><span
              class="translation"
              >我叔叔幫我修好了腳踏車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">沒有受詞</span>
          <span
            ><NoteMark sentence="These tips will help (to) save money." :marks="['save']" /><span
              class="translation"
              >這些訣竅能幫忙省錢。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">口語和美式英文比較常不加 <code>to</code>。</p>
    </NoteSlide>

    <NoteSlide title="受詞後面接原形動詞，不接動詞-ing" mark="choose">
      <NoteFix
        wrong="She helped me carrying the boxes."
        right="She helped me carry the boxes."
        fix="carry"
      />
    </NoteSlide>

    <NoteSlide title="時態只標在 help 上" mark="help">
      <NoteFix
        wrong="My brother helped me to painted the room."
        right="My brother helped me to paint the room."
        fix="paint"
      />
    </NoteSlide>

    <NoteSlide title="help 後面的代名詞用受格" mark="you">
      <NoteFix
        wrong="Could you help I move this table?"
        right="Could you help me move this table?"
        fix="me"
      />
    </NoteSlide>

    <NoteSlide title="help 後面直接接受詞，不加介系詞" mark="help you">
      <NoteFix
        wrong="Can you help for me finish this?"
        right="Can you help me finish this?"
        fix="help me"
      />
    </NoteSlide>

    <NoteSlide title="要說幫忙的事，在受詞後面加 with" mark="help">
      <NoteMark
        sentence="Could you help me with these heavy suitcases?"
        :marks="['with these heavy suitcases']"
      />
      <p class="translation">你可以幫我拿這些很重的行李箱嗎？</p>
    </NoteSlide>

    <NoteSlide title="can't help 加動詞-ing 是忍不住" mark="help">
      <NoteMark
        sentence="I can't help laughing when I see him."
        :marks="['can\'t help laughing']"
      />
      <p class="translation">我一看到他就忍不住笑。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
