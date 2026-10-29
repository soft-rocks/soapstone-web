<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// just, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="already 放在 have 和過去分詞中間">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'ve', role: '主詞 + have' },
          { t: 'already', role: '時間副詞', kind: 'key' },
          { t: 'seen', role: '過去分詞' },
          { t: 'it.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我已經看過了。</p>
      <p class="remark">事情已經發生了，或比預期的早發生。</p>
    </NoteSlide>

    <NoteSlide title="just 表示事情在不久之前發生" mark="already">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'ve', role: '主詞 + have' },
          { t: 'just', role: '時間副詞', kind: 'key' },
          { t: 'finished', role: '過去分詞' },
          { t: 'my homework.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我剛寫完功課。</p>
    </NoteSlide>

    <NoteSlide title="yesterday 配過去式，now 配現在式或現在進行式">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark sentence="We went shopping yesterday." :marks="['went', 'yesterday']" /><span
              class="translation"
              >我們昨天去逛街。</span
            ></span
          >
        </div>
        <div>
          <span class="term">現在進行式</span>
          <span
            ><NoteMark
              sentence="I'm working very hard now."
              :marks="['I\'m working', 'now']"
            /><span class="translation">我現在工作很拚。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="美式英文的 just 和 already 也配過去式" mark="already">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'just', role: '時間副詞', kind: 'key' },
          { t: 'saw', role: '過去式' },
          { t: 'him.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="remark">英式英文常說 <code>I've just seen him.</code></p>
    </NoteSlide>

    <NoteSlide title="yesterday 不和現在完成式一起用">
      <NoteFix wrong="I have seen him yesterday." right="I saw him yesterday." fix="saw" />
    </NoteSlide>

    <NoteSlide title="already 不放在句首" mark="already">
      <NoteFix wrong="Already I have eaten." right="I have already eaten." fix="already" />
    </NoteSlide>

    <NoteSlide title="just 不放在過去分詞後面">
      <NoteFix wrong="She has arrived just." right="She has just arrived." fix="just" />
    </NoteSlide>

    <NoteSlide title="yesterday 是副詞，前面不加 the">
      <NoteFix
        wrong="The yesterday we visited my uncle."
        right="Yesterday we visited my uncle."
        fix="Yesterday"
      />
    </NoteSlide>

    <NoteSlide title="already 用在肯定句，yet 用在疑問句和否定句" mark="already">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Have you finished', kind: 'dim' },
          { t: 'yet?', role: '疑問句', kind: 'key' },
          { t: 'Yes, I\'ve', kind: 'dim' },
          { t: 'already', role: '肯定句', kind: 'key' },
          { t: 'finished.', kind: 'dim' },
        ]"
      />
      <p class="translation">你做完了嗎？——做完了，我已經做完了。</p>
    </NoteSlide>

    <NoteSlide title="表示只是的 just 不表示時間">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'just', role: '只是', kind: 'key' },
          { t: 'want', role: '現在式' },
          { t: 'some water.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我只是想要一點水。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
