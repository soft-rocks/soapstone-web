<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 031, as slides, in the order of notes/dragon-english-basic-100/031.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="現在完成式表示動作做完了，結果留到現在" mark="finished">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I’ve finished', role: 'have + 過去分詞', kind: 'key' },
          { t: 'reading the novel,', role: '做完的動作', kind: 'dim' },
          { t: 'so now I have nothing to do.', role: '現在的結果' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">小說看完了，所以現在沒事做。</p>
    </NoteSlide>

    <NoteSlide title="現在完成式常和 just、already、yet 一起用" mark="finished">
      <div class="rows is-labeled">
        <div>
          <span class="term">just</span>
          <span
            ><NoteMark sentence="I've just finished my homework." :marks="['just']" /><span
              class="translation"
              >我剛寫完功課。</span
            ></span
          >
        </div>
        <div>
          <span class="term">already</span>
          <span
            ><NoteMark sentence="I've already paid for dinner." :marks="['already']" /><span
              class="translation"
              >晚餐的錢我已經付了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">yet</span>
          <span
            ><NoteMark sentence="Has your sister found a new job yet?" :marks="['yet']" /><span
              class="translation"
              >你姊姊找到新工作了嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="finish 後面接動詞-ing" mark="finished reading">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Have you', kind: 'dim' },
          { t: 'finished', role: '動詞', kind: 'key' },
          { t: 'writing', role: '動詞-ing', kind: 'key', ring: true },
          { t: 'the letter?', role: '受詞' },
        ]"
      />
      <p class="translation">你寫完那封信了嗎？</p>
      <p class="remark"><code>finish</code> 後面不接 <code>to</code> 不定詞。</p>
    </NoteSlide>

    <NoteSlide title="當受詞的關係代名詞可以省略" mark="the novel I borrowed">
      <NoteWords
        :size="24"
        :move="{ from: 4, to: 0 }"
        :parts="[
          { t: 'the novel', role: '名詞', kind: 'key' },
          { t: 'that', role: '可以省略', kind: 'gone' },
          { t: 'I', role: '主詞' },
          { t: 'borrowed', role: '動詞', kind: 'key' },
          { role: '受詞的位置' },
          { t: 'from the library yesterday', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>novel</code> 是 <code>borrowed</code> 的受詞。</p>
    </NoteSlide>

    <NoteSlide title="名詞後面直接接主詞和動詞，修飾這個名詞" mark="the novel I borrowed">
      <div class="rows is-labeled">
        <div>
          <span class="term">book</span>
          <span
            ><NoteMark
              sentence="Have you finished reading the book I lent you?"
              :marks="['the book I lent']"
            /><span class="translation">你看完我借你的書了嗎？</span></span
          >
        </div>
        <div>
          <span class="term">novel</span>
          <span
            ><NoteMark
              sentence="The novel I'm reading now is very long."
              :marks="['The novel I\'m reading']"
            /><span class="translation">我現在在看的小說很長。</span></span
          >
        </div>
        <div>
          <span class="term">umbrella</span>
          <span
            ><NoteMark
              sentence="I returned the umbrella I borrowed last week."
              :marks="['the umbrella I borrowed']"
            /><span class="translation">我把上星期借的傘還回去了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="to 不定詞放在 nothing 後面，修飾 nothing" mark="nothing to do">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'now I have', kind: 'dim' },
          { t: 'nothing', role: '代名詞', kind: 'key' },
          { t: 'to do.', role: 'to + 動詞原形', kind: 'key' },
        ]"
      />
      <p class="remark"><code>nothing to do</code> 是沒有事可以做。</p>
    </NoteSlide>

    <NoteSlide title="something、anything 後面也可以接 to 不定詞" mark="nothing to do">
      <div class="rows is-labeled">
        <div>
          <span class="term">anything</span>
          <span
            ><NoteMark
              sentence="I'm hungry. Is there anything to eat?"
              :marks="['anything to eat']"
            /><span class="translation">我餓了。有什麼可以吃的嗎？</span></span
          >
        </div>
        <div>
          <span class="term">something</span>
          <span
            ><NoteMark
              sentence="I have something to tell you."
              :marks="['something to tell']"
            /><span class="translation">我有事要跟你說。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
