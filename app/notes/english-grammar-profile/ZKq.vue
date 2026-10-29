<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-make-let-infinitive-without-to, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="make 的受詞後面接原形動詞，不加 to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'She', role: '主詞', kind: 'dim' },
          { t: 'makes', role: 'make', kind: 'key' },
          { t: 'me', role: '受詞' },
          { t: 'smile', role: '原形動詞', kind: 'key' },
          { t: 'when I\'m sad.', role: '時間子句', kind: 'dim' },
        ]"
      />
      <p class="translation">我難過的時候，她總能讓我笑出來。</p>
    </NoteSlide>

    <NoteSlide title="make 是讓人做，let 是允許人做" mark="makes">
      <div class="rows is-labeled">
        <div>
          <span class="term">make<br /><i>不想做</i></span>
          <span
            ><NoteMark sentence="My boss made me work late." :marks="['made', 'work']" /><span
              class="translation"
              >我老闆叫我加班。</span
            ></span
          >
        </div>
        <div>
          <span class="term">let<br /><i>允許</i></span>
          <span
            ><NoteMark
              sentence="My parents let me go to the concert."
              :marks="['let', 'go']"
            /><span class="translation">我爸媽讓我去聽演唱會。</span></span
          >
        </div>
        <div>
          <span class="term">let<br /><i>讓人能夠</i></span>
          <span
            ><NoteMark
              sentence="This app lets you pay with your phone."
              :marks="['lets', 'pay']"
            /><span class="translation">這個應用程式讓你可以用手機付錢。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Let me know 請對方告訴自己，Let's 提議一起做" mark="me">
      <div class="rows is-labeled">
        <div>
          <span class="term">Let me know</span>
          <span
            ><NoteMark
              sentence="Let me know if Friday is OK for you."
              :marks="['Let me know']"
            /><span class="translation">星期五你方便的話跟我說一聲。</span></span
          >
        </div>
        <div>
          <span class="term">Let's</span>
          <span
            ><NoteMark sentence="Let's go for a walk." :marks="['Let\'s go']" /><span
              class="translation"
              >我們去散步吧。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="make 的受詞後面不加 to" mark="smile">
      <NoteFix
        wrong="That joke made everyone to laugh."
        right="That joke made everyone laugh."
        fix="laugh"
      />
    </NoteSlide>

    <NoteSlide title="let 的受詞後面接原形動詞，不接動詞-ing" mark="smile">
      <NoteFix
        wrong="My parents let me going out on Saturdays."
        right="My parents let me go out on Saturdays."
        fix="go"
      />
    </NoteSlide>

    <NoteSlide title="時態只標在 make 上" mark="makes">
      <NoteFix
        wrong="The teacher made us stayed after class."
        right="The teacher made us stay after class."
        fix="stay"
      />
    </NoteSlide>

    <NoteSlide title="let 的過去式和原形一樣">
      <NoteFix
        wrong="They letted us use the kitchen."
        right="They let us use the kitchen."
        fix="let"
      />
    </NoteSlide>

    <NoteSlide title="被動的 make 和 allow 後面要加 to" mark="smile">
      <div class="rows is-labeled">
        <div>
          <span class="term">被動的 make</span>
          <span
            ><NoteMark
              sentence="I was made to wait for two hours."
              :marks="['made to wait']"
            /><span class="translation">我被迫等了兩個小時。</span></span
          >
        </div>
        <div>
          <span class="term">allow</span>
          <span
            ><NoteMark
              sentence="The school allows students to use the library at lunch."
              :marks="['to use']"
            /><span class="translation">學校准許學生午餐時間使用圖書館。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="make 的受詞後面也可以接形容詞" mark="smile">
      <NoteMark sentence="The sunny weather made the beach busy." :marks="['busy']" />
      <p class="translation">晴朗的天氣讓海灘很熱鬧。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
