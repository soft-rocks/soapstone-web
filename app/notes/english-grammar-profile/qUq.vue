<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-inversion-with-not-only-but-also, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Not only 放句首，do 移到主詞前面">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Not only', role: 'Not only', kind: 'key' },
          { t: 'do', role: 'do', kind: 'key', ring: true },
          { t: 'they', role: '主詞', ring: true },
          { t: 'save', role: '原形動詞' },
          { t: 'you filing time,', kind: 'dim' },
          { t: 'but', role: 'but' },
          { t: 'they also save office space.', role: '第二個子句', kind: 'dim' },
        ]"
      />
      <p class="translation">它們不但能幫你省下歸檔的時間，還能節省辦公空間。</p>
    </NoteSlide>
    <NoteSlide title="單數主詞用 does" mark="do">
      <div class="rows is-labeled">
        <div>
          <span class="term">do</span>
          <span
            ><NoteMark
              sentence="Not only do they save time, but they also save space."
              :marks="['do', 'they']"
            /><span class="translation">它們不但省時間，還能省空間。</span></span
          >
        </div>
        <div>
          <span class="term">does</span>
          <span
            ><NoteMark
              sentence="Not only does she sing, but she also writes her own songs."
              :marks="['does', 'she']"
            /><span class="translation">她不只會唱歌，還自己寫歌。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="動詞是 be 時，be 直接移到主詞前面" mark="do">
      <div class="rows is-labeled">
        <div>
          <span class="term">be</span>
          <span
            ><NoteMark
              sentence="Not only is the hotel cheap, but it's also near the beach."
              :marks="['is', 'the hotel']"
            /><span class="translation">這家飯店不只便宜，還離海邊很近。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="Not only 不在句首就不倒裝" mark="Not only">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般</span>
          <span
            ><NoteMark
              sentence="They not only save time but also save space."
              :marks="['They', 'not only']"
            /><span class="translation">它們不只省時間，還省空間。</span></span
          >
        </div>
        <div>
          <span class="term">倒裝</span>
          <span
            ><NoteMark
              sentence="Not only do they save time, but they also save space."
              :marks="['Not only do they']"
            /><span class="translation">它們不但省時間，還能省空間。</span></span
          >
        </div>
      </div>
      <p class="remark">倒裝的句子比較正式。</p>
    </NoteSlide>
    <NoteSlide title="Not only 放句首時要倒裝" mark="do">
      <NoteFix
        wrong="Not only they save time, but they also save space."
        right="Not only do they save time, but they also save space."
        :fix="['do they']"
      />
    </NoteSlide>
    <NoteSlide title="but 後面用一般語序" mark="but">
      <NoteFix
        wrong="Not only does he cook, but also does he clean."
        right="Not only does he cook, but he also cleans."
        :fix="['he also cleans.']"
      />
    </NoteSlide>
    <NoteSlide title="be 的句子不加 does" mark="do">
      <NoteFix
        wrong="Not only does the room is big, but it's also bright."
        right="Not only is the room big, but it's also bright."
        :fix="['is the room']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
