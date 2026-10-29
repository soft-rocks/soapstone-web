<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-criticism, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="could have 指出主詞有機會做、卻沒有做的事" mark="could have given">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'For the money they had paid,', role: '批評的理由', kind: 'dim' },
          { t: 'you', role: '主詞（旅行社）' },
          { t: 'could have', role: 'could have', kind: 'key', ring: true },
          { t: 'given', role: '過去分詞', kind: 'key' },
          { t: 'them', role: '間接受詞' },
          { t: 'a better service.', role: '直接受詞' },
        ]"
      />
      <p class="translation">他們付了那麼多錢，你們本來可以給他們更好的服務。</p>
      <p class="remark">旅行社有能力提供更好的服務，卻沒有提供。</p>
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞，或 been 加其他成分" mark="given">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去分詞</span>
          <span
            ><NoteMark sentence="You could have locked the back door." :marks="['locked']" /><span
              class="translation"
              >你本來可以把後門鎖上的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">been + 形容詞</span>
          <span
            ><NoteMark
              sentence="You could have been more honest with me."
              :marks="['been', 'honest']"
            /><span class="translation">你本來可以對我誠實一點。</span></span
          >
        </div>
        <div>
          <span class="term">been + 過去分詞<br /><i>被動</i></span>
          <span
            ><NoteMark
              sentence="The mistake could have been spotted earlier."
              :marks="['been spotted']"
            /><span class="translation">這個錯誤本來可以早一點發現。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="at least 放在 could 後面，或放在過去分詞前面" mark="could have">
      <div class="rows is-labeled">
        <div>
          <span class="term">could at least have</span>
          <span
            ><NoteMark sentence="She could at least have knocked." :marks="['at least']" /><span
              class="translation"
              >她至少可以先敲個門吧。</span
            ></span
          >
        </div>
        <div>
          <span class="term">could have at least</span>
          <span
            ><NoteMark sentence="She could have at least knocked." :marks="['at least']" /><span
              class="translation"
              >她至少可以敲一下門吧。</span
            ></span
          >
        </div>
      </div>
      <p class="remark"><code>at least</code> 表示主詞連最基本的事都沒做。</p>
    </NoteSlide>

    <NoteSlide title="Couldn't you have 的否定疑問句也是批評" mark="could have">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Couldn\'t', role: '否定', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'have parked', role: 'have + 過去分詞', kind: 'key' },
          { t: 'a little closer?', kind: 'dim' },
        ]"
      />
      <p class="translation">你就不能把車停近一點嗎？</p>
      <p class="remark">說話者不是在問問題。</p>
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞，不接過去式" mark="given">
      <NoteFix
        wrong="You could have gave us a discount."
        right="You could have given us a discount."
        fix="given"
      >
        <code>give</code> 的過去式是 <code>gave</code>，過去分詞是 <code>given</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="批評過去沒做的事，could 後面接 have 和過去分詞" mark="could have">
      <NoteFix
        wrong="You could tell me yesterday."
        right="You could have told me yesterday."
        fix="have told"
      />
    </NoteSlide>

    <NoteSlide title="could 後面的動詞用原形，寫 have" mark="have">
      <NoteFix
        wrong="Couldn't you had waited for me?"
        right="Couldn't you have waited for me?"
        fix="have"
      />
    </NoteSlide>

    <NoteSlide title="同樣的 could have，也可以是推測" mark="could have">
      <div class="rows is-labeled">
        <div>
          <span class="term">批評<br /><i>確定沒做</i></span>
          <span
            ><NoteMark
              sentence="You could have told me you were going to be late."
              :marks="['could have told']"
            /><span class="translation">你本來可以跟我說你會晚到。</span></span
          >
        </div>
        <div>
          <span class="term">推測<br /><i>不知道做了什麼</i></span>
          <span
            ><NoteMark
              sentence="He's late. He could have missed the bus."
              :marks="['could have missed']"
            /><span class="translation">他遲到了，他可能是沒趕上公車。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="should have 說主詞做錯了，could have 說主詞有更好的做法" mark="could have">
      <NoteFork
        stem="You"
        :branches="[
          {
            head: 'should have',
            rest: 'told me',
            meaning: '那件事是主詞該做的',
            zh: '你應該跟我說的。',
          },
          {
            head: 'could have',
            rest: 'locked the back door',
            meaning: '主詞有更好的做法可以選',
            zh: '你本來可以把後門鎖上的。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 I 時，could have 表示後悔" mark="could have">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '說話者自己', kind: 'key', ring: true },
          { t: 'could have studied', role: 'could have + 過去分詞' },
          { t: 'harder.', kind: 'dim' },
        ]"
      />
      <p class="translation">我本來可以更用功一點的。</p>
      <p class="remark">這句不是批評別人。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
