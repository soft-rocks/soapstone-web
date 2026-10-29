<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-new-subject-ing-form, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="新的主詞是做動詞-ing 那件事的人">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Would', kind: 'dim' },
          { t: 'you', role: '主詞' },
          { t: 'mind', role: '動詞' },
          { t: 'me', role: '新的主詞', kind: 'key' },
          { t: 'staying', role: '動詞-ing', kind: 'key' },
          { t: 'in your flat again?', kind: 'dim' },
        ]"
      />
      <p class="translation">你介意我再借住一次你的公寓嗎？</p>
      <p class="remark">要住公寓的人是 <code>me</code>，不是 <code>you</code>。</p>
    </NoteSlide>

    <NoteSlide title="新的主詞可以是受格代名詞、名詞或所有格" mark="me">
      <div class="rows is-labeled">
        <div>
          <span class="term">受格代名詞</span>
          <span
            ><NoteMark sentence="I don't mind him coming with us." :marks="['him']" /><span
              class="translation"
              >我不介意他跟我們一起去。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark sentence="I can't stand people shouting at me." :marks="['people']" /><span
              class="translation"
              >我受不了有人對我大吼。</span
            ></span
          >
        </div>
        <div>
          <span class="term">所有格<br /><i>正式</i></span>
          <span
            ><NoteMark
              sentence="I hope you don't mind my writing to you again."
              :marks="['my']"
            /><span class="translation">希望您不介意我再次寫信給您。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="沒有新的主詞時，做事的人是句子的主詞" mark="me">
      <div class="rows is-labeled">
        <div>
          <span class="term">沒有新的主詞</span>
          <span
            ><NoteMark sentence="I don't mind waiting for the bus." :marks="['I']" /><span
              class="translation"
              >我不介意等公車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">有新的主詞</span>
          <span
            ><NoteMark sentence="I don't mind you waiting in my office." :marks="['you']" /><span
              class="translation"
              >我不介意你在我辦公室等。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="新的主詞是代名詞時用受格" mark="me">
      <NoteFix
        wrong="Would you mind I bring my dog to the picnic?"
        right="Would you mind me bringing my dog to the picnic?"
        fix="me bringing"
      />
    </NoteSlide>

    <NoteSlide title="新的主詞後面接動詞-ing" mark="staying">
      <NoteFix
        wrong="I can't imagine my dad dance."
        right="I can't imagine my dad dancing."
        fix="dancing"
      />
    </NoteSlide>

    <NoteSlide title="mind 後面的新的主詞不接不定詞" mark="staying">
      <NoteFix
        wrong="She doesn't mind her son to play games."
        right="She doesn't mind her son playing games."
        fix="playing"
      />
    </NoteSlide>

    <NoteSlide title="說別人做的事，要寫出新的主詞" mark="me">
      <NoteFix
        wrong="My boss doesn't mind leaving early on Fridays."
        right="My boss doesn't mind me leaving early on Fridays."
        fix="me"
      >
        想說老闆不介意我早走。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="感官動詞的受詞接動詞-ing，說正在進行的事" mark="mind">
      <NoteMark
        sentence="I saw my sister talking to the head teacher."
        :marks="['saw', 'talking']"
      />
      <p class="translation">我看到我姊姊在跟校長說話。</p>
    </NoteSlide>

    <NoteSlide title="want 後面的人接不定詞" mark="mind">
      <NoteMark sentence="I want you to stay for dinner." :marks="['want', 'to stay']" />
      <p class="translation">我要你留下來吃晚餐。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
