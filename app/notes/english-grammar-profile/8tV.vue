<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-indefinite-pronouns, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="形容詞和子句放在不定代名詞後面">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'There is', kind: 'dim' },
          { t: 'something', role: '不定代名詞', kind: 'key' },
          { t: 'important', role: '形容詞' },
          { t: 'I want to tell you.', role: '子句' },
        ]"
      />
      <p class="translation">我有件重要的事想跟你說。</p>
      <p class="remark">子句前面省略了 <code>that</code>。</p>
    </NoteSlide>

    <NoteSlide title="不定代名詞後面接形容詞、不定詞或關係子句" mark="something important">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark
              sentence="We do something different every day."
              :marks="['something different']"
            /><span class="translation">我們每天都做不一樣的事。</span></span
          >
        </div>
        <div>
          <span class="term">to + 原形動詞</span>
          <span
            ><NoteMark
              sentence="You could bring something to drink."
              :marks="['something to drink']"
            /><span class="translation">你可以帶點喝的來。</span></span
          >
        </div>
        <div>
          <span class="term">形容詞 + to + 原形動詞</span>
          <span
            ><NoteMark
              sentence="There's nothing special to eat."
              :marks="['nothing special to eat']"
            /><span class="translation">沒什麼特別的東西可以吃。</span></span
          >
        </div>
        <div>
          <span class="term">關係子句</span>
          <span
            ><NoteMark
              sentence="Is there anyone who can help me?"
              :marks="['anyone who can help me']"
            /><span class="translation">有沒有人可以幫我？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不定代名詞分成東西、人和地方" mark="something">
      <div class="rows is-labeled">
        <div>
          <span class="term">東西</span>
          <span>something, anything, nothing, everything</span>
        </div>
        <div>
          <span class="term">人</span>
          <span>someone, anyone, no one, everyone</span>
        </div>
        <div>
          <span class="term">地方</span>
          <span>somewhere, anywhere, nowhere, everywhere</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="形容詞放在不定代名詞後面" mark="something important">
      <NoteFix
        wrong="I want to eat different something."
        right="I want to eat something different."
        fix="something different"
      />
    </NoteSlide>

    <NoteSlide title="句子已經有 not，用 anybody，不用 nobody">
      <NoteFix
        wrong="I didn't see nobody interesting at the party."
        right="I didn't see anybody interesting at the party."
        fix="anybody"
      />
    </NoteSlide>

    <NoteSlide title="不定代名詞後面直接接 to 和原形動詞">
      <NoteFix
        wrong="Do you have anything for to read?"
        right="Do you have anything to read?"
        fix="anything to read"
      />
    </NoteSlide>

    <NoteSlide title="不定代名詞當主詞，動詞用單數">
      <NoteFix
        wrong="Everyone in my class are nice."
        right="Everyone in my class is nice."
        fix="is"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
