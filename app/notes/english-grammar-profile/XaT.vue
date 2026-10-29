<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negative-inversion, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="hardly 放在句首，had 放在主詞前面" mark="Hardly had he reached">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Hardly', role: 'Hardly', kind: 'key' },
          { t: 'had', role: 'had', kind: 'key' },
          { t: 'he', role: '主詞' },
          { t: 'reached', role: '過去分詞' },
          { t: 'his front door', role: '受詞', kind: 'dim' },
          { t: 'when he heard the phone ringing.', role: 'when 子句' },
        ]"
      />
      <p class="translation">他一走到家門口，就聽到電話在響。</p>
    </NoteSlide>

    <NoteSlide title="第一件事用過去完成式，第二件事用過去簡單式" mark="when he heard">
      <div class="rows is-labeled">
        <div>
          <span class="term">第一件事</span>
          <span>had + 主詞 + 過去分詞</span>
        </div>
        <div>
          <span class="term">第二件事</span>
          <span>when + 主詞 + 過去式動詞</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="一般的語序和倒裝句" mark="Hardly had he">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般的語序</span>
          <span
            ><NoteMark
              sentence="He had hardly sat down when the bell rang."
              :marks="['He had hardly']"
            /><span class="translation">他才剛坐下，鈴就響了。</span></span
          >
        </div>
        <div>
          <span class="term">倒裝句，語氣比較強</span>
          <span
            ><NoteMark
              sentence="Hardly had he sat down when the bell rang."
              :marks="['Hardly had he']"
            /><span class="translation">他才一坐下，鈴就響了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="scarcely 接 when，no sooner 接 than">
      <div class="rows is-labeled">
        <div>
          <span class="term">scarcely ... when</span>
          <span
            ><NoteMark
              sentence="Scarcely had we left the house when it started to rain."
              :marks="['Scarcely', 'when']"
            /><span class="translation">我們才剛出門就開始下雨了。</span></span
          >
        </div>
        <div>
          <span class="term">no sooner ... than</span>
          <span
            ><NoteMark
              sentence="No sooner had we left the house than it started to rain."
              :marks="['No sooner', 'than']"
            /><span class="translation">我們一出門就開始下雨了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="hardly 接 when，不接 than" mark="when">
      <NoteFix
        wrong="Hardly had I sat down than the phone rang."
        right="Hardly had I sat down when the phone rang."
        fix="when"
      />
    </NoteSlide>

    <NoteSlide title="had 放在主詞前面" mark="had he">
      <NoteFix
        wrong="Hardly he had left when his boss called."
        right="Hardly had he left when his boss called."
        fix="had he"
      />
    </NoteSlide>

    <NoteSlide title="hardly 和 not 不一起用">
      <NoteFix
        wrong="Hardly hadn't we arrived when the show started."
        right="Hardly had we arrived when the show started."
        fix="had we"
      />
    </NoteSlide>

    <NoteSlide title="when 子句用過去簡單式" mark="heard">
      <NoteFix
        wrong="Hardly had I opened the door when the cat had run out."
        right="Hardly had I opened the door when the cat ran out."
        fix="ran out"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
