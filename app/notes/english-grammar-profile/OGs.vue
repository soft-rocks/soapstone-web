<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-willfulness-or-disapproval, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="will 說某類人一般的行為，帶有無奈" mark="will">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'No one can imagine what', kind: 'dim' },
          { t: 'children', role: '主詞' },
          { t: 'will', kind: 'key', ring: true },
          { t: 'do!', role: '原形動詞' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="If you will 說對方硬要做的事，後果自己承擔" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">If you will</span>
          <span
            ><NoteMark
              sentence="If you will eat so much chocolate, you'll feel sick."
              :marks="['If you will']"
            /><span class="translation">如果你硬要吃那麼多巧克力，你會不舒服。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="重讀 will 表示對某人的習慣不滿" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="He WILL leave his socks on the floor." :marks="['WILL']" /><span
              class="translation"
              >他就是會把襪子丟在地上。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="will 後面的動詞不加 -s" mark="will">
      <NoteFix
        wrong="She will leaves the lights on."
        right="She will leave the lights on."
        :fix="['leave']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面不用 -ing" mark="will">
      <NoteFix
        wrong="Children will asking questions."
        right="Children will ask questions."
        :fix="['ask']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面直接接原形動詞" mark="will">
      <NoteFix
        wrong="He will to talk during films."
        right="He will talk during films."
        :fix="['talk']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
