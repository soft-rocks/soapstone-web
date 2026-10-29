<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 059, as slides, in the order of notes/dragon-english-basic-100/059.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="兩個 the 加比較級的子句表示兩件事的程度一起改變"
      :mark="['The more', 'the longer']"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The more', role: 'the + 比較級', kind: 'key' },
          { t: 'modern civilization', role: '主詞' },
          { t: 'advances,', role: '動詞' },
          { t: 'the longer', role: 'the + 比較級', kind: 'key' },
          { t: 'we', role: '主詞' },
          { t: 'are forced to stay up at night', role: '動詞' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="第三個 the 加比較級的子句用 and 接上去" :mark="['and', 'the less']">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The earlier you go to bed,', role: '第一個子句', kind: 'dim' },
          { t: 'the better you feel,', role: '第二個子句', kind: 'dim' },
          { t: 'and', role: '連接詞', kind: 'key' },
          { t: 'the more you can do.', role: '第三個子句', kind: 'key' },
        ]"
      />
      <p class="translation">你越早睡，精神就越好，能做的事也越多。</p>
    </NoteSlide>

    <NoteSlide title="比較級後面的名詞跟比較級一起放在前面" mark="the less sleep">
      <NoteWords
        :size="26"
        :move="{ from: 3, to: 0 }"
        :parts="[
          { t: 'the less sleep', role: 'the + 比較級 + 名詞', kind: 'key' },
          { t: 'we', role: '主詞' },
          { t: 'get.', role: '動詞' },
          { role: '名詞原本的位置' },
        ]"
      />
      <p class="remark"><code>sleep</code> 是 <code>get</code> 的受詞。</p>
    </NoteSlide>

    <NoteSlide title="less 接不可數名詞，fewer 接複數名詞" mark="less sleep">
      <div class="rows is-labeled">
        <div>
          <span class="term">less + 不可數名詞</span>
          <span
            ><NoteMark sentence="I drink less coffee than before." :marks="['less coffee']" /><span
              class="translation"
              >我喝的咖啡比以前少。</span
            ></span
          >
        </div>
        <div>
          <span class="term">fewer + 複數名詞</span>
          <span
            ><NoteMark
              sentence="There are fewer students in my class this year."
              :marks="['fewer students']"
            /><span class="translation">今年我班上的學生比較少。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>sleep</code> 是不可數名詞，所以用 <code>less</code>。</p>
    </NoteSlide>

    <NoteSlide title="be forced to 加動詞原形表示被迫做某件事" mark="are forced to">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'were forced to', role: '被動', kind: 'key' },
          { t: 'stay', role: '動詞原形', kind: 'key' },
          { t: 'at home because of the typhoon.', kind: 'dim' },
        ]"
      />
      <p class="translation">因為颱風，我們被迫待在家裡。</p>
    </NoteSlide>

    <NoteSlide title="主動的說法是 force 加受詞加 to 不定詞" mark="are forced to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The rain', role: '主詞（造成這件事）' },
          { t: 'forced', role: '動詞', kind: 'key' },
          { t: 'us', role: '受詞' },
          { t: 'to cancel', role: 'to + 動詞原形', kind: 'key' },
          { t: 'the picnic.', kind: 'dim' },
        ]"
      />
      <p class="translation">這場雨讓我們不得不取消野餐。</p>
    </NoteSlide>
  </NoteDeck>
</template>
