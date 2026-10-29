<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-main-verb-be, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be 是主要動詞時，not 放在 be 後面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'m', role: '主詞 + be' },
          { t: 'not', role: 'not', kind: 'key' },
          { t: 'a good swimmer.', role: '補語', kind: 'dim' },
        ]"
      />
      <p class="translation">我游泳游得不好。</p>
    </NoteSlide>

    <NoteSlide title="be 依照主詞和時態用 am、is、are、was 或 were" mark="not">
      <div class="rows is-labeled">
        <div>
          <span class="term">is not</span>
          <span
            ><NoteMark sentence="My college is not very big." :marks="['is not']" /><span
              class="translation"
              >我的學校不太大。</span
            ></span
          >
        </div>
        <div>
          <span class="term">are not</span>
          <span
            ><NoteMark sentence="We are not ready yet." :marks="['are not']" /><span
              class="translation"
              >我們還沒準備好。</span
            ></span
          >
        </div>
        <div>
          <span class="term">was not</span>
          <span
            ><NoteMark sentence="The film was not very good." :marks="['was not']" /><span
              class="translation"
              >電影不太好看。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="縮寫可以縮主詞和 be，也可以縮 be 和 not" mark="I'm">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞和 be 縮寫</span>
          <span
            ><NoteMark sentence="He's not dangerous." :marks="['He\'s']" /><span class="translation"
              >牠不危險。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be 和 not 縮寫</span>
          <span
            ><NoteMark sentence="It isn't far from here." :marks="['isn\'t']" /><span
              class="translation"
              >從這裡過去不遠。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">
        <code>I am not</code> 只能縮成 <code>I'm not</code>。過去式只有 <code>wasn't</code> 和
        <code>weren't</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="不縮寫的 not 用在正式的文章，也用來加強語氣" mark="not">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'am', role: 'be' },
          { t: 'not', role: '說得重一點', kind: 'key', ring: true },
          { t: 'tired.', role: '補語', kind: 'dim' },
        ]"
      />
      <p class="translation">我真的不累。</p>
      <p class="remark">說話者回應別人說他累了。</p>
    </NoteSlide>

    <NoteSlide title="be 的否定不用 don't" mark="I'm not">
      <NoteFix wrong="I don't happy today." right="I'm not happy today." fix="I'm not" />
    </NoteSlide>

    <NoteSlide title="否定句裡也要有 be" mark="I'm">
      <NoteFix wrong="My sister not at home." right="My sister isn't at home." fix="isn't" />
    </NoteSlide>

    <NoteSlide title="not 放在 be 後面" mark="not">
      <NoteFix wrong="She not is my teacher." right="She is not my teacher." fix="is not" />
    </NoteSlide>

    <NoteSlide title="am 和 not 沒有縮寫的形式" mark="I'm">
      <NoteFix wrong="I amn't ready." right="I'm not ready." fix="I'm not" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
