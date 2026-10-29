<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-modification-reporting-verb-adverb, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="副詞放在引述動詞後面，說出說話的方式">
      <NoteWords
        :size="26"
        :parts="[
          { t: '&quot;Come on, what\'s wrong?&quot;', role: '引號裡的話', kind: 'dim' },
          { t: 'Bella', role: '主詞' },
          { t: 'asked', role: '引述動詞' },
          { t: 'curiously.', role: '副詞', kind: 'key' },
        ]"
      />
      <p class="translation">「好啦，到底怎麼了？」Bella 好奇地問。</p>
    </NoteSlide>

    <NoteSlide title="副詞說出聲音、情緒或態度" mark="curiously">
      <div class="rows is-labeled">
        <div>
          <span class="term">聲音</span>
          <span
            ><NoteMark
              sentence='"Don&apos;t wake the baby," she said quietly.'
              :marks="['quietly']"
            /><span class="translation">「別吵醒寶寶。」她小聲地說。</span></span
          >
        </div>
        <div>
          <span class="term">情緒</span>
          <span
            ><NoteMark sentence='"I&apos;ve lost my job," he said sadly.' :marks="['sadly']" /><span
              class="translation"
              >「我丟了工作。」他難過地說。</span
            ></span
          >
        </div>
        <div>
          <span class="term">態度</span>
          <span
            ><NoteMark
              sentence='"Are you sure this is the right road?" she asked doubtfully.'
              :marks="['doubtfully']"
            /><span class="translation">「你確定是這條路嗎？」她半信半疑地問。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="引述子句放在前面，副詞後面加逗號">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'She said', role: '引述子句' },
          { t: 'quietly,', role: '副詞', kind: 'key' },
          { t: '&quot;I think someone is outside.&quot;', kind: 'dim' },
        ]"
      />
      <p class="translation">她小聲地說：「我覺得外面有人。」</p>
    </NoteSlide>

    <NoteSlide title="主詞是名詞時可以倒裝，副詞放在最後">
      <NoteWords
        :size="26"
        :parts="[
          { t: '&quot;Sit down, please,&quot;', kind: 'dim' },
          { t: 'said', role: '引述動詞' },
          { t: 'the teacher', role: '主詞' },
          { t: 'firmly.', role: '副詞', kind: 'key' },
        ]"
      />
      <p class="translation">「請坐下。」老師堅定地說。</p>
    </NoteSlide>

    <NoteSlide title="修飾動詞用副詞，不用形容詞" mark="curiously">
      <NoteFix
        wrong='"Leave me alone!" she shouted angry.'
        right='"Leave me alone!" she shouted angrily.'
        fix="angrily"
      />
    </NoteSlide>

    <NoteSlide title="主詞是代名詞時不倒裝">
      <NoteFix
        wrong='"Thank you," said she politely.'
        right='"Thank you," she said politely.'
        fix="she said"
      />
    </NoteSlide>

    <NoteSlide title="引號裡的話後面接引述子句，句號改成逗號">
      <NoteFix
        wrong='"I&apos;m fine." he said calmly.'
        right='"I&apos;m fine," he said calmly.'
        fix="fine,"
      />
    </NoteSlide>

    <NoteSlide title="子音加 y 結尾，y 改成 i 再加 -ly">
      <NoteFix
        wrong='"We won!" she said happyly.'
        right='"We won!" she said happily.'
        fix="happily"
      />
    </NoteSlide>

    <NoteSlide title="sound 是連綴動詞，後面接形容詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She', kind: 'dim' },
          { t: 'sounded', role: '連綴動詞' },
          { t: 'angry', role: '形容詞', kind: 'key' },
          { t: 'on the phone.', kind: 'dim' },
        ]"
      />
      <p class="translation">她在電話裡聽起來很生氣。</p>
    </NoteSlide>

    <NoteSlide title="引號裡的副詞是說話的人說出的字">
      <NoteWords
        :size="28"
        :parts="[
          { t: '&quot;Honestly,', role: '引號裡', kind: 'key' },
          { t: 'I don\'t know,&quot; she said.', kind: 'dim' },
        ]"
      />
      <p class="translation">「說真的，我不知道。」她說。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
