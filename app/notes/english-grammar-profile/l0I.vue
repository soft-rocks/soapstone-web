<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// prepositions-form-stranding-846, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="關係子句的介系詞留在子句最後面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Please give him', role: '祈使句', kind: 'dim' },
          { t: 'all the information', role: '名詞片語' },
          { t: 'he asks', role: '關係子句', kind: 'dim' },
          { t: 'for.', role: '介系詞', kind: 'key' },
        ]"
      />
      <p class="translation">他要什麼資料，就全部給他。</p>
      <p class="remark">
        <code>all the information</code> 是 <code>ask for</code> 的受詞，<code>that</code> 省略了。
      </p>
    </NoteSlide>

    <NoteSlide title="關係子句：名詞 + 主詞 + 動詞 + 介系詞" mark="for.">
      <div class="rows is-labeled">
        <div>
          <span class="term">tell about</span>
          <span
            ><NoteMark sentence="That's the bakery I told you about." :marks="['about']" /><span
              class="translation"
              >那就是我跟你說過的麵包店。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="間接問句不倒裝，介系詞留在最後面" mark="for.">
      <div class="rows is-labeled">
        <div>
          <span class="term">間接問句</span>
          <span
            ><NoteMark sentence="I don't know who this umbrella belongs to." :marks="['to']" /><span
              class="translation"
              >我不知道這把傘是誰的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">直接問句</span>
          <span
            ><NoteMark sentence="Who are you waiting for?" :marks="['are you']" /><span
              class="translation"
              >你在等誰？</span
            ></span
          >
        </div>
        <div>
          <span class="term">間接問句</span>
          <span
            ><NoteMark sentence="Tell me who you're waiting for." :marks="['you\'re']" /><span
              class="translation"
              >告訴我你在等誰。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="apply for 的 for 要留在句尾" mark="for.">
      <NoteFix wrong="That's the job I applied." right="That's the job I applied for." fix="for" />
    </NoteSlide>

    <NoteSlide title="間接問句的主詞放在動詞前面">
      <NoteFix
        wrong="Do you know who is she talking to?"
        right="Do you know who she is talking to?"
        fix="she is"
      />
    </NoteSlide>

    <NoteSlide title="名詞已經是介系詞的受詞，句尾不再加 it" mark="for.">
      <NoteFix
        wrong="This is the house I grew up in it."
        right="This is the house I grew up in."
        fix="in."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
