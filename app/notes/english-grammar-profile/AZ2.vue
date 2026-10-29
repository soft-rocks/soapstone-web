<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-preposition-object, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞動詞由動詞和介系詞組成，後面接受詞" mark="look for">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I like to walk in the woods and', kind: 'dim' },
          { t: 'look', role: '動詞', kind: 'key' },
          { t: 'for', role: '介系詞', kind: 'key' },
          { t: 'mushrooms.', role: '受詞' },
        ]"
      />
      <p class="translation">我喜歡去樹林裡散步，找蘑菇。</p>
    </NoteSlide>

    <NoteSlide title="代名詞受詞用受格，放在介系詞後面" mark="mushrooms">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark sentence="I'm waiting for the bus." :marks="['the bus']" /><span
              class="translation"
              >我在等公車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">代名詞</span>
          <span
            ><NoteMark sentence="I'm waiting for her." :marks="['her']" /><span class="translation"
              >我在等她。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="同一個動詞，介系詞不同，意思不同" mark="for">
      <div class="rows is-labeled">
        <div>
          <span class="term">look for<br /><i>找</i></span>
          <span
            ><NoteMark sentence="I'm looking for my glasses." :marks="['for']" /><span
              class="translation"
              >我在找我的眼鏡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">look at<br /><i>看</i></span>
          <span
            ><NoteMark sentence="Look at this photo." :marks="['at']" /><span class="translation"
              >你看這張照片。</span
            ></span
          >
        </div>
        <div>
          <span class="term">look after<br /><i>照顧</i></span>
          <span
            ><NoteMark sentence="She looks after her little brother." :marks="['after']" /><span
              class="translation"
              >她照顧她的弟弟。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="listen 後面接受詞時，要加介系詞 to" mark="for">
      <NoteFix wrong="I listen music every day." right="I listen to music every day." fix="to" />
    </NoteSlide>

    <NoteSlide title="受詞放在介系詞後面" mark="mushrooms">
      <NoteFix
        wrong="I'm waiting the bus for."
        right="I'm waiting for the bus."
        fix="for the bus"
      />
    </NoteSlide>

    <NoteSlide title="介系詞後面的代名詞用受格">
      <NoteFix wrong="Can you look after she?" right="Can you look after her?" fix="her" />
    </NoteSlide>

    <NoteSlide title="看某個東西用 look at" mark="look">
      <NoteFix wrong="Look to the board, please." right="Look at the board, please." fix="at" />
    </NoteSlide>

    <NoteSlide title="watch 不加介系詞，walk in 不是介系詞動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">watch + 受詞</span>
          <span
            ><NoteMark sentence="I watch TV in the evening." :marks="['watch']" /><span
              class="translation"
              >我晚上看電視。</span
            ></span
          >
        </div>
        <div>
          <span class="term">地方的介系詞片語</span>
          <span
            ><NoteMark sentence="I walk in the woods." :marks="['in the woods']" /><span
              class="translation"
              >我在樹林裡散步。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
