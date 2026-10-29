<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-use-seeking-agreement, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="附加問句請對方確認說話者覺得是真的事">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'You love books,', role: '直述句' },
          { t: 'don\'t you?', role: '附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">你很愛書，對吧？</p>
      <p class="remark">說話者預期對方回答 <code>yes</code>。</p>
    </NoteSlide>

    <NoteSlide title="否定疑問句也用來請對方同意" mark="don't you">
      <div class="rows is-labeled">
        <div>
          <span class="term">Isn't it</span>
          <span
            ><NoteMark sentence="Isn't the new bridge impressive?" :marks="['Isn\'t']" /><span
              class="translation"
              >新橋是不是很壯觀？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Don't you think</span>
          <span
            ><NoteMark
              sentence="Don't you think the music is a bit loud?"
              :marks="['Don\'t you think']"
            /><span class="translation">你不覺得音樂有點大聲嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="請對方同意時語調下降，確認一件事時語調上揚" mark="don't you">
      <div class="rows is-labeled">
        <div>
          <span class="term">請對方同意<br /><i>語調下降</i></span>
          <span
            ><NoteMark
              sentence="Your sister looks happy in her new job, doesn't she?"
              :marks="['doesn\'t she']"
            /><span class="translation">你姊姊做新工作看起來很開心，對吧？</span></span
          >
        </div>
        <div>
          <span class="term">確認一件事<br /><i>語調上揚</i></span>
          <span
            ><NoteMark
              sentence="The museum closes at five, doesn't it?"
              :marks="['doesn\'t it']"
            /><span class="translation">博物館五點關門，對吧？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="回答否定疑問句時，yes 和 no 跟著事實走">
      <div class="rows is-labeled">
        <div>
          <span class="term">事實是熱</span>
          <span
            ><NoteMark
              sentence='"Isn&apos;t it hot in here?" "Yes, it&apos;s boiling."'
              :marks="['Yes']"
            /><span class="translation">「這裡不是很熱嗎？」「對啊，熱死了。」</span></span
          >
        </div>
        <div>
          <span class="term">事實是沒帶</span>
          <span
            ><NoteMark
              sentence='"Didn&apos;t you bring an umbrella?" "No, I left it at home."'
              :marks="['No']"
            /><span class="translation">「你沒帶傘嗎？」「沒有，我放在家裡了。」</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="事實是餓，就回答 yes">
      <NoteFix
        wrong='"Aren&apos;t you hungry?" "No, I&apos;m starving."'
        right='"Aren&apos;t you hungry?" "Yes, I&apos;m starving."'
        fix="Yes"
      />
    </NoteSlide>

    <NoteSlide title="附加問句的助動詞和代名詞要對應直述句" mark="don't you">
      <NoteFix
        wrong="Your brother works in a bank, isn't it?"
        right="Your brother works in a bank, doesn't he?"
        fix="doesn't he"
      />
    </NoteSlide>

    <NoteSlide title="Don't you think 後面的子句用肯定的形式">
      <NoteFix
        wrong="Don't you think the lake isn't lovely?"
        right="Don't you think the lake is lovely?"
        fix="is"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
