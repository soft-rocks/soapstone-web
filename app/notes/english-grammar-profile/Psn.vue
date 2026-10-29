<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-modal-verbs, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="not 放在情態動詞後面，不加 do">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'shouldn\'t', role: '情態動詞 + not', kind: 'key' },
          { t: 'wear', role: '原形動詞', kind: 'key' },
          { t: 'formal clothes.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">你不應該穿正式的衣服。</p>
    </NoteSlide>

    <NoteSlide title="每個情態動詞都在後面加 not" mark="shouldn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">couldn't</span>
          <span
            ><NoteMark
              sentence="I couldn't sleep last night because of the storm."
              :marks="['couldn\'t']"
            /><span class="translation">暴風雨讓我昨晚睡不著。</span></span
          >
        </div>
        <div>
          <span class="term">mustn't</span>
          <span
            ><NoteMark sentence="We mustn't make any noise." :marks="['mustn\'t']" /><span
              class="translation"
              >我們絕對不可以發出聲音。</span
            ></span
          >
        </div>
        <div>
          <span class="term">might not</span>
          <span
            ><NoteMark sentence="The shop might not be open." :marks="['might not']" /><span
              class="translation"
              >那家店可能沒開。</span
            ></span
          >
        </div>
      </div>
      <p class="remark"><code>may not</code> 和 <code>might not</code> 很少縮寫。</p>
    </NoteSlide>

    <NoteSlide title="will not 縮寫成 won't" mark="shouldn't">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'won\'t', role: 'will not', kind: 'key', ring: true },
          { t: 'tell', role: '原形動詞' },
          { t: 'anyone your secret.', kind: 'dim' },
        ]"
      />
      <p class="translation">我不會把你的秘密告訴任何人。</p>
    </NoteSlide>

    <NoteSlide title="情態動詞的否定不用 don't" mark="shouldn't">
      <NoteFix
        wrong="You don't should eat so much sugar."
        right="You shouldn't eat so much sugar."
        fix="shouldn't"
      />
    </NoteSlide>

    <NoteSlide title="will not 的縮寫不是 willn't">
      <NoteFix wrong="I willn't tell anyone." right="I won't tell anyone." fix="won't" />
    </NoteSlide>

    <NoteSlide title="情態動詞後面直接接原形動詞，不加 to" mark="wear">
      <NoteFix wrong="We mustn't to be late." right="We mustn't be late." fix="be" />
    </NoteSlide>

    <NoteSlide title="情態動詞後面的動詞不加 -s" mark="wear">
      <NoteFix wrong="He won't comes tonight." right="He won't come tonight." fix="come" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
