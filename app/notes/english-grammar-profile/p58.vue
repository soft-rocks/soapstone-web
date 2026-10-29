<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-affirmative-870, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="takes 說這段路一向要花的時間">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'The journey', role: '主詞' },
          { t: 'takes', role: '動詞-s', kind: 'key', ring: true },
          { t: 'about half an hour', role: '時間', kind: 'dim' },
          { t: 'from Paris.', role: '起點', kind: 'dim' },
        ]"
      />
      <p class="translation">從巴黎過去大約要半個小時。</p>
    </NoteSlide>
    <NoteSlide title="這些動詞說時間、價錢、意思和歸屬" mark="takes">
      <div class="rows is-labeled">
        <div>
          <span class="term">cost</span>
          <span
            ><NoteMark sentence="A ticket costs five pounds." :marks="['costs']" /><span
              class="translation"
              >一張票五英鎊。</span
            ></span
          >
        </div>
        <div>
          <span class="term">mean</span>
          <span
            ><NoteMark sentence='This sign means "no parking".' :marks="['means']" /><span
              class="translation"
              >這個標誌的意思是「禁止停車」。</span
            ></span
          >
        </div>
        <div>
          <span class="term">belong</span>
          <span
            ><NoteMark sentence="This bag belongs to my sister." :marks="['belongs', 'to']" /><span
              class="translation"
              >這個包包是我姊姊的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">seem</span>
          <span
            ><NoteMark sentence="He seems tired today." :marks="['seems']" /><span
              class="translation"
              >他今天看起來很累。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="take 和 cost 常用 it 當主詞" mark="takes">
      <div class="rows is-labeled">
        <div>
          <span class="term">take</span>
          <span
            ><NoteMark
              sentence="It takes two hours to get to the coast."
              :marks="['It', 'takes']"
            /><span class="translation">去海邊要兩個小時。</span></span
          >
        </div>
        <div>
          <span class="term">cost</span>
          <span
            ><NoteMark sentence="It costs a lot to live in London." :marks="['It', 'costs']" /><span
              class="translation"
              >住在倫敦要花很多錢。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說花多少時間，主詞用 it" mark="takes">
      <NoteFix
        wrong="I take ten minutes to the station."
        right="It takes me ten minutes to get to the station."
        :fix="['It', 'takes', 'me']"
      />
    </NoteSlide>
    <NoteSlide title="cost 是動詞，前面不加 be" mark="takes">
      <NoteFix
        wrong="This shirt is cost twenty pounds."
        right="This shirt costs twenty pounds."
        :fix="['costs']"
      />
    </NoteSlide>
    <NoteSlide title="belong 後面接 to" mark="takes">
      <NoteFix wrong="This phone belongs me." right="This phone belongs to me." :fix="['to']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
