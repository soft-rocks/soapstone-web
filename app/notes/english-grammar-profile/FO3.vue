<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-use-wonder-reported-thought, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="wondered + wh 詞 + 子句，轉述心裡想的問題">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'wondered', role: '引述動詞', kind: 'key' },
          { t: 'what', role: 'wh 詞', kind: 'key' },
          { t: 'she had written.', role: '子句' },
        ]"
      />
      <p class="translation">我很好奇她寫了什麼。</p>
    </NoteSlide>

    <NoteSlide title="問句的語序改成陳述句的語序，時態後移" mark="she had written">
      <div class="rows is-labeled">
        <div>
          <span class="term">心裡的問題</span>
          <span
            ><NoteMark sentence='"What has she written?"' :marks="['has she']" /><span
              class="translation"
              >「她寫了什麼？」</span
            ></span
          >
        </div>
        <div>
          <span class="term">轉述</span>
          <span
            ><NoteMark sentence="I wondered what she had written." :marks="['she had']" /><span
              class="translation"
              >我很好奇她寫了什麼。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="時態後移" mark="had written">
      <div class="rows is-labeled">
        <div>
          <span class="term">is → was</span>
          <span
            ><NoteMark sentence="I wondered who he was." :marks="['was']" /><span
              class="translation"
              >我很好奇他是誰。</span
            ></span
          >
        </div>
        <div>
          <span class="term">has gone → had gone</span>
          <span
            ><NoteMark sentence="She wondered where he had gone." :marks="['had gone']" /><span
              class="translation"
              >她很好奇他去了哪裡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">did leave → had left</span>
          <span
            ><NoteMark sentence="We wondered why she had left." :marks="['had left']" /><span
              class="translation"
              >我們很納悶她為什麼走了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">will → would</span>
          <span
            ><NoteMark sentence="I wondered what would happen." :marks="['would']" /><span
              class="translation"
              >我很好奇會發生什麼事。</span
            ></span
          >
        </div>
        <div>
          <span class="term">can → could</span>
          <span
            ><NoteMark sentence="He wondered how he could help." :marks="['could']" /><span
              class="translation"
              >他想著自己能怎麼幫忙。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="yes/no 問句用 if 或 whether" mark="what">
      <div class="rows is-labeled">
        <div>
          <span class="term">if</span>
          <span
            ><NoteMark sentence="I wondered if she was angry with me." :marks="['if']" /><span
              class="translation"
              >我在想她是不是在生我的氣。</span
            ></span
          >
        </div>
        <div>
          <span class="term">whether</span>
          <span
            ><NoteMark
              sentence="She wondered whether she should tell him."
              :marks="['whether']"
            /><span class="translation">她在想要不要告訴他。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="wh 詞 + to + 原形動詞，沒有主詞和時態">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I wondered', kind: 'dim' },
          { t: 'what', role: 'wh 詞', kind: 'key' },
          { t: 'to say.', role: 'to + 原形動詞', kind: 'key' },
        ]"
      />
      <p class="translation">我在想該說什麼。</p>
    </NoteSlide>

    <NoteSlide title="子句用陳述句的語序" mark="she had written">
      <NoteFix
        wrong="I wondered where had they put the money."
        right="I wondered where they had put the money."
        fix="they had"
      />
    </NoteSlide>

    <NoteSlide title="過去的想法，子句的時態後移" mark="had written">
      <NoteFix wrong="I wondered what time it is." right="I wondered what time it was." fix="was" />
    </NoteSlide>

    <NoteSlide title="整句是陳述句，句尾用句號">
      <NoteFix
        wrong="He wondered why the shop was closed?"
        right="He wondered why the shop was closed."
        fix="closed."
      />
    </NoteSlide>

    <NoteSlide title="子句裡不用 did" mark="she had written">
      <NoteFix
        wrong="She wondered how did he know her name."
        right="She wondered how he knew her name."
        fix="he knew"
      />
    </NoteSlide>

    <NoteSlide title="現在式 wonder，時態不後移" mark="wondered">
      <div class="rows is-labeled">
        <div>
          <span class="term">wonder</span>
          <span
            ><NoteMark
              sentence="I wonder what's in this box."
              :marks="['wonder', 'what\'s']"
            /><span class="translation">我很好奇這個盒子裡有什麼。</span></span
          >
        </div>
        <div>
          <span class="term">wondered</span>
          <span
            ><NoteMark
              sentence="I wondered what was in the box."
              :marks="['wondered', 'was']"
            /><span class="translation">我那時很好奇盒子裡有什麼。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="was wondering 說出想了一段時間的事" mark="wondered">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'was wondering', role: '過去進行式', kind: 'key' },
          { t: 'where my brother was', kind: 'dim' },
          { t: 'when he walked in.', role: '打斷的事' },
        ]"
      />
      <p class="translation">我正在想我哥哥在哪裡，他就走進來了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
