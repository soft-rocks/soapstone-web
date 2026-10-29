<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-use-neither-nor, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="neither ... nor 表示兩個都不，動詞用肯定的形式">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Neither', role: 'neither', kind: 'key' },
          { t: 'you', role: 'A' },
          { t: 'nor', role: 'nor', kind: 'key' },
          { t: 'I', role: 'B' },
          { t: 'would like', role: '肯定的動詞' },
          { t: 'that.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">你和我都不會喜歡那樣的。</p>
    </NoteSlide>

    <NoteSlide title="A 和 B 可以是名詞、動詞或形容詞，兩邊要同一種成分" mark="Neither">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="My grandmother owns neither a TV nor a computer."
              :marks="['a TV', 'a computer']"
            /><span class="translation">我奶奶既沒有電視也沒有電腦。</span></span
          >
        </div>
        <div>
          <span class="term">動詞</span>
          <span
            ><NoteMark sentence="He can neither sing nor dance." :marks="['sing', 'dance']" /><span
              class="translation"
              >他不會唱歌也不會跳舞。</span
            ></span
          >
        </div>
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark
              sentence="The soup was neither hot nor tasty."
              :marks="['hot', 'tasty']"
            /><span class="translation">那碗湯既不熱也不好喝。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="當主詞時，動詞跟著 nor 後面的 B" mark="I">
      <div class="rows is-labeled">
        <div>
          <span class="term">B 是複數</span>
          <span
            ><NoteMark
              sentence="Neither my aunt nor my cousins are coming to the wedding."
              :marks="['my cousins are']"
            /><span class="translation">我阿姨和我的表兄弟姊妹都不來婚禮。</span></span
          >
        </div>
        <div>
          <span class="term">B 是單數</span>
          <span
            ><NoteMark
              sentence="Neither my cousins nor my aunt is coming to the wedding."
              :marks="['my aunt is']"
            /><span class="translation">我的表兄弟姊妹和我阿姨都不來婚禮。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="neither ... nor 比 not ... or 正式，也比較強調" mark="Neither">
      <div class="rows is-labeled">
        <div>
          <span class="term">not ... or</span>
          <span
            ><NoteMark sentence="I don't drink beer or wine." :marks="['don\'t', 'or']" /><span
              class="translation"
              >我不喝啤酒，也不喝葡萄酒。</span
            ></span
          >
        </div>
        <div>
          <span class="term">neither ... nor</span>
          <span
            ><NoteMark sentence="I drink neither beer nor wine." :marks="['neither', 'nor']" /><span
              class="translation"
              >啤酒和葡萄酒我都不喝。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="neither 和 nor 一起用，不用 or" mark="nor">
      <NoteFix
        wrong="Neither Tom or Sue was there."
        right="Neither Tom nor Sue was there."
        fix="nor"
      />
    </NoteSlide>

    <NoteSlide title="neither ... nor 的動詞不再加 not" mark="would like">
      <NoteFix
        wrong="Neither Sam nor his wife didn't want dessert."
        right="Neither Sam nor his wife wanted dessert."
        fix="wanted"
      />
    </NoteSlide>

    <NoteSlide title="neither 和 nor 後面接同一種成分">
      <NoteFix
        wrong="She neither called nor an email."
        right="She neither called nor sent an email."
        fix="sent"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
