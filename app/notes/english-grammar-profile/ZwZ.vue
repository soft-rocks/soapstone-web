<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-use-duration-with-since, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="since 接起點，主句用現在完成式" mark="since">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Many things', role: '主詞' },
          { t: 'have changed', role: 'have + 過去分詞', kind: 'key' },
          { t: 'since', role: '從那時候到現在', kind: 'key', ring: true },
          { t: 'your last visit.', role: '起點' },
        ]"
      />
      <p class="translation">自從你上次來過以後，很多事情都變了。</p>
      <p class="remark">表哥三年前來過，下個月又要來。</p>
    </NoteSlide>

    <NoteSlide title="since 後面的起點" mark="your last visit.">
      <div class="rows is-labeled">
        <div>
          <span class="term">時間點</span>
          <span>since 2006、since Monday</span>
        </div>
        <div>
          <span class="term">名詞片語</span>
          <span>since your last visit、since the accident</span>
        </div>
        <div>
          <span class="term">過去簡單式的子句</span>
          <span>since we went out together、since I was a child</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="起點是子句，since 後面用過去簡單式" mark="since">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Anna is my oldest friend.', kind: 'dim' },
          { t: 'I\'ve known her', role: '現在完成式' },
          { t: 'since', kind: 'dim' },
          { t: 'we were at school.', role: '過去簡單式', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">安娜是我最老的朋友。我們從上學的時候就認識了。</p>
    </NoteSlide>

    <NoteSlide title="It's been ... since 說過了多久" mark="since">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Let\'s have dinner in town on Friday.', kind: 'dim' },
          { t: 'It\'s been a long time', role: '過了多久', kind: 'key', ring: true },
          { t: 'since' },
          { t: 'we went out together.', role: '起點', kind: 'dim' },
        ]"
      />
      <p class="translation">我們星期五去城裡吃晚餐吧。我們好久沒一起出去了。</p>
    </NoteSlide>

    <NoteSlide title="從起點到現在，主句用現在完成式" mark="have changed">
      <NoteFix
        wrong="My grandparents live in this village since 2006."
        right="My grandparents have lived in this village since 2006."
        fix="have lived"
      />
    </NoteSlide>

    <NoteSlide title="時間的長度用 for" mark="since">
      <NoteFix
        wrong="Our family has run this hotel since ten years."
        right="Our family has run this hotel for ten years."
        fix="for"
      />
    </NoteSlide>

    <NoteSlide title="since 後面的子句用過去簡單式" mark="your last visit.">
      <NoteFix
        wrong="I've played the piano since I have been six."
        right="I've played the piano since I was six."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="for 接時間的長度，since 接起點" mark="since">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Ask Lily about the new system.', kind: 'dim' },
          { t: 'She\'s worked here', kind: 'dim' },
          { t: 'for', role: '接長度', kind: 'key', ring: true },
          { t: 'six months.', role: '時間的長度' },
        ]"
      />
      <p class="translation">新系統的事去問莉莉。她在這裡工作六個月了。</p>
    </NoteSlide>

    <NoteSlide title="ago 說多久以前，用過去簡單式" mark="since">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I know this town well.', kind: 'dim' },
          { t: 'I', kind: 'dim' },
          { t: 'moved', role: '過去簡單式' },
          { t: 'here', kind: 'dim' },
          { t: 'ten years ago.', role: '多久以前', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我很熟這個小鎮。我十年前搬來這裡。</p>
    </NoteSlide>

    <NoteSlide title="since 在句首接現在的情況，意思是既然" mark="since">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We can\'t play tennis today.', kind: 'dim' },
          { t: 'Since', role: '既然', kind: 'key', ring: true },
          { t: 'it\'s raining,', role: '現在的情況' },
          { t: 'let\'s stay in.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們今天不能打網球了。既然在下雨，我們就待在家吧。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
