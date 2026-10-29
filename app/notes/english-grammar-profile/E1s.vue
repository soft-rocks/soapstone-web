<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-object-or-complement-992, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="there + be + 不定代名詞" mark="there wasn't anyone">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'When I arrived at his house,', kind: 'dim' },
          { t: 'there wasn\'t', role: 'there + be', kind: 'key' },
          { t: 'anyone', role: '不定代名詞', kind: 'key' },
          { t: 'there.', kind: 'dim' },
        ]"
      />
      <p class="translation">我到他家的時候，那裡一個人也沒有。</p>
    </NoteSlide>

    <NoteSlide title="動詞後面、介系詞後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞的受詞</span>
          <span
            ><NoteMark
              sentence="I didn't know anyone at the party."
              :marks="['know anyone']"
            /><span class="translation">派對上我一個人都不認識。</span></span
          >
        </div>
        <div>
          <span class="term">介系詞的受詞</span>
          <span
            ><NoteMark
              sentence="She talked to everyone in the room."
              :marks="['to everyone']"
            /><span class="translation">她跟房間裡每個人都說了話。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="there + be 後面、補語">
      <div class="rows is-labeled">
        <div>
          <span class="term">there + be</span>
          <span
            ><NoteMark
              sentence="There was nothing on the table."
              :marks="['There was nothing']"
            /><span class="translation">桌上什麼都沒有。</span></span
          >
        </div>
        <div>
          <span class="term">補語</span>
          <span
            ><NoteMark sentence="That's everything for today." :marks="['everything']" /><span
              class="translation"
              >今天就這些了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not + any- 等於 no-" mark="wasn't anyone">
      <div class="rows is-labeled">
        <div>
          <span class="term">not + any-</span>
          <span
            ><NoteMark
              sentence="There wasn't anyone in the car."
              :marks="['wasn\'t anyone']"
            /><span class="translation">車上沒有人。</span></span
          >
        </div>
        <div>
          <span class="term">no-</span>
          <span
            ><NoteMark sentence="There was no one in the car." :marks="['no one']" /><span
              class="translation"
              >車上一個人也沒有。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="一句只用一個否定" mark="anyone">
      <NoteFix
        wrong="We didn't eat nothing on the long flight."
        right="We didn't eat anything on the long flight."
        fix="anything"
      />
    </NoteSlide>

    <NoteSlide title="肯定句說沒有人，用 no one">
      <NoteFix wrong="There was anyone at home." right="There was no one at home." fix="no one" />
    </NoteSlide>

    <NoteSlide title="everywhere 前面不加 to">
      <NoteFix
        wrong="He has been to everywhere in Europe."
        right="He has been everywhere in Europe."
        fix="been everywhere"
      />
    </NoteSlide>

    <NoteSlide title="any 後面接名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I didn\'t see', kind: 'dim' },
          { t: 'any', role: '限定詞', kind: 'key' },
          { t: 'cars', role: '名詞', kind: 'key' },
          { t: 'on the road.', kind: 'dim' },
        ]"
      />
      <p class="translation">路上我一輛車都沒看到。</p>
    </NoteSlide>

    <NoteSlide title="none of + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'None of', role: 'none of', kind: 'key' },
          { t: 'my cousins', role: '名詞', kind: 'key' },
          { t: 'could come to the wedding.', kind: 'dim' },
        ]"
      />
      <p class="translation">我的表兄弟姊妹沒有一個能來參加婚禮。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
