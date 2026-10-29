<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-this-future, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="未來的動詞 + this + 時間" mark="this evening.">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'ll call', role: '未來的動詞', kind: 'dim' },
          { t: 'you', role: '受詞', kind: 'dim' },
          { t: 'this', role: '快要到的', kind: 'key' },
          { t: 'evening.', role: '時間的名詞' },
        ]"
      />
      <p class="translation">我今天晚上打電話給你。</p>
    </NoteSlide>

    <NoteSlide title="還沒到的時間" mark="this evening.">
      <div class="rows is-labeled">
        <div>
          <span class="term">this evening</span>
          <span>今天晚上</span>
        </div>
        <div>
          <span class="term">this weekend</span>
          <span>這個週末</span>
        </div>
        <div>
          <span class="term">this Saturday</span>
          <span>這個星期六</span>
        </div>
        <div>
          <span class="term">this summer</span>
          <span>今年夏天</span>
        </div>
        <div>
          <span class="term">this Christmas</span>
          <span>今年聖誕節</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說未來的事常用的動詞" mark="I'll">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark sentence="I'll see you this afternoon." :marks="['I\'ll see']" /><span
              class="translation"
              >我們今天下午見。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be going to</span>
          <span
            ><NoteMark
              sentence="We're going to paint the kitchen this weekend."
              :marks="['We\'re going to paint']"
            /><span class="translation">我們這個週末要粉刷廚房。</span></span
          >
        </div>
        <div>
          <span class="term">be + 動詞-ing</span>
          <span
            ><NoteMark
              sentence="My cousin is arriving this Friday."
              :marks="['is arriving']"
            /><span class="translation">我表哥這個星期五要到。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this Friday 和 next Friday" mark="this">
      <div class="rows is-labeled">
        <div>
          <span class="term">this Friday</span>
          <span>這個星期五</span>
        </div>
        <div>
          <span class="term">next Friday</span>
          <span>下個星期五</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this evening 前面不加 in" mark="you this evening.">
      <NoteFix
        wrong="I'll call you in this evening."
        right="I'll call you this evening."
        fix="you this"
      />
    </NoteSlide>

    <NoteSlide title="今天晚上是 this evening" mark="this evening.">
      <NoteFix
        wrong="I'll see you today evening."
        right="I'll see you this evening."
        fix="this evening."
      />
    </NoteSlide>

    <NoteSlide title="還沒到的週末用未來的動詞">
      <NoteFix
        wrong="We went to the beach this weekend. We are packing our bags now."
        right="We are going to the beach this weekend. We are packing our bags now."
        fix="are going"
      />
    </NoteSlide>

    <NoteSlide title="今晚是 tonight">
      <NoteFix
        wrong="What are you doing this night?"
        right="What are you doing tonight?"
        fix="tonight?"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
