<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-place, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="here 自己就表示地點，放在 be 後面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'My girlfriend', role: '主詞' },
          { t: 'is', role: 'be' },
          { t: 'here', role: '地方副詞', kind: 'key' },
          { t: 'with me.', role: '介系詞片語', kind: 'dim' },
        ]"
      />
      <p class="translation">我女朋友跟我一起在這裡。</p>
    </NoteSlide>

    <NoteSlide title="here 和 there 也可以放在名詞後面" mark="here">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'The people', role: '名詞' },
          { t: 'here', role: '地方副詞', kind: 'key', ring: true },
          { t: 'are very kind.', kind: 'dim' },
        ]"
      />
      <p class="translation">這裡的人很親切。</p>
    </NoteSlide>

    <NoteSlide title="here 指說話者所在的地方，there 指別的地方" mark="here">
      <div class="rows is-labeled">
        <div>
          <span class="term">here<br /><i>說話者所在的地方</i></span>
          <span
            ><NoteMark sentence="Come here and look at this." :marks="['here']" /><span
              class="translation"
              >過來看一下這個。</span
            ></span
          >
        </div>
        <div>
          <span class="term">there<br /><i>說話者不在的地方</i></span>
          <span
            ><NoteMark sentence="Stay there. I'm coming." :marks="['there']" /><span
              class="translation"
              >待在那裡別動。我就來。</span
            ></span
          >
        </div>
        <div>
          <span class="term">there<br /><i>前面提過的地方</i></span>
          <span
            ><NoteMark
              sentence="I was born in Kyoto, and I lived there for twenty years."
              :marks="['Kyoto', 'there']"
            /><span class="translation">我在京都出生，在那裡住了二十年。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="here 和 there 前面不加 to 或 at" mark="here">
      <NoteFix wrong="Please come to here." right="Please come here." fix="come here">
        <code>in there</code> 指一個空間的裡面，像 <code>Your keys are in there.</code>
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="說話者所在的地方用 here" mark="here">
      <NoteFix
        wrong="I'm at home now. Please come there."
        right="I'm at home now. Please come here."
        fix="here"
      />
    </NoteSlide>

    <NoteSlide title="動詞有受詞時，here 放在受詞後面" mark="here">
      <NoteFix wrong="I left here my coat." right="I left my coat here." fix="here" />
    </NoteSlide>

    <NoteSlide title="there is 的 there 不指地點" mark="here">
      <div class="rows is-labeled">
        <div>
          <span class="term">there is<br /><i>某處有某個東西</i></span>
          <span
            ><NoteMark sentence="There is a park near my house." :marks="['There is']" /><span
              class="translation"
              >我家附近有一座公園。</span
            ></span
          >
        </div>
        <div>
          <span class="term">地方副詞<br /><i>表示位置</i></span>
          <span
            ><NoteMark sentence="The park is over there." :marks="['there']" /><span
              class="translation"
              >公園在那邊。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="over here 和 over there 說的地點比較明確" mark="here">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Come and sit', kind: 'dim' },
          { t: 'over here.', role: '地方副詞', kind: 'key' },
        ]"
      />
      <p class="translation">過來坐這邊。</p>
      <p class="remark">常配合手勢。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
