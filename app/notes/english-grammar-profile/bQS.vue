<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-use-whatsoever-emphasis, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="whatsoever 放在否定的名詞片語後面，加強否定">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Waiting tables would be boring,', kind: 'dim' },
          { t: 'and', kind: 'dim' },
          { t: 'we have', role: '主詞 + 動詞' },
          { t: 'no experience', role: 'no + 名詞' },
          { t: 'whatsoever.', role: '加強否定', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">當服務生會很無聊，而且我們完全沒有經驗。</p>
    </NoteSlide>

    <NoteSlide title="否定的名詞片語可以是 no、not any 或 nothing" mark="whatsoever">
      <div class="rows is-labeled">
        <div>
          <span class="term">no + 名詞</span>
          <span
            ><NoteMark
              sentence="There was no traffic whatsoever on the way home."
              :marks="['no traffic whatsoever']"
            /><span class="translation">回家的路上一點車也沒有。</span></span
          >
        </div>
        <div>
          <span class="term">not any + 名詞</span>
          <span
            ><NoteMark
              sentence="There isn't any parking whatsoever near the station."
              :marks="['any parking whatsoever']"
            /><span class="translation">車站附近一個停車位都沒有。</span></span
          >
        </div>
        <div>
          <span class="term">nothing</span>
          <span
            ><NoteMark
              sentence="She knows nothing whatsoever about football."
              :marks="['nothing whatsoever']"
            /><span class="translation">她對足球一竅不通。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="whatsoever 比 at all 強，也比較正式" mark="whatsoever">
      <div class="rows is-labeled">
        <div>
          <span class="term">at all</span>
          <span
            ><NoteMark sentence="I have no idea at all." :marks="['at all']" /><span
              class="translation"
              >我完全不知道。</span
            ></span
          >
        </div>
        <div>
          <span class="term">whatsoever</span>
          <span
            ><NoteMark
              sentence="I have no idea whatsoever where she lives."
              :marks="['whatsoever']"
            /><span class="translation">我完全不知道她住哪裡。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="whatsoever 只用在否定句" mark="no">
      <NoteFix
        wrong="We have experience whatsoever."
        right="We have no experience whatsoever."
        fix="no"
      />
    </NoteSlide>

    <NoteSlide title="whatsoever 放在名詞後面" mark="experience whatsoever">
      <NoteFix
        wrong="There is no whatsoever problem."
        right="There is no problem whatsoever."
        fix="problem whatsoever"
      />
    </NoteSlide>

    <NoteSlide title="whatsoever 不跟著動詞，否定動詞用 at all" mark="whatsoever">
      <NoteFix
        wrong="I don't like whatsoever the new menu."
        right="I don't like the new menu at all."
        fix="at all"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
