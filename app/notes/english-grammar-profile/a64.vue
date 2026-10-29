<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-semi-modal-auxiliary-verbs-dare-need, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="needn't 後面直接接原形動詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'needn\'t', role: 'need not', kind: 'key' },
          { t: 'come', role: '原形動詞', kind: 'key' },
          { t: 'if you\'re busy.', role: '條件子句', kind: 'dim' },
        ]"
      />
      <p class="translation">你如果忙的話，就不用來了。</p>
    </NoteSlide>

    <NoteSlide title="半情態動詞多半用在否定句和問句" mark="needn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">needn't<br /><i>不必</i></span>
          <span
            ><NoteMark sentence="You needn't shout. I can hear you." :marks="['needn\'t']" /><span
              class="translation"
              >你不必用吼的。我聽得到。</span
            ></span
          >
        </div>
        <div>
          <span class="term">Need I ...?</span>
          <span
            ><NoteMark sentence="Need I say more?" :marks="['Need']" /><span class="translation"
              >還需要我多說嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">daren't<br /><i>不敢</i></span>
          <span
            ><NoteMark
              sentence="I daren't tell my mum about the broken vase."
              :marks="['daren\'t']"
            /><span class="translation">我不敢跟我媽說花瓶破了的事。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="need 當一般動詞時，否定用 don't，後面加 to" mark="needn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">半情態動詞</span>
          <span
            ><NoteMark sentence="You needn't worry." :marks="['needn\'t']" /><span
              class="translation"
              >你不必擔心。</span
            ></span
          >
        </div>
        <div>
          <span class="term">一般動詞</span>
          <span
            ><NoteMark sentence="You don't need to worry." :marks="['don\'t need to']" /><span
              class="translation"
              >你不需要擔心。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">兩種說法的意思一樣。</p>
    </NoteSlide>

    <NoteSlide title="needn't 後面不加 to" mark="come">
      <NoteFix
        wrong="You needn't to worry about the money."
        right="You needn't worry about the money."
        fix="worry"
      />
    </NoteSlide>

    <NoteSlide title="半情態動詞不照主詞變化" mark="needn't">
      <NoteFix wrong="He needsn't come tomorrow." right="He needn't come tomorrow." fix="needn't" />
    </NoteSlide>

    <NoteSlide title="don't need 是一般動詞的說法，後面要加 to" mark="needn't">
      <NoteFix wrong="You don't need worry." right="You don't need to worry." fix="to" />
    </NoteSlide>

    <NoteSlide title="How dare you 後面直接接原形動詞">
      <NoteFix
        wrong="How dare you to read my diary!"
        right="How dare you read my diary!"
        fix="read"
      />
    </NoteSlide>

    <NoteSlide title="needn't 是不必，mustn't 是禁止" mark="needn't">
      <NoteFork
        stem="You"
        :branches="[
          { head: 'needn\'t', rest: 'bring a coat.', meaning: '不必', zh: '你不必帶外套。' },
          { head: 'mustn\'t', rest: 'bring a coat.', meaning: '禁止', zh: '你不可以帶外套。' },
        ]"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
