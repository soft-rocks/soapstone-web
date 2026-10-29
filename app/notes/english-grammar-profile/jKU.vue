<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-with-auxiliary-do, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="疑問詞後面加 did，再接主詞和原形動詞">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'What', role: '疑問詞' },
          { t: 'did', role: '助動詞', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'do', role: '原形動詞', kind: 'key' },
          { t: 'yesterday?', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">你昨天做了什麼？</p>
      <p class="remark"><code>did</code> 是助動詞，<code>do</code> 是主要動詞。</p>
    </NoteSlide>

    <NoteSlide title="現在式用 do 或 does，過去式用 did" mark="did">
      <div class="rows is-labeled">
        <div>
          <span class="term">do</span>
          <span
            ><NoteMark sentence="What do you think?" :marks="['do']" /><span class="translation"
              >你覺得呢？</span
            ></span
          >
        </div>
        <div>
          <span class="term">does</span>
          <span
            ><NoteMark sentence="Where does she work?" :marks="['does']" /><span class="translation"
              >她在哪裡工作？</span
            ></span
          >
        </div>
        <div>
          <span class="term">did</span>
          <span
            ><NoteMark sentence="Where did you go?" :marks="['did']" /><span class="translation"
              >你去了哪裡？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Why don't you 用來給建議" mark="What">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Why don\'t you', role: '建議', kind: 'key' },
          { t: 'buy it?', role: '原形動詞' },
        ]"
      />
      <p class="translation">你何不買下來？</p>
    </NoteSlide>

    <NoteSlide title="did 後面用原形動詞" mark="do">
      <NoteFix wrong="Where did you went?" right="Where did you go?" fix="go" />
    </NoteSlide>

    <NoteSlide title="一般動詞的 wh- 疑問句要有 do" mark="did">
      <NoteFix wrong="What you think?" right="What do you think?" fix="do" />
    </NoteSlide>

    <NoteSlide title="does 後面的動詞不加 -s" mark="do">
      <NoteFix
        wrong="Where does your father works?"
        right="Where does your father work?"
        fix="work"
      />
    </NoteSlide>

    <NoteSlide title="did 放在主詞前面" mark="did you">
      <NoteFix
        wrong="What you did yesterday?"
        right="What did you do yesterday?"
        fix="did you do"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
