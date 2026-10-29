<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-direct-speech-reporting-clause-inverted-subject, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="引述動詞放在名字或名詞片語前面">
      <NoteWords
        :size="28"
        :parts="[
          { t: '&quot;Who are you?&quot;', role: '引號裡的話', kind: 'dim' },
          { t: 'asked', role: '引述動詞', kind: 'key' },
          { t: 'Peter.', role: '主詞', kind: 'key' },
        ]"
      />
      <p class="translation">「你是誰？」Peter 問。</p>
    </NoteSlide>

    <NoteSlide title="不倒裝也可以，意思一樣" mark="asked Peter">
      <div class="rows is-labeled">
        <div>
          <span class="term">倒裝</span>
          <span
            ><NoteMark sentence='"Who are you?" asked Peter.' :marks="['asked Peter']" /><span
              class="translation"
              >「你是誰？」Peter 問。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不倒裝</span>
          <span
            ><NoteMark
              sentence='"Where are you going?" Peter asked.'
              :marks="['Peter asked']"
            /><span class="translation">「你要去哪裡？」Peter 問。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="引述動詞後面可以接 to + 人" mark="asked">
      <NoteWords
        :size="22"
        :parts="[
          { t: '&quot;What do you think about this?&quot;', kind: 'dim' },
          { t: 'said', role: '引述動詞', kind: 'key' },
          { t: 'the inspector', role: '主詞', kind: 'key' },
          { t: 'to the policeman.', role: 'to + 人' },
        ]"
      />
      <p class="translation">「你覺得這件事怎麼樣？」督察對那名警員說。</p>
    </NoteSlide>

    <NoteSlide title="主詞是名詞片語時，引述動詞緊接在引號後面" mark="Peter">
      <div class="rows is-labeled">
        <div>
          <span class="term">a quiet voice</span>
          <span
            ><NoteMark
              sentence='"Would you mind lending me your newspaper?" said a quiet voice.'
              :marks="['a quiet voice']"
            /><span class="translation"
              >「可以借我看一下你的報紙嗎？」一個小小的聲音說。</span
            ></span
          >
        </div>
        <div>
          <span class="term">the woman at the desk</span>
          <span
            ><NoteMark
              sentence='"Next, please," called the woman at the desk.'
              :marks="['the woman at the desk']"
            /><span class="translation">「下一位。」櫃台的女士叫道。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞是代名詞時不倒裝" mark="Peter">
      <NoteFix wrong='"Who are you?" asked he.' right='"Who are you?" he asked.' fix="he asked" />
    </NoteSlide>

    <NoteSlide title="told 後面要接聽的人，不倒裝">
      <NoteFix
        wrong='"Wait here," told the guard us.'
        right='"Wait here," the guard told us.'
        fix="the guard told us"
      />
    </NoteSlide>

    <NoteSlide title="倒裝的引述子句不加助動詞" mark="asked">
      <NoteFix
        wrong='"Where is it?" did ask the boy.'
        right='"Where is it?" asked the boy.'
        fix="asked"
      />
    </NoteSlide>

    <NoteSlide title="問號後面不再加逗號">
      <NoteFix
        wrong='"Are you ready?", asked the driver.'
        right='"Are you ready?" asked the driver.'
        fix='ready?"'
      />
    </NoteSlide>

    <NoteSlide title="引號裡的問句倒裝，和引述子句的倒裝不同">
      <NoteWords
        :size="28"
        :parts="[
          { t: '&quot;Are you', role: '問句的倒裝', kind: 'key' },
          { t: 'coming?&quot;', kind: 'dim' },
          { t: 'asked Mia.', role: '引述子句的倒裝', kind: 'key' },
        ]"
      />
      <p class="translation">「你要來嗎？」Mia 問。</p>
    </NoteSlide>

    <NoteSlide title="引述子句放在前面時不倒裝">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Peter asked,', role: '主詞 + 引述動詞', kind: 'key' },
          { t: '&quot;Who are you?&quot;', kind: 'dim' },
        ]"
      />
      <p class="translation">Peter 問：「你是誰？」</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
