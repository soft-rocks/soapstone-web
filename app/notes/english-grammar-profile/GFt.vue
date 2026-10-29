<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-gender-neutral, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="they 回指不定代名詞" mark="they">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'If', kind: 'dim' },
          { t: 'someone', role: '不定代名詞', kind: 'key' },
          { t: 'is watching a film that', kind: 'dim' },
          { t: 'they', role: '回指', kind: 'key' },
          { t: 'don\'t like, …', kind: 'dim' },
        ]"
      />
      <p class="translation">如果有人正在看一部自己不喜歡的電影……</p>
    </NoteSlide>

    <NoteSlide title="不定代名詞" mark="someone">
      <div class="rows is-labeled">
        <div>
          <span class="term">some-</span>
          <span>someone, somebody</span>
        </div>
        <div>
          <span class="term">any-</span>
          <span>anyone, anybody</span>
        </div>
        <div>
          <span class="term">every-</span>
          <span>everyone, everybody</span>
        </div>
        <div>
          <span class="term">no</span>
          <span>no one, nobody</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不定代名詞用單數動詞，they 用複數動詞" mark="is watching">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數動詞</span>
          <span
            ><NoteMark sentence="Someone has left their coat here." :marks="['has']" /><span
              class="translation"
              >有人把外套忘在這裡了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數動詞</span>
          <span
            ><NoteMark
              sentence="If anyone calls, they usually leave a message."
              :marks="['they usually leave']"
            /><span class="translation">如果有人打電話來，對方通常會留言。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="they、them、their、themselves" mark="they">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark
              sentence="If anybody wants a drink, they can help themselves."
              :marks="['they']"
            /><span class="translation">誰想喝飲料都可以自己拿。</span></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark
              sentence="If somebody asks for help, give it to them."
              :marks="['them']"
            /><span class="translation">如果有人需要幫忙，就幫他。</span></span
          >
        </div>
        <div>
          <span class="term">所有格</span>
          <span
            ><NoteMark sentence="Everyone put up their hand." :marks="['their']" /><span
              class="translation"
              >每個人都舉起了手。</span
            ></span
          >
        </div>
        <div>
          <span class="term">反身代名詞</span>
          <span
            ><NoteMark sentence="No one wants to hurt themselves." :marks="['themselves']" /><span
              class="translation"
              >誰都不想讓自己受傷。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="everyone 的動詞用單數" mark="is watching">
      <NoteFix
        wrong="Everyone are waiting for their turn."
        right="Everyone is waiting for their turn."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="當主詞用 they" mark="they">
      <NoteFix
        wrong="If anyone is hungry, them can eat in the kitchen."
        right="If anyone is hungry, they can eat in the kitchen."
        fix="they"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面用 their">
      <NoteFix
        wrong="Nobody remembered to bring they books."
        right="Nobody remembered to bring their books."
        fix="their"
      />
    </NoteSlide>

    <NoteSlide title="it 不回指人">
      <NoteFix
        wrong="If somebody knocks on the door, don't let it in."
        right="If somebody knocks on the door, don't let them in."
        fix="them"
      />
    </NoteSlide>

    <NoteSlide title="反身代名詞是 themselves">
      <NoteFix
        wrong="Anyone can teach theirselves to cook."
        right="Anyone can teach themselves to cook."
        fix="themselves"
      />
    </NoteSlide>

    <NoteSlide title="he or she 比較正式">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'If', kind: 'dim' },
          { t: 'someone', role: '不定代名詞', kind: 'key' },
          { t: 'wants to apply,', kind: 'dim' },
          { t: 'he or she', role: '回指', kind: 'key' },
          { t: 'must fill in this form.', kind: 'dim' },
        ]"
      />
      <p class="translation">有人想申請的話，要填這張表。</p>
    </NoteSlide>

    <NoteSlide title="everyone 指人，every one 指每一個">
      <div class="rows is-labeled">
        <div>
          <span class="term">everyone</span>
          <span
            ><NoteMark
              sentence="Everyone in the class passed the test."
              :marks="['Everyone']"
            /><span class="translation">班上每個人都通過了考試。</span></span
          >
        </div>
        <div>
          <span class="term">every one</span>
          <span
            ><NoteMark
              sentence="I tried the cakes, and every one of them was delicious."
              :marks="['every one of']"
            /><span class="translation">我試吃了那些蛋糕，每一個都很好吃。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
