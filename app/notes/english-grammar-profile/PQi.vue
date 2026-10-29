<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-those-already-mentioned, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="those 指前面說過的事物" mark="Those are">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Those', role: '前面說過的事物', kind: 'key' },
          { t: 'are', role: '複數動詞', kind: 'key' },
          { t: 'the things I like the most …', kind: 'dim' },
        ]"
      />
      <p class="translation">那些就是我最喜歡她的地方。</p>
    </NoteSlide>

    <NoteSlide title="those 指什麼" mark="Those">
      <div class="rows is-labeled">
        <div>
          <span class="term">列出的幾件事</span>
          <span
            ><NoteMark
              sentence="She is funny and kind. Those are her best points."
              :marks="['funny and kind.', 'Those']"
            /><span class="translation">她很幽默又很體貼。那些是她最好的地方。</span></span
          >
        </div>
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark
              sentence="I love Paris and Rome. I'd live in cities like those."
              :marks="['Paris and Rome.', 'those.']"
            /><span class="translation">我很喜歡巴黎和羅馬，我願意住在那樣的城市。</span></span
          >
        </div>
        <div>
          <span class="term">對方說過的</span>
          <span
            ><NoteMark
              sentence='"I loved the songs." "Yes, those were great."'
              :marks="['songs', 'those']"
            /><span class="translation">「我很喜歡那些歌。」「對，那些歌很棒。」</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="those 和 these">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Here are my plans.', kind: 'dim' },
          { t: 'These', role: '剛剛說的', kind: 'key' },
          { t: 'are the things I want to do.', kind: 'dim' },
        ]"
      />
      <p class="translation">這是我的計畫，這些是我想做的事。</p>
    </NoteSlide>

    <NoteSlide title="好幾件事用 those" mark="Those">
      <NoteFix
        wrong="She is patient and honest. That are the things I admire."
        right="She is patient and honest. Those are the things I admire."
        fix="Those"
      />
    </NoteSlide>

    <NoteSlide title="those 的動詞用複數" mark="are">
      <NoteFix
        wrong="I bought new boots last week, but those is too small."
        right="I bought new boots last week, but those are too small."
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="those 後面不加 they" mark="Those">
      <NoteFix
        wrong="You asked about the old photos. Those they are in the box."
        right="You asked about the old photos. Those are in the box."
        fix="Those are"
      />
    </NoteSlide>

    <NoteSlide title="those + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Do you remember', kind: 'dim' },
          { t: 'those', role: '限定詞', kind: 'key' },
          { t: 'holidays', role: '名詞' },
          { t: 'in Spain?', kind: 'dim' },
        ]"
      />
      <p class="translation">你還記得在西班牙的那些假期嗎？</p>
    </NoteSlide>

    <NoteSlide title="those who：指人">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Those who know her', role: '……的人', kind: 'key' },
          { t: 'say she is very shy.', kind: 'dim' },
        ]"
      />
      <p class="translation">認識她的人都說她很害羞。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
