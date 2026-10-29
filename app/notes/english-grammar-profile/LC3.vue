<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-particle-object, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="名詞受詞可以放在小品詞後面" mark="the letter">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I opened the envelope and', kind: 'dim' },
          { t: 'took', role: '動詞', kind: 'key' },
          { t: 'out', role: '小品詞', kind: 'key' },
          { t: 'the letter.', role: '受詞' },
        ]"
      />
      <p class="translation">我打開信封，把信拿了出來。</p>
      <p class="remark"><code>take out</code> 的意思是拿出來。</p>
    </NoteSlide>

    <NoteSlide title="名詞放在小品詞前後都可以，代名詞只能放在中間" mark="out">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞在後面</span>
          <span
            ><NoteMark sentence="She turned off the phone." :marks="['the phone']" /><span
              class="translation"
              >她把手機關掉。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞在中間</span>
          <span
            ><NoteMark sentence="She turned the phone off." :marks="['the phone']" /><span
              class="translation"
              >她把手機關掉。</span
            ></span
          >
        </div>
        <div>
          <span class="term">代名詞</span>
          <span
            ><NoteMark sentence="She turned it off." :marks="['it']" /><span class="translation"
              >她把它關掉。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞很長時，放在小品詞後面" mark="the letter">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I need to', kind: 'dim' },
          { t: 'pick up', role: '動詞 + 小品詞', kind: 'key' },
          { t: 'the award that I won in the writing contest.', role: '受詞' },
        ]"
      />
      <p class="translation">我得去領我在寫作比賽得的獎。</p>
    </NoteSlide>

    <NoteSlide title="代名詞受詞放在動詞和小品詞中間" mark="took out">
      <NoteFix
        wrong="I found the letter and took out it."
        right="I found the letter and took it out."
        fix="it out"
      />
    </NoteSlide>

    <NoteSlide title="填寫表格是 fill in，in 不能省略" mark="out">
      <NoteFix wrong="Please fill this form." right="Please fill in this form." fix="in" />
    </NoteSlide>

    <NoteSlide title="小品詞後面的動詞用動詞-ing">
      <NoteFix
        wrong="My dad gave up smoke last year."
        right="My dad gave up smoking last year."
        fix="smoking"
      />
    </NoteSlide>

    <NoteSlide title="很長的受詞不放在動詞和小品詞中間" mark="the letter">
      <NoteFix
        wrong="I wrote the name of the hotel where we were staying down."
        right="I wrote down the name of the hotel where we were staying."
        fix="wrote down"
      />
    </NoteSlide>

    <NoteSlide title="介系詞動詞的受詞只能放在介系詞後面，take off 說起飛時沒有受詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">介系詞動詞</span>
          <span
            ><NoteMark sentence="I looked at the letter." :marks="['at the letter']" /><span
              class="translation"
              >我看了那封信。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不及物片語動詞</span>
          <span
            ><NoteMark sentence="The plane took off." :marks="['took off']" /><span
              class="translation"
              >飛機起飛了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
