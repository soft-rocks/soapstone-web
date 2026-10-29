<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-this-now, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="this 指現在的事" mark="This is">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'This', role: '= 現在的假期', kind: 'key' },
          { t: 'is', role: '現在式', kind: 'key' },
          { t: 'the best holiday', role: '看法' },
          { t: '…', kind: 'dim' },
        ]"
      />
      <p class="translation">這是我度過最棒的假期！</p>
    </NoteSlide>

    <NoteSlide title="this 常指的事" mark="This">
      <div class="rows is-labeled">
        <div>
          <span class="term">活動</span>
          <span
            ><NoteMark
              sentence="This is so much fun! Let's do it again tomorrow."
              :marks="['This is so much fun!']"
            /><span class="translation">這好好玩！我們明天再來一次。</span></span
          >
        </div>
        <div>
          <span class="term">信或留言</span>
          <span
            ><NoteMark
              sentence="This is just a short note to say thank you."
              :marks="['This is']"
            /><span class="translation">寫這張短箋只是想跟你說聲謝謝。</span></span
          >
        </div>
        <div>
          <span class="term">電話</span>
          <span
            ><NoteMark
              sentence="Hello, this is Maria. Can I speak to Anna?"
              :marks="['this is Maria.']"
            /><span class="translation">喂，我是瑪麗亞。請問安娜在嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 現在，that 過去" mark="This is">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在</span>
          <span
            ><NoteMark sentence="This is a great party." :marks="['This is']" /><span
              class="translation"
              >這個派對很棒。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去</span>
          <span
            ><NoteMark sentence="That was a great party." :marks="['That was']" /><span
              class="translation"
              >那個派對很棒。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="現在的事用 this" mark="This">
      <NoteFix
        wrong="I'm sitting on the beach. That is wonderful!"
        right="I'm sitting on the beach. This is wonderful!"
        fix="This"
      />
    </NoteSlide>

    <NoteSlide title="電話裡用 this is" mark="This is">
      <NoteFix
        wrong="Hello, I am Peter. Is Tom there?"
        right="Hello, this is Peter. Is Tom there?"
        fix="this is"
      />
    </NoteSlide>

    <NoteSlide title="一件事用單數 this" mark="This">
      <NoteFix
        wrong="We're at the zoo today. These is great!"
        right="We're at the zoo today. This is great!"
        fix="This"
      />
    </NoteSlide>

    <NoteSlide title="this + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'This', role: '限定詞', kind: 'key' },
          { t: 'hotel', role: '名詞' },
          { t: 'is very comfortable.', kind: 'dim' },
        ]"
      />
      <p class="translation">這家旅館很舒服。</p>
    </NoteSlide>

    <NoteSlide title="it：不指任何東西">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', role: '虛主詞', kind: 'key' },
          { t: '\'s raining again.', kind: 'dim' },
        ]"
      />
      <p class="translation">又在下雨了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
