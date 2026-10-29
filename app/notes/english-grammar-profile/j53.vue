<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-willingness-with-will, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My mother', role: '主詞' },
          { t: 'will', kind: 'key', ring: true },
          { t: 'drive', role: '原形動詞' },
          { t: 'us there.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="will、原形動詞" mark="My mother">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span>表示主詞願意做這件事。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>主詞願意做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="主詞是 I">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'll help you with your project." :marks="[]" /><span
              class="translation"
              >我會幫你做專題。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">主詞是 I 時，說話者表示自己願意做某件事。</p>
    </NoteSlide>
    <NoteSlide title="否定：won't 表示不願意">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="My little brother won't eat his vegetables."
              :marks="['won\'t']"
            /><span class="translation">我弟弟不肯吃青菜。</span></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The door won't open." :marks="['won\'t']" /><span
              class="translation"
              >這扇門打不開。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">won't 加原形動詞，表示主詞不願意做某件事。主詞可以是人，也可以是東西。</p>
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞" mark="will">
      <NoteFix wrong="My sister will helps us." right="My sister will help us." :fix="['help']" />
    </NoteSlide>
    <NoteSlide title="will 後面直接接原形動詞" mark="will">
      <NoteFix
        wrong="My dad will to take us to the station."
        right="My dad will take us to the station."
        :fix="['take']"
      />
    </NoteSlide>
    <NoteSlide title="will not 的縮寫是 won't">
      <NoteFix
        wrong="He willn't lend me his bike."
        right="He won't lend me his bike."
        :fix="['won\'t']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
