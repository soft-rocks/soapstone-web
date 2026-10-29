<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-auxiliary-verbs-have-and-do, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="did 表示過去，後面的動詞用原形">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Why', role: '疑問詞', kind: 'dim' },
          { t: 'didn\'t', role: '助動詞 do 的否定', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'come', role: '原形動詞', kind: 'key' },
          { t: 'to my birthday party?', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">你為什麼沒來我的生日派對？</p>
    </NoteSlide>

    <NoteSlide title="助動詞 have 加過去分詞組成現在完成式" mark="didn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">肯定</span>
          <span
            ><NoteMark
              sentence="I have left my suitcase at your house."
              :marks="['have', 'left']"
            /><span class="translation">我把行李箱留在你家了。</span></span
          >
        </div>
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark
              sentence="I haven't emailed you in a long time."
              :marks="['haven\'t', 'emailed']"
            /><span class="translation">我很久沒寫電子郵件給你了。</span></span
          >
        </div>
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark
              sentence="Have you finished your homework?"
              :marks="['Have', 'finished']"
            /><span class="translation">你功課寫完了嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="助動詞 do 用在一般動詞的否定、問句和簡答" mark="didn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark sentence="She doesn't eat meat." :marks="['doesn\'t', 'eat']" /><span
              class="translation"
              >她不吃肉。</span
            ></span
          >
        </div>
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Did you buy a new phone?" :marks="['Did', 'buy']" /><span
              class="translation"
              >你買了新手機嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">簡答</span>
          <span
            ><NoteMark sentence='"Do you like it?" "Yes, I do."' :marks="['I do']" /><span
              class="translation"
              >「你喜歡嗎？」「喜歡。」</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="do、does、did 可以代替前面說過的動詞" mark="didn't">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I thought I wouldn\'t', kind: 'dim' },
          { t: 'find', role: '前面的動詞', kind: 'key' },
          { t: 'nice clothes,', kind: 'dim' },
          { t: 'but I', kind: 'dim' },
          { t: 'did.', role: '代替 found', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我以為我找不到好看的衣服，結果找到了。</p>
    </NoteSlide>

    <NoteSlide title="did 後面的動詞用原形，不用過去式" mark="come">
      <NoteFix
        wrong="Why didn't you came to my party?"
        right="Why didn't you come to my party?"
        fix="come"
      />
    </NoteSlide>

    <NoteSlide title="主詞是單數名詞，用 doesn't" mark="didn't">
      <NoteFix
        wrong="My brother don't like fish."
        right="My brother doesn't like fish."
        fix="doesn't"
      />
    </NoteSlide>

    <NoteSlide title="does 後面的動詞不加 -s" mark="come">
      <NoteFix wrong="Does she lives near here?" right="Does she live near here?" fix="live" />
    </NoteSlide>

    <NoteSlide title="助動詞 have 後面接過去分詞">
      <NoteFix
        wrong="I have saw that film twice."
        right="I have seen that film twice."
        fix="seen"
      />
    </NoteSlide>

    <NoteSlide title="一般動詞的問句，把 do 放在主詞前面" mark="didn't">
      <NoteFix wrong="You like shopping?" right="Do you like shopping?" fix="Do" />
    </NoteSlide>

    <NoteSlide title="have 和 do 後面沒有別的動詞時，是一般動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">have<br /><i>有</i></span>
          <span
            ><NoteMark sentence="I have two sisters." :marks="['have']" /><span class="translation"
              >我有兩個姊姊。</span
            ></span
          >
        </div>
        <div>
          <span class="term">do<br /><i>做</i></span>
          <span
            ><NoteMark sentence="I do my homework after dinner." :marks="['do']" /><span
              class="translation"
              >我吃完晚餐寫功課。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
