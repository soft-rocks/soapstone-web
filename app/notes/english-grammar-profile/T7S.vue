<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-reported-speech-1234, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="引述動詞是過去式，原話的 can 改成 could" mark="could">
      <div class="rows is-labeled">
        <div>
          <span class="term">原話</span>
          <span
            ><NoteMark sentence="I can put you up if you want." :marks="['can', 'want']" /><span
              class="translation"
              >你願意的話，我可以讓你住我家。</span
            ></span
          >
        </div>
        <div>
          <span class="term">轉述</span>
          <span
            ><NoteMark
              sentence="The woman said she could put me up if I wanted."
              :marks="['said', 'could', 'wanted']"
            /><span class="translation">那位女士說，如果我願意，她可以讓我借住她家。</span></span
          >
        </div>
      </div>
      <p class="remark">
        女士說的 <code>I</code> 和 <code>you</code>，轉述時改成 <code>she</code> 和
        <code>me</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="told 後面接聽話的人，said 後面不接" mark="said">
      <NoteFork
        stem="She"
        :branches="[
          {
            head: 'said',
            rest: 'she could pick us up',
            meaning: '後面直接接轉述內容',
            zh: '她說她可以到車站接我們。',
          },
          {
            head: 'told me',
            rest: 'she could help with the move',
            meaning: '後面先接聽話的人',
            zh: '她跟我說她可以幫忙搬家。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="原話是 can't，轉述寫 couldn't" mark="could">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'She said', role: '引述動詞', kind: 'dim' },
          { t: 'she', role: '主詞' },
          { t: 'couldn\'t', role: '原話是 can\'t', kind: 'key', ring: true },
          { t: 'find her keys.', role: '原形動詞' },
        ]"
      />
      <p class="translation">她說她找不到她的鑰匙。</p>
    </NoteSlide>

    <NoteSlide title="轉述問句用 asked if，could 放在主詞後面" mark="could">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He asked', role: '引述動詞', kind: 'dim' },
          { t: 'if', role: 'if 或 whether', kind: 'key' },
          { t: 'he', role: '主詞' },
          { t: 'could', role: 'could', kind: 'key', ring: true },
          { t: 'open the window.', role: '原形動詞' },
        ]"
      />
      <p class="translation">他問能不能開窗。</p>
      <p class="remark">原話是 <code>Can I open the window?</code>。句尾不用問號。</p>
    </NoteSlide>

    <NoteSlide title="explained、admitted、promised 後面也接 could" mark="said">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'She', kind: 'dim' },
          {
            t: 'explained',
            role: '引述動詞',
            kind: 'key',
            ring: true,
            alts: ['admitted', 'promised'],
          },
          { t: 'that she could only stay', role: 'that + 主詞 + could' },
          { t: 'for an hour.', kind: 'dim' },
        ]"
      />
      <p class="translation">她解釋說她只能待一個小時。</p>
    </NoteSlide>

    <NoteSlide title="could 後面接原形動詞，不接過去式" mark="put">
      <NoteFix
        wrong="He said he could came with us."
        right="He said he could come with us."
        fix="come"
      />
    </NoteSlide>

    <NoteSlide title="could 後面直接接原形動詞，不加 to" mark="could">
      <NoteFix
        wrong="She told me she could to help."
        right="She told me she could help."
        fix="help"
      />
    </NoteSlide>

    <NoteSlide title="asked if 後面的主詞放在 could 前面" mark="she could">
      <NoteFix
        wrong="He asked if could he use the phone."
        right="He asked if he could use the phone."
        fix="he could"
      />
    </NoteSlide>

    <NoteSlide title="told 後面要接聽話的人" mark="said">
      <NoteFix wrong="She told she could drive." right="She told me she could drive." fix="told me">
        不寫聽話的人，就用 <code>said</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="原話說的事到現在還成立，can 可以不改" mark="could">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He said', kind: 'dim' },
          { t: 'he', role: '主詞' },
          { t: 'can', role: 'can 或 could', kind: 'key', ring: true },
          { t: 'meet us', role: '原形動詞' },
          { t: 'on Friday.', role: '還沒到' },
        ]"
      />
      <p class="translation">他說他星期五可以跟我們碰面。</p>
    </NoteSlide>

    <NoteSlide title="不是轉述的 could 說的是過去的能力" mark="could">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She', kind: 'dim' },
          { t: 'could swim', role: '過去的能力', kind: 'key', ring: true },
          { t: 'when she was five.', kind: 'dim' },
        ]"
      />
      <p class="translation">她五歲就會游泳了。</p>
    </NoteSlide>

    <NoteSlide title="原話是 will 轉述成 would，原話是 can 才轉述成 could" mark="could">
      <div class="rows is-labeled">
        <div>
          <span class="term">will → would</span>
          <span
            ><NoteMark sentence="He said he would call me later." :marks="['would']" /><span
              class="translation"
              >他說他晚點會打給我。</span
            ></span
          >
        </div>
        <div>
          <span class="term">can → could</span>
          <span
            ><NoteMark
              sentence="The woman said she could put me up if I wanted."
              :marks="['could']"
            /><span class="translation">那位女士說，如果我願意，她可以讓我借住她家。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
