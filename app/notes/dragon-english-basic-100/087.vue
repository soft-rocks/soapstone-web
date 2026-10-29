<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 087, as slides, in the order of notes/dragon-english-basic-100/087.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="to 不定詞放在名詞後面，說明名詞的內容" mark="The tendency">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The tendency', role: '名詞', kind: 'key' },
          { t: 'for young people', role: 'for + 人' },
          { t: 'to believe everything that is printed', role: 'to + 動詞原形', kind: 'key' },
          { t: 'is nothing new.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="for 加人放在 to 前面，表示做這個動作的人" mark="for young people">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It\'s', kind: 'dim' },
          { t: 'time', role: '名詞' },
          { t: 'for the children', role: 'for + 人', kind: 'key' },
          { t: 'to go to bed.', role: 'to + 動詞原形' },
        ]"
      />
      <p class="translation">孩子們該睡覺了。</p>
      <p class="remark">
        <code>tendency</code>、<code>time</code>、<code>chance</code>、<code>need</code> 常這樣用。
      </p>
    </NoteSlide>

    <NoteSlide title="關係代名詞 that 帶出子句，說明前面的 everything" mark="everything that">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'to believe', kind: 'dim' },
          { t: 'everything', role: '代名詞', kind: 'key' },
          { t: 'that', role: '關係代名詞\n子句的主詞', kind: 'key' },
          { t: 'is printed', role: '子句的動詞' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="everything、anything、all 後面的關係代名詞常用 that" mark="everything that">
      <div class="rows is-labeled">
        <div>
          <span class="term">everything</span>
          <span
            ><NoteMark
              sentence="You can take everything that is on the table."
              :marks="['everything that']"
            /><span class="translation">桌上的東西你都可以拿。</span></span
          >
        </div>
        <div>
          <span class="term">anything</span>
          <span
            ><NoteMark
              sentence="Is there anything that I can do for you?"
              :marks="['anything that']"
            /><span class="translation">有什麼我能為你做的嗎？</span></span
          >
        </div>
        <div>
          <span class="term">all</span>
          <span
            ><NoteMark sentence="This is all that I have." :marks="['all that']" /><span
              class="translation"
              >我只有這些。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="that 在子句裡當受詞時可以省略" mark="that">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Don\'t believe', kind: 'dim' },
          { t: 'everything', role: '代名詞' },
          { t: 'that', role: '可以省略', kind: 'gone' },
          { t: 'you', role: '子句的主詞' },
          { t: 'hear.', role: '子句的動詞' },
        ]"
      />
      <p class="translation">不要相信你聽到的每件事。</p>
      <p class="remark">原句的 <code>that</code> 在子句裡當主詞。</p>
    </NoteSlide>

    <NoteSlide title="形容詞放在 nothing 後面" mark="nothing new">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'is', kind: 'dim' },
          { t: 'nothing', role: '代名詞', kind: 'key' },
          { t: 'new.', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="remark"><code>nothing new</code> 表示不是新的事，以前就有了。</p>
    </NoteSlide>

    <NoteSlide title="something 和 anything 的形容詞也放在後面" mark="nothing new">
      <div class="rows is-labeled">
        <div>
          <span class="term">something</span>
          <span
            ><NoteMark
              sentence="I want something cold to drink."
              :marks="['something cold']"
            /><span class="translation">我想喝點冰的東西。</span></span
          >
        </div>
        <div>
          <span class="term">nothing</span>
          <span
            ><NoteMark
              sentence="There was nothing interesting in the newspaper."
              :marks="['nothing interesting']"
            /><span class="translation">報紙上沒什麼有趣的消息。</span></span
          >
        </div>
        <div>
          <span class="term">anything</span>
          <span
            ><NoteMark
              sentence="Did you do anything special on your birthday?"
              :marks="['anything special']"
            /><span class="translation">你生日的時候有做什麼特別的事嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
