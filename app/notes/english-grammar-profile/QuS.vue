<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-should-be-ing, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + should be + -ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'should be', kind: 'key', ring: true },
          { t: 'reading', role: '-ing' },
          { t: 'books instead of watching television in our free time.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="should be + -ing、shouldn't be + -ing、-ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">should be + -&#x2060;ing</span>
          <span>應該正在做。</span>
        </div>
        <div>
          <span class="term">shouldn't be + -&#x2060;ing</span>
          <span>不應該正在做。</span>
        </div>
        <div>
          <span class="term">-&#x2060;ing</span>
          <span>正在進行的動作。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="開玩笑的用法">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You should be jumping up and down with joy!" :marks="[]" /><span
              class="translation"
              >你應該高興得跳起來才對！</span
            ></span
          >
        </div>
      </div>
      <p class="remark">
        You should be + -&#x2060;ing 也可以用在開玩笑，誇張地說對方應該有的反應。
      </p>
    </NoteSlide>
    <NoteSlide title="should be 後面接 -ing" mark="should be">
      <NoteFix
        wrong="You should be study now."
        right="You should be studying now."
        :fix="['studying']"
      />
    </NoteSlide>
    <NoteSlide title="should 和 -ing 中間要有 be" mark="should">
      <NoteFix
        wrong="We should reading more books."
        right="We should be reading more books."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="should 後面接原形 be" mark="should">
      <NoteFix wrong="She should is working." right="She should be working." :fix="['be']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
