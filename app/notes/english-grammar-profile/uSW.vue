<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-pronoun-particle, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="代名詞受詞放在動詞和小品詞中間" mark="you">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I will', kind: 'dim' },
          { t: 'pick', role: '動詞', kind: 'key' },
          { t: 'you', role: '代名詞受詞', kind: 'key', ring: true },
          { t: 'up', role: '小品詞', kind: 'key' },
          { t: 'and arrange everything.', kind: 'dim' },
        ]"
      />
      <p class="translation">我會去接你，也會把一切安排好。</p>
      <p class="remark"><code>pick up</code> 的意思是開車去接。</p>
    </NoteSlide>

    <NoteSlide title="名詞受詞可以放在小品詞中間或後面" mark="you">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞在中間</span>
          <span
            ><NoteMark sentence="Can you turn the TV off?" :marks="['the TV']" /><span
              class="translation"
              >你可以把電視關掉嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞在後面</span>
          <span
            ><NoteMark sentence="Can you turn off the TV?" :marks="['the TV']" /><span
              class="translation"
              >你可以把電視關掉嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="代名詞不放在小品詞後面" mark="you up">
      <NoteFix
        wrong="I'll pick up you at the station."
        right="I'll pick you up at the station."
        fix="you up"
      />
    </NoteSlide>

    <NoteSlide title="代名詞受詞用受格" mark="you">
      <NoteFix wrong="Can you wake I up at seven?" right="Can you wake me up at seven?" fix="me" />
    </NoteSlide>

    <NoteSlide title="丟掉是 throw away，away 不能省略" mark="up">
      <NoteFix
        wrong="This shirt is dirty. Throw it."
        right="This shirt is dirty. Throw it away."
        fix="away"
      />
    </NoteSlide>

    <NoteSlide title="pick up 要有受詞" mark="you">
      <NoteFix
        wrong="Your coat is on the floor. Pick up."
        right="Your coat is on the floor. Pick it up."
        fix="it"
      />
    </NoteSlide>

    <NoteSlide title="介系詞動詞的代名詞放在介系詞後面">
      <NoteMark sentence="I lost my keys, and I'm looking for them." :marks="['for them']" />
      <p class="translation">我的鑰匙不見了，我在找。</p>
    </NoteSlide>

    <NoteSlide title="get up 說自己起床時沒有受詞">
      <NoteMark sentence="I got up at six." :marks="['got up']" />
      <p class="translation">我六點起床。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
