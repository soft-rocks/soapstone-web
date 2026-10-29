<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-use-adverbs-prepositional-phrases-highlight, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="看法副詞 + for + 人" mark="Luckily for you,">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Luckily', role: '看法副詞', kind: 'key' },
          { t: 'for you,', role: 'for + 人', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'kept', role: '動詞' },
          { t: 'notes.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">算你運氣好，我做了筆記。</p>
    </NoteSlide>

    <NoteSlide title="for 片語說明看法對誰成立" mark="for you">
      <div class="rows is-labeled">
        <div>
          <span class="term">說話者的看法</span>
          <span
            ><NoteMark sentence="Luckily, the rain stopped." :marks="['Luckily,']" /><span
              class="translation"
              >幸好雨停了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">限於某個人</span>
          <span
            ><NoteMark
              sentence="Luckily for the farmers, the rain stopped."
              :marks="['Luckily for the farmers,']"
            /><span class="translation">對農夫來說很幸運，雨停了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常見的組合" mark="Luckily for you,">
      <div class="rows is-labeled">
        <div>
          <span class="term">luckily for、fortunately for</span>
          <span>對某人來說很幸運</span>
        </div>
        <div>
          <span class="term">unfortunately for、sadly for</span>
          <span>對某人來說很不幸</span>
        </div>
        <div>
          <span class="term">conveniently for</span>
          <span>對某人來說很方便</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="especially、probably + 介系詞片語">
      <div class="rows is-labeled">
        <div>
          <span class="term">especially + 時間</span>
          <span
            ><NoteMark
              sentence="Especially in winter, the roads here can be dangerous."
              :marks="['Especially in winter,']"
            /><span class="translation">特別是冬天，這裡的路可能很危險。</span></span
          >
        </div>
        <div>
          <span class="term">probably + 時間</span>
          <span
            ><NoteMark
              sentence="Probably in the next ten years, engineers will be respected again."
              :marks="['Probably in the next ten years,']"
            /><span class="translation">大概在未來十年內，工程師會再受到尊重。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說明對誰好用 for" mark="for you">
      <NoteFix
        wrong="Luckily to us, the shop was still open."
        right="Luckily for us, the shop was still open."
        fix="for us"
      />
    </NoteSlide>

    <NoteSlide title="for 後面接受格代名詞">
      <NoteFix
        wrong="Unfortunately for he, the last bus had gone."
        right="Unfortunately for him, the last bus had gone."
        fix="for him"
      />
    </NoteSlide>

    <NoteSlide title="特別是用 especially">
      <NoteFix
        wrong="It's very busy here, specially in August."
        right="It's very busy here, especially in August."
        fix="especially in August"
      />
    </NoteSlide>

    <NoteSlide title="片語後面不加 but" mark="Luckily for you,">
      <NoteFix
        wrong="Unfortunately for me, but I had left my wallet at home."
        right="Unfortunately for me, I had left my wallet at home."
        fix="Unfortunately for me,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
