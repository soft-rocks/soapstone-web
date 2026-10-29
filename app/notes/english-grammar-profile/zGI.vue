<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-use-inversion, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Not only 放在句首，have 移到主詞前面" mark="Not only have I">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'Not only', role: '句首', kind: 'key', ring: true },
          { t: 'have', role: '主詞前面', kind: 'key', ring: true },
          { t: 'I', role: '主詞' },
          { t: 'been wandering', role: 'been + 動詞-ing' },
          { t: 'its streets since I was ten,', kind: 'dim' },
        ]"
      />
      <p class="translation">我不但從十歲起就一直在它的街道上閒逛，</p>
      <p class="remark">說話者應徵導遊。</p>
    </NoteSlide>

    <NoteSlide title="but ... also 加上第二件事" mark="but I have also">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'but', role: '第二件事' },
          { t: 'I have', role: '一般語序' },
          { t: 'also', role: '助動詞後面', kind: 'key', ring: true },
          { t: 'come to know its history.', role: '現在完成式', kind: 'dim' },
        ]"
      />
      <p class="translation">也慢慢了解了它的歷史。</p>
    </NoteSlide>

    <NoteSlide title="not only 不在句首，不倒裝" mark="have I">
      <NoteMark
        sentence="I have not only been wandering its streets since I was ten, but I have also come to know its history."
        :marks="['I have not only']"
      />
      <p class="translation">我不但從十歲起就一直在它的街道上閒逛，也慢慢了解了它的歷史。</p>
    </NoteSlide>

    <NoteSlide title="第二件事的時態不用跟第一件事一樣" mark="but I have also come">
      <NoteMark
        sentence="My wife has decided to go back to university. Not only have I been expecting it, but I will also support her."
        :marks="['have I been expecting', 'will also support']"
      />
      <p class="translation">我太太決定回大學念書。我不但一直在等這件事，也會支持她。</p>
    </NoteSlide>

    <NoteSlide title="Not only 在句首，要倒裝" mark="have I">
      <NoteFix
        wrong="Not only I have been working here for ten years, but I have also trained new staff."
        right="Not only have I been working here for ten years, but I have also trained new staff."
        fix="have I"
      />
    </NoteSlide>

    <NoteSlide title="只有 have 移到主詞前面" mark="have I been">
      <NoteFix
        wrong="Not only been I have studying French, but I have also lived in Paris."
        right="Not only have I been studying French, but I have also lived in Paris."
        fix="have I been"
      />
    </NoteSlide>

    <NoteSlide title="but 後面的子句不倒裝" mark="but I have also">
      <NoteFix
        wrong="Not only has she been teaching for years, but has she also written two books."
        right="Not only has she been teaching for years, but she has also written two books."
        fix="she has"
      />
    </NoteSlide>

    <NoteSlide title="現在完成簡單式說做完的事" mark="have I been wandering">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'You can send it to the client today.', kind: 'dim' },
          { t: 'Not only', kind: 'dim' },
          { t: 'have I finished', role: '做完的事', kind: 'key', ring: true },
          { t: 'the report, but I have also checked it.', kind: 'dim' },
        ]"
      />
      <p class="translation">你今天就可以寄給客戶。我不但寫完了報告，也檢查過了。</p>
    </NoteSlide>

    <NoteSlide title="連接兩個詞時不在句首，不倒裝" mark="Not only">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My aunt is a tour guide in Rome.', kind: 'dim' },
          { t: 'She speaks', kind: 'dim' },
          { t: 'not only', kind: 'key', ring: true },
          { t: 'French', role: '名詞' },
          { t: 'but also', kind: 'key', ring: true },
          { t: 'Italian.', role: '名詞' },
        ]"
      />
      <p class="translation">我阿姨在羅馬當導遊。她不但會說法文，也會說義大利文。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
