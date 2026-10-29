<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 032, as slides, in the order of notes/dragon-english-basic-100/032.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="講過去沒發生的事，if 子句用過去完成式"
      :mark="['had taken', 'would', 'have got']"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'had left', role: 'had + 過去分詞', kind: 'key' },
          { t: 'home earlier,', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'would have caught', role: 'would have + 過去分詞', kind: 'key' },
          { t: 'the train.', kind: 'dim' },
        ]"
      />
      <p class="translation">如果我早一點出門，我就會趕上火車了。</p>
      <p class="remark">原句的人沒有吃藥，也沒有躺在床上。</p>
    </NoteSlide>

    <NoteSlide title="主要子句也可以用 could have 或 might have" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">could have</span>
          <span
            ><NoteMark
              sentence="If it hadn't rained, we could have played soccer."
              :marks="['could have played']"
            /><span class="translation">如果沒有下雨，我們就可以踢足球了。</span></span
          >
        </div>
        <div>
          <span class="term">might have</span>
          <span
            ><NoteMark
              sentence="If you had studied harder, you might have passed the test."
              :marks="['might have passed']"
            /><span class="translation">如果你更用功讀書，你可能就會通過考試了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="probably 放在 would 和 have 中間" mark="would probably have">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'you', role: '主詞', kind: 'dim' },
          { t: 'would', role: '助動詞' },
          { t: 'probably', role: '副詞', kind: 'key', ring: true },
          { t: 'have got', role: 'have + 過去分詞' },
          { t: 'well in two or three days.', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>probably</code> 表示說話的人認為很可能。</p>
    </NoteSlide>

    <NoteSlide title="if 子句放在主要子句後面時，中間不加逗號" mark="If">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'She would have come to the party', role: '主要子句' },
          { t: 'if she hadn\'t been sick.', role: 'if 子句', kind: 'key' },
        ]"
      />
      <p class="translation">如果她沒有生病，她就會來派對了。</p>
    </NoteSlide>

    <NoteSlide title="連綴動詞 get 接形容詞，表示主詞變成什麼狀態" mark="got well">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I hope', kind: 'dim' },
          { t: 'you', role: '主詞' },
          { t: 'get', role: '連綴動詞', kind: 'key' },
          { t: 'well', role: '形容詞', kind: 'key' },
          { t: 'soon.', kind: 'dim' },
        ]"
      />
      <p class="translation">我希望你早日康復。</p>
      <p class="remark"><code>well</code> 是形容詞，意思是健康的。</p>
    </NoteSlide>

    <NoteSlide title="get well 是病好起來，get sick 是生病" mark="got well">
      <div class="rows is-labeled">
        <div>
          <span class="term">get well</span>
          <span
            ><NoteMark
              sentence="My grandmother got well after a week in the hospital."
              :marks="['got well']"
            /><span class="translation">我奶奶住院一個星期之後好起來了。</span></span
          >
        </div>
        <div>
          <span class="term">get sick</span>
          <span
            ><NoteMark
              sentence="Many students got sick after the school trip."
              :marks="['got sick']"
            /><span class="translation">校外教學之後很多學生生病了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="get 的過去分詞，英式英文用 got，美式英文常用 gotten" mark="got">
      <div class="rows is-labeled">
        <div>
          <span class="term">英式 got</span>
          <span
            ><NoteMark
              sentence="If I had stayed in bed, I would probably have got well sooner."
              :marks="['have got']"
            /><span class="translation">如果我待在床上休息，我大概會好得比較快。</span></span
          >
        </div>
        <div>
          <span class="term">美式 gotten</span>
          <span
            ><NoteMark sentence="It has gotten very cold this week." :marks="['has gotten']" /><span
              class="translation"
              >這個星期變得很冷。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="and 連接兩個過去完成式的動作，第二個 had 可以省略" mark="and stayed">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If you', kind: 'dim' },
          { t: 'had', role: '助動詞', kind: 'key' },
          { t: 'taken this medicine', role: '過去分詞' },
          { t: 'and', role: '連接詞' },
          { t: 'had', role: '省略', kind: 'gone' },
          { t: 'stayed in bed,', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="remark"><code>stayed</code> 的意思是 <code>had stayed</code>。</p>
    </NoteSlide>

    <NoteSlide title="一般的過去完成式句子也可以省略第二個 had" mark="and stayed">
      <div class="rows is-labeled">
        <div>
          <span class="term">cleaned = had cleaned</span>
          <span
            ><NoteMark
              sentence="I had finished my homework and cleaned my room before dinner."
              :marks="['had finished', 'cleaned']"
            /><span class="translation">晚餐前我已經寫完功課、打掃好房間了。</span></span
          >
        </div>
        <div>
          <span class="term">gone = had gone</span>
          <span
            ><NoteMark
              sentence="By the time we got to the party, everyone had eaten and gone home."
              :marks="['had eaten', 'gone']"
            /><span class="translation">我們到派對的時候，大家都已經吃完回家了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
