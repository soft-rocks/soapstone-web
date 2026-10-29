<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-use-neither, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定句 + Neither + 助動詞 + 主詞" mark="Neither did I oppose">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I didn\'t pay attention.', role: '否定句', kind: 'dim' },
          { t: 'Neither', role: '連接詞', kind: 'key' },
          { t: 'did', role: '助動詞', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'oppose', role: '原形動詞' },
          { t: 'her need.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我沒注意到，也沒反對她要買新衣服。</p>
    </NoteSlide>

    <NoteSlide title="Nor + be + 主詞">
      <NoteMark
        sentence="It is not possible to have a conversation on the balcony. Nor is it possible to watch television in peace."
        :marks="['Nor is it']"
      />
      <p class="translation">在陽台上沒辦法好好講話，也沒辦法安靜地看電視。</p>
    </NoteSlide>

    <NoteSlide title="用哪個助動詞" mark="did">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般動詞</span>
          <span>do、does、did + 原形動詞</span>
        </div>
        <div>
          <span class="term">be 動詞</span>
          <span>is、are、was、were</span>
        </div>
        <div>
          <span class="term">完成式、情態動詞</span>
          <span>have、has、can、will</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Neither 和 Nor" mark="Neither">
      <div class="rows is-labeled">
        <div>
          <span class="term">Neither</span>
          <span>常放在新的句子開頭</span>
        </div>
        <div>
          <span class="term">Nor</span>
          <span>放在句子開頭，或接在 and、逗號後面</span>
        </div>
        <div>
          <span class="term">and neither</span>
          <span>I'm not hungry, and neither is Sam.</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Neither 後面要倒裝" mark="Neither did I">
      <NoteFix
        wrong="I didn't call him. Neither I sent him a message."
        right="I didn't call him. Neither did I send him a message."
        fix="did I send"
      />
    </NoteSlide>

    <NoteSlide title="Nor 後面不加 not">
      <NoteFix
        wrong="The food wasn't good. Nor wasn't the service."
        right="The food wasn't good. Nor was the service."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="接在否定句後面" mark="didn't">
      <NoteFix
        wrong="The hotel was clean. Neither was it expensive."
        right="The hotel wasn't clean. Neither was it cheap."
        fix="wasn't"
      />
    </NoteSlide>

    <NoteSlide title="時態和前一句相配">
      <NoteFix
        wrong="She hasn't phoned. Nor does she write to us."
        right="She hasn't phoned. Nor has she written to us."
        fix="has she written"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
