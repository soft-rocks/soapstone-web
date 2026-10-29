<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 015, as slides, in the order of notes/dragon-english-basic-100/015.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="現在完成式表示過去的動作跟現在有關">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: '’ve', role: 'have 的縮寫', kind: 'key' },
          { t: 'decided', role: '過去分詞', kind: 'key' },
          { t: 'to look for a job abroad when I graduate from college.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">決定已經做了，現在還是這個決定。</p>
    </NoteSlide>

    <NoteSlide title="現在完成式是 have 或 has 加過去分詞" mark="I’ve decided">
      <div class="rows is-labeled">
        <div>
          <span class="term">have</span>
          <span
            ><NoteMark sentence="I've lost my key." :marks="['I\'ve lost']" /><span
              class="translation"
              >我把鑰匙弄丟了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">has</span>
          <span
            ><NoteMark sentence="She has finished her homework." :marks="['has finished']" /><span
              class="translation"
              >她已經寫完功課了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="decide 後面接 to 加動詞原形" mark="decided to look">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We', kind: 'dim' },
          { t: 'decided', role: '動詞' },
          { t: 'to go', role: 'to + 動詞原形', kind: 'key' },
          { t: 'camping.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們決定去露營。</p>
    </NoteSlide>

    <NoteSlide title="決定不做某件事，not 放在 to 前面" mark="to look">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'He', kind: 'dim' },
          { t: 'decided', role: '動詞' },
          { t: 'not', role: '否定', kind: 'key', ring: true },
          { t: 'to buy', role: 'to + 動詞原形', kind: 'key' },
          { t: 'the car.', kind: 'dim' },
        ]"
      />
      <p class="translation">他決定不買那輛車。</p>
    </NoteSlide>

    <NoteSlide title="abroad 是副詞，表示在國外或到國外" mark="abroad">
      <div class="rows is-labeled">
        <div>
          <span class="term">在國外</span>
          <span
            ><NoteMark sentence="My sister studies abroad." :marks="['studies abroad']" /><span
              class="translation"
              >我姊姊在國外讀書。</span
            ></span
          >
        </div>
        <div>
          <span class="term">到國外</span>
          <span
            ><NoteMark sentence="Many people go abroad in summer." :marks="['go abroad']" /><span
              class="translation"
              >很多人夏天出國。</span
            ></span
          >
        </div>
      </div>
      <p class="remark"><code>abroad</code> 前面不加 <code>to</code> 或 <code>in</code>。</p>
    </NoteSlide>

    <NoteSlide title="abroad 放在名詞後面修飾名詞" mark="a job abroad">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'look for', kind: 'dim' },
          { t: 'a job', role: '名詞' },
          { t: 'abroad', role: '副詞', kind: 'key' },
        ]"
      />
      <p class="remark">原句的 <code>a job abroad</code> 的意思是國外的工作。</p>
    </NoteSlide>

    <NoteSlide title="時間子句講未來的事，動詞用現在式，不用 will" mark="graduate">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'when', role: '連接詞', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'graduate', role: '現在式', kind: 'key', ring: true },
          { t: 'from college.', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide
      title="時間子句可以放在主要子句後面，也可以放在句首"
      mark="when I graduate from college"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">主要子句後面</span>
          <span
            ><NoteMark
              sentence="What will you do after you graduate from college?"
              :marks="['after you graduate']"
            /><span class="translation">你大學畢業後要做什麼？</span></span
          >
        </div>
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="When I graduate from high school, I'll be eighteen."
              :marks="['When I graduate']"
            /><span class="translation">我高中畢業的時候就十八歲了。</span></span
          >
        </div>
      </div>
      <p class="remark">放在句首時，後面加逗號。主要子句照常用 <code>will</code>。</p>
    </NoteSlide>
  </NoteDeck>
</template>
