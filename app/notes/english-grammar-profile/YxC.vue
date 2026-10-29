<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-politeness, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I was wondering if + 主詞 + could + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I was wondering if', kind: 'key', ring: true },
          { t: 'I', role: '主詞' },
          { t: 'could', kind: 'key', ring: true },
          { t: 'stay', role: '原形動詞' },
          { t: 'with you again on my next visit.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="I was wondering if、I was thinking that、could">
      <div class="rows is-labeled">
        <div>
          <span class="term">I was wondering if</span>
          <span>我在想能不能……。客氣的請求。</span>
        </div>
        <div>
          <span class="term">I was thinking that</span>
          <span>我在想……。客氣的建議。</span>
        </div>
        <div>
          <span class="term">could</span>
          <span>讓請求或建議更委婉。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="現在的請求">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I was wondering if you could help me." :marks="[]" /><span
              class="translation"
              >不知道你能不能幫我。（現在請你幫忙）</span
            ></span
          >
        </div>
      </div>
      <p class="remark">這裡的過去進行式說的是現在的請求，不是過去的事。</p>
    </NoteSlide>
    <NoteSlide title="提出建議">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I was thinking that you could come to my house."
              :marks="['I was thinking that you could']"
            /><span class="translation">我在想你可以來我家。</span></span
          >
        </div>
      </div>
      <p class="remark">I was thinking that you could 用來提出建議，不會太強硬。</p>
    </NoteSlide>
    <NoteSlide title="if 後面用直述句的順序" mark="if">
      <NoteFix
        wrong="I was wondering if could you help me."
        right="I was wondering if you could help me."
        :fix="['you', 'help']"
      />
    </NoteSlide>
    <NoteSlide title="-ing 前面要有 was" mark="was">
      <NoteFix
        wrong="I wondering if I could borrow your car."
        right="I was wondering if I could borrow your car."
        :fix="['was']"
      />
    </NoteSlide>
    <NoteSlide title="wondering 後面要用 if 帶出子句" mark="wondering">
      <NoteFix
        wrong="I was wondering you could call me."
        right="I was wondering if you could call me."
        :fix="['if']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
