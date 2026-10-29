<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-rhetorical-questions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="修辭問句不要讀者回答，用來帶出下一段">
      <NoteWords
        :size="36"
        :parts="[
          { t: 'Why', role: '疑問詞' },
          { t: 'is', role: 'be', kind: 'key' },
          { t: 'technology', role: '主詞' },
          { t: 'taking over', role: '動詞-ing', kind: 'key' },
          { t: 'our lives?', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">為什麼科技要占據我們的生活？</p>
    </NoteSlide>
    <NoteSlide title="真的問句要答案，修辭問句由寫的人自己回答" mark="Why">
      <div class="rows is-labeled">
        <div>
          <span class="term">真的問句</span>
          <span
            ><NoteMark sentence="Why is the bus taking so long?" :marks="['Why', 'is']" /><span
              class="translation"
              >公車怎麼這麼久還沒來？</span
            ></span
          >
        </div>
        <div>
          <span class="term">修辭問句</span>
          <span
            ><NoteMark sentence="Why are we wasting so much food?" :marks="['Why', 'are']" /><span
              class="translation"
              >我們為什麼浪費這麼多食物？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="修辭問句用來開始話題、批評或自問自答" mark="Why">
      <div class="rows is-labeled">
        <div>
          <span class="term">開始話題</span>
          <span
            ><NoteMark sentence="What is happening to our oceans?" :marks="['What', 'is']" /><span
              class="translation"
              >我們的海洋怎麼了？</span
            ></span
          >
        </div>
        <div>
          <span class="term">批評</span>
          <span
            ><NoteMark
              sentence="Why are we still building more roads?"
              :marks="['Why', 'are']"
            /><span class="translation">我們為什麼還在蓋更多的路？</span></span
          >
        </div>
        <div>
          <span class="term">自問自答</span>
          <span
            ><NoteMark
              sentence="Why am I telling you this? Because I want you to understand."
              :marks="['Why', 'am', 'Because']"
            /><span class="translation">我為什麼跟你說這些？因為我想讓你明白。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="修辭問句的 be 也放在主詞前面" mark="is">
      <NoteFix
        wrong="Why technology is taking over our lives?"
        right="Why is technology taking over our lives?"
        :fix="['is']"
      />
    </NoteSlide>
    <NoteSlide title="修辭問句的句尾用問號" mark="Why">
      <NoteFix
        wrong="Are we becoming shallow."
        right="Are we becoming shallow?"
        :fix="['shallow?']"
      />
    </NoteSlide>
    <NoteSlide title="people 是複數，用 are" mark="is">
      <NoteFix
        wrong="Why is people spending so much on clothes?"
        right="Why are people spending so much on clothes?"
        :fix="['are']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
