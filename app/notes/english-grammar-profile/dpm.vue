<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-pronouns, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定句的 any 可以代替前面說過的名詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I bought a shirt', role: '說過的名詞：shirt', kind: 'dim' },
          { t: 'because', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'haven\'t got', role: '否定的動詞' },
          { t: 'any.', role: '代替 shirts', kind: 'key' },
        ]"
      />
      <p class="translation">我買了一件襯衫，因為我一件也沒有。</p>
    </NoteSlide>

    <NoteSlide title="any 指一個也沒有，many 和 much 指不多" mark="any">
      <div class="rows is-labeled">
        <div>
          <span class="term">any</span>
          <span
            ><NoteMark sentence="I wanted some milk, but there wasn't any." :marks="['any']" /><span
              class="translation"
              >我想喝點牛奶，可是一點也沒有。</span
            ></span
          >
        </div>
        <div>
          <span class="term">many<br /><i>可數名詞</i></span>
          <span
            ><NoteMark
              sentence="I like her friends, but she doesn't have many."
              :marks="['many']"
            /><span class="translation">我喜歡她的朋友，可是她的朋友不多。</span></span
          >
        </div>
        <div>
          <span class="term">much<br /><i>不可數名詞</i></span>
          <span
            ><NoteMark
              sentence="You can have some cake, but there isn't much."
              :marks="['much']"
            /><span class="translation">你可以吃點蛋糕，可是剩下的不多。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="anything、anyone、anywhere 前面不用先說過名詞" mark="any">
      <div class="rows is-labeled">
        <div>
          <span class="term">anything</span>
          <span
            ><NoteMark sentence="Don't bring anything." :marks="['anything']" /><span
              class="translation"
              >什麼都不用帶。</span
            ></span
          >
        </div>
        <div>
          <span class="term">anyone</span>
          <span
            ><NoteMark sentence="There wasn't anyone at home." :marks="['anyone']" /><span
              class="translation"
              >家裡沒有人。</span
            ></span
          >
        </div>
        <div>
          <span class="term">anywhere</span>
          <span
            ><NoteMark sentence="We didn't go anywhere last weekend." :marks="['anywhere']" /><span
              class="translation"
              >我們上個週末哪裡都沒去。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定句用 any，不用 some" mark="any">
      <NoteFix
        wrong="I wanted coffee, but there wasn't some."
        right="I wanted coffee, but there wasn't any."
        fix="any"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞用 much" mark="any">
      <NoteFix
        wrong="I need money, but I haven't got many."
        right="I need money, but I haven't got much."
        fix="much"
      />
    </NoteSlide>

    <NoteSlide title="可數名詞的複數用 many" mark="any">
      <NoteFix
        wrong="I like books, but I don't have much."
        right="I like books, but I don't have many."
        fix="many"
      />
    </NoteSlide>

    <NoteSlide title="句子已經有 not，後面用 anything" mark="haven't">
      <NoteFix wrong="I didn't buy nothing." right="I didn't buy anything." fix="anything" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
