<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-negative-questions, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="haven't 放在主詞前面，表示說話者覺得意外" mark="Haven't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Haven\'t', role: '句首', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'seen', role: '過去分詞', kind: 'key' },
          { t: 'it', role: '受詞' },
          { t: 'yet?', role: '早該發生', kind: 'dim' },
        ]"
      />
      <p class="translation">你還沒看過嗎？</p>
      <p class="remark">說話者以為朋友早就看過那部電影了。</p>
    </NoteSlide>

    <NoteSlide title="疑問詞放在 haven't 前面" mark="Haven't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Your mum is waiting by the phone.', kind: 'dim' },
          { t: 'Why', role: '疑問詞', kind: 'key', ring: true },
          { t: 'haven\'t', role: '否定' },
          { t: 'you', role: '主詞' },
          { t: 'called her?', kind: 'dim' },
        ]"
      />
      <p class="translation">你媽媽在電話旁邊等。你為什麼還沒打給她？</p>
    </NoteSlide>

    <NoteSlide title="否定疑問句的用法" mark="Haven't">
      <div class="rows is-labeled">
        <div>
          <span class="term">驚訝</span>
          <span
            ><NoteMark
              sentence="Haven't you finished yet? It's been three hours!"
              :marks="['Haven\'t']"
            /><span class="translation">你還沒做完嗎？已經三個小時了！</span></span
          >
        </div>
        <div>
          <span class="term">確認想法</span>
          <span
            ><NoteMark
              sentence="Your face looks familiar. Haven't we met before?"
              :marks="['Haven\'t']"
            /><span class="translation">你看起來很面熟。我們以前是不是見過？</span></span
          >
        </div>
        <div>
          <span class="term">提醒對方</span>
          <span
            ><NoteMark
              sentence="Haven't you forgotten something? Your keys are still on the table."
              :marks="['Haven\'t']"
            /><span class="translation">你是不是忘了什麼？你的鑰匙還在桌上。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="回答照事實，沒做過用 No" mark="Haven't">
      <NoteMark
        sentence="Everyone is talking about the new Spider-Man film. Haven't you seen it yet? — No, I haven't."
        :marks="['No, I haven\'t.']"
      />
      <p class="translation">大家都在聊新的蜘蛛人電影。你還沒看過嗎？對，還沒看。</p>
    </NoteSlide>

    <NoteSlide title="主詞後面接過去分詞" mark="seen">
      <NoteFix
        wrong="Haven't you see the new teacher yet?"
        right="Haven't you seen the new teacher yet?"
        fix="seen"
      />
    </NoteSlide>

    <NoteSlide title="不縮寫時，not 放在主詞後面" mark="Haven't">
      <NoteFix
        wrong="Have not you checked the train times for Sunday?"
        right="Have you not checked the train times for Sunday?"
        fix="you not"
      />
    </NoteSlide>

    <NoteSlide title="沒吃就回答 No, I haven't" mark="Haven't">
      <NoteFix
        wrong="Haven't you eaten lunch? — Yes, I haven't."
        right="Haven't you eaten lunch? — No, I haven't."
        fix="No,"
      />
    </NoteSlide>

    <NoteSlide title="一般問句不帶預期" mark="Haven't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'There\'s a new film at the cinema.', kind: 'dim' },
          { t: 'Have', role: '肯定', kind: 'key', ring: true },
          { t: 'you seen it?', kind: 'dim' },
        ]"
      />
      <p class="translation">電影院有一部新電影。你看過了嗎？</p>
    </NoteSlide>

    <NoteSlide title="有過去的時間，用 didn't" mark="Haven't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The match was on TV.', kind: 'dim' },
          { t: 'Didn\'t', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'you see it' },
          { t: 'last night?', role: '過去的時間' },
        ]"
      />
      <p class="translation">比賽有電視轉播。你昨晚沒看嗎？</p>
    </NoteSlide>

    <NoteSlide title="附加問句先說想法，再請對方確認" mark="Haven't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You know the ending of that film.', kind: 'dim' },
          { t: 'You\'ve seen it,', role: '想法', kind: 'dim' },
          { t: 'haven\'t you?', role: '附加問句', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">你知道那部電影的結局。你看過了，對吧？</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
