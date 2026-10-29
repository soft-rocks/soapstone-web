<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-use-neither, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Nor 開頭再加一件否定的事，be 移到主詞前面">
      <NoteWords
        :size="24"
        :move="{ from: 2, to: 3 }"
        :parts="[
          {
            t: 'It is not possible to have a conversation on the veranda without shouting.',
            role: '否定的句子',
            kind: 'dim',
          },
          { t: 'Nor', role: 'Nor', kind: 'key' },
          { t: 'is', role: 'be', kind: 'key' },
          { t: 'it', role: '主詞' },
          { t: 'possible to watch television in peace.', role: '補語' },
        ]"
      />
      <p class="translation">在陽台上不用大吼就沒辦法講話，也沒辦法安靜地看電視。</p>
    </NoteSlide>

    <NoteSlide title="沒有助動詞時，Nor 後面加 did" mark="is it">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I didn\'t like the food.', role: '否定的句子', kind: 'dim' },
          { t: 'Nor', role: 'Nor' },
          { t: 'did', role: '助動詞', kind: 'key', ring: true },
          { t: 'I', role: '主詞' },
          { t: 'like the music.', role: '原形動詞' },
        ]"
      />
      <p class="translation">我不喜歡那裡的菜。我也不喜歡那裡的音樂。</p>
    </NoteSlide>

    <NoteSlide title="Neither 和 Nor 意思一樣，Nor 可以接在 and 後面" mark="Nor">
      <div class="rows is-labeled">
        <div>
          <span class="term">Neither</span>
          <span
            ><NoteMark
              sentence="My brother didn't come to the wedding. Neither did he send a card."
              :marks="['Neither did he']"
            /><span class="translation">我哥哥沒來參加婚禮，也沒寄卡片。</span></span
          >
        </div>
        <div>
          <span class="term">and nor</span>
          <span
            ><NoteMark
              sentence="He never said sorry, and nor did he pay for the damage."
              :marks="['and nor']"
            /><span class="translation">他從來沒道歉，也沒賠償損失。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Neither do I 也是這個句型" mark="Nor is it">
      <NoteWords
        :size="30"
        :parts="[
          { t: '&quot;I don\'t like horror films.&quot;', kind: 'dim' },
          { t: '&quot;Neither do I.&quot;', role: 'Neither + 助動詞 + 主詞', kind: 'key' },
        ]"
      />
      <p class="translation">「我不喜歡恐怖片。」「我也不喜歡。」</p>
    </NoteSlide>

    <NoteSlide title="Nor 放在句首時要倒裝" mark="is it">
      <NoteFix
        wrong="I didn't call him. Nor I sent an email."
        right="I didn't call him. Nor did I send an email."
        fix="did I send"
      />
    </NoteSlide>

    <NoteSlide title="Nor 本身是否定，助動詞不加 not" mark="Nor">
      <NoteFix
        wrong="He can't swim. Nor can't he ride a bike."
        right="He can't swim. Nor can he ride a bike."
        fix="can"
      />
    </NoteSlide>

    <NoteSlide title="前一句也要是否定句" mark="not">
      <NoteFix
        wrong="The beach was crowded. Nor was it dirty."
        right="The beach wasn't crowded. Nor was it dirty."
        fix="wasn't"
      />
    </NoteSlide>

    <NoteSlide title="did 後面接原形動詞">
      <NoteFix
        wrong="She didn't reply. Neither did she called."
        right="She didn't reply. Neither did she call."
        fix="call"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
