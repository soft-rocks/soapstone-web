<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-lexical-verbs-with-do, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="句首加 Did，再接主詞和原形動詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Did', role: '過去式', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'see', role: '原形動詞', kind: 'key' },
          { t: 'the football match', role: '受詞' },
          { t: 'last night?', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">你昨晚有看那場足球比賽嗎？</p>
    </NoteSlide>

    <NoteSlide title="現在式用 Do 或 Does，主詞是第三人稱單數時用 Does" mark="Did">
      <div class="rows is-labeled">
        <div>
          <span class="term">Do</span>
          <span
            ><NoteMark sentence="Do you know it?" :marks="['Do']" /><span class="translation"
              >你知道這首歌嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Does</span>
          <span
            ><NoteMark sentence="Does your brother play tennis?" :marks="['Does']" /><span
              class="translation"
              >你哥哥打網球嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="簡答用 do、does、did，不重複動詞" mark="Did">
      <NoteWords
        :size="28"
        :parts="[
          { t: '&quot;Did you call the plumber?&quot;', kind: 'dim' },
          { t: '&quot;Yes, I did.&quot;', role: '肯定回答', kind: 'key' },
          { t: '&quot;No, I didn\'t.&quot;', role: '否定回答', kind: 'key' },
        ]"
      />
      <p class="translation">「你打電話給水電工了嗎？」「打了。」／「還沒。」</p>
    </NoteSlide>

    <NoteSlide title="Did 後面用原形動詞" mark="see">
      <NoteFix
        wrong="Did you bought milk on the way home?"
        right="Did you buy milk on the way home?"
        fix="buy"
      />
    </NoteSlide>

    <NoteSlide title="單數名詞當主詞時用 Does" mark="Did">
      <NoteFix
        wrong="Do your uncle grow his own vegetables?"
        right="Does your uncle grow his own vegetables?"
        fix="Does"
      />
    </NoteSlide>

    <NoteSlide title="Does 後面的動詞不加 -s" mark="see">
      <NoteFix
        wrong="Does the library opens on Sundays?"
        right="Does the library open on Sundays?"
        fix="open"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
