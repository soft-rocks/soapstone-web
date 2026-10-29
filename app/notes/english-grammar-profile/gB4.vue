<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="someone + 單數動詞" mark="someone calls">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'My phone plays a lovely song when', kind: 'dim' },
          { t: 'someone', role: '不定代名詞', kind: 'key' },
          { t: 'calls', role: '單數動詞', kind: 'key' },
          { t: 'me.', kind: 'dim' },
        ]"
      />
      <p class="translation">有人打給我的時候，我的手機會播一首很好聽的歌。</p>
    </NoteSlide>

    <NoteSlide title="someone 和 everyone" mark="someone">
      <div class="rows is-labeled">
        <div>
          <span class="term">someone</span>
          <span
            ><NoteMark sentence="Someone wants to see you." :marks="['Someone wants']" /><span
              class="translation"
              >有人要找你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">everyone</span>
          <span
            ><NoteMark sentence="Everyone likes Saturday." :marks="['Everyone likes']" /><span
              class="translation"
              >每個人都喜歡星期六。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="現在式和過去式" mark="calls">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在式</span>
          <span
            ><NoteMark sentence="Everyone is here." :marks="['is']" /><span class="translation"
              >大家都到了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark sentence="Someone was at the door." :marks="['was']" /><span
              class="translation"
              >剛剛門口有人。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="現在式動詞加 -s" mark="calls">
      <NoteFix
        wrong="Everyone like the new teacher."
        right="Everyone likes the new teacher."
        fix="likes"
      />
    </NoteSlide>

    <NoteSlide title="everyone 前面不加 all">
      <NoteFix
        wrong="All everyone is happy today."
        right="Everyone is happy today."
        fix="Everyone"
      />
    </NoteSlide>

    <NoteSlide title="過去的事用過去式">
      <NoteFix
        wrong="Someone call me last night."
        right="Someone called me last night."
        fix="called"
      />
    </NoteSlide>

    <NoteSlide title="people + 複數動詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'People', role: '複數名詞', kind: 'key' },
          { t: 'like', role: '動詞不加 -s', kind: 'key' },
          { t: 'this song.', kind: 'dim' },
        ]"
      />
      <p class="translation">大家都喜歡這首歌。</p>
    </NoteSlide>

    <NoteSlide title="every one of：其中每一個">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Every one of', role: '分開寫', kind: 'key' },
          { t: 'the cakes', role: '名詞' },
          { t: 'was gone.', kind: 'dim' },
        ]"
      />
      <p class="translation">每一塊蛋糕都被吃光了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
