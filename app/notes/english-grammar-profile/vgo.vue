<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-each-the-other-s-as-object, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="each 當主詞，the other 當受詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Each of them', role: '主詞', kind: 'key' },
          { t: 'admires', role: '單數動詞' },
          { t: 'the other\'s intelligence.', role: '受詞', kind: 'key' },
        ]"
      />
      <p class="translation">他們兩個都欣賞對方的聰明。</p>
    </NoteSlide>

    <NoteSlide title="兩個用 the other，三個以上用 the others" mark="the other's">
      <div class="rows is-labeled">
        <div>
          <span class="term">兩個</span>
          <span
            ><NoteMark
              sentence="Each one follows the other around the house."
              :marks="['the other']"
            /><span class="translation">每一隻都在家裡跟著另一隻走來走去。</span></span
          >
        </div>
        <div>
          <span class="term">三個以上</span>
          <span
            ><NoteMark sentence="Each of us trusts the others." :marks="['the others']" /><span
              class="translation"
              >每個人都信任其他人。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="所有格 the other's / the others' 後面接名詞" mark="the other's">
      <div class="rows is-labeled">
        <div>
          <span class="term">the other's</span>
          <span
            ><NoteMark
              sentence="Each of the twins knows the other's secrets."
              :marks="['the other\'s secrets']"
            /><span class="translation">那對雙胞胎都知道對方的祕密。</span></span
          >
        </div>
        <div>
          <span class="term">the others'</span>
          <span
            ><NoteMark
              sentence="Each player respects the others' decisions."
              :marks="['the others\' decisions']"
            /><span class="translation">每個球員都尊重其他人的決定。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="each 的形式" mark="Each of them">
      <div class="rows is-labeled">
        <div>
          <span class="term">each of + 代名詞</span>
          <span>each of them, each of us</span>
        </div>
        <div>
          <span class="term">each of the + 複數名詞</span>
          <span>each of the brothers</span>
        </div>
        <div>
          <span class="term">each + 單數名詞</span>
          <span>each sister, each team</span>
        </div>
        <div>
          <span class="term">each one</span>
          <span>前面已經說過是哪些人或東西</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="each 當主詞，動詞用單數" mark="admires">
      <NoteFix
        wrong="Each of the sisters help the other."
        right="Each of the sisters helps the other."
        fix="helps"
      />
    </NoteSlide>

    <NoteSlide title="五個人，用 the others" mark="the other's">
      <NoteFix
        wrong="The five neighbours are close. Each one helps the other."
        right="The five neighbours are close. Each one helps the others."
        fix="the others."
      />
    </NoteSlide>

    <NoteSlide title="each 後面直接接單數名詞" mark="Each of them">
      <NoteFix
        wrong="Each brothers blames the other."
        right="Each brother blames the other."
        fix="Each brother"
      />
    </NoteSlide>

    <NoteSlide title="固定的另一個人，要加 the" mark="the other's">
      <NoteFix
        wrong="Each of the two pilots checks other's work."
        right="Each of the two pilots checks the other's work."
        fix="the other's"
      />
    </NoteSlide>

    <NoteSlide title="each other 是一個代名詞，主詞是 they">
      <div class="rows is-labeled">
        <div>
          <span class="term">each other</span>
          <span
            ><NoteMark
              sentence="The two singers admire each other."
              :marks="['singers', 'admire']"
            /><span class="translation">那兩位歌手欣賞彼此。</span></span
          >
        </div>
        <div>
          <span class="term">each … the other</span>
          <span
            ><NoteMark
              sentence="Each of them admires the other's intelligence."
              :marks="['Each of them', 'admires']"
            /><span class="translation">他們兩個都欣賞對方的聰明。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="another 沒有指定是哪一個">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Each of the girls bought a present for', kind: 'dim' },
          { t: 'another girl.', role: '任何一個別的女孩', kind: 'key' },
        ]"
      />
      <p class="translation">每個女孩都買了禮物給另一個女孩。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
