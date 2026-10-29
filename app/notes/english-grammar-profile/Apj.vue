<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-degree-with-adjectives-107, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="extremely 修飾有程度高低的形容詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It is', role: '形式主詞 + be', kind: 'dim' },
          { t: 'extremely', role: '程度副詞', kind: 'key' },
          { t: 'important', role: '形容詞' },
          { t: 'that the project is finished before September.', role: '真正的主詞', kind: 'dim' },
        ]"
      />
      <p class="translation">這個專案一定要在九月之前完成，這非常重要。</p>
    </NoteSlide>

    <NoteSlide title="highly 和 deeply 常和固定的形容詞一起用" mark="extremely important">
      <div class="rows is-labeled">
        <div>
          <span class="term">highly</span>
          <span
            ><NoteMark
              sentence="She's a highly qualified engineer."
              :marks="['highly qualified']"
            /><span class="translation">她是一位資歷很高的工程師。</span></span
          >
        </div>
        <div>
          <span class="term">deeply</span>
          <span
            ><NoteMark
              sentence="We are deeply grateful for your support."
              :marks="['deeply grateful']"
            /><span class="translation">我們非常感謝你們的支持。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="表示全部或極端的形容詞用 completely、totally、absolutely" mark="extremely">
      <div class="rows is-labeled">
        <div>
          <span class="term">completely</span>
          <span
            ><NoteMark
              sentence="The film is about two completely different men."
              :marks="['completely different']"
            /><span class="translation">那部電影講兩個完全不一樣的男人。</span></span
          >
        </div>
        <div>
          <span class="term">totally</span>
          <span
            ><NoteMark
              sentence="That kind of behaviour is totally unacceptable."
              :marks="['totally unacceptable']"
            /><span class="translation">那種行為完全不能接受。</span></span
          >
        </div>
        <div>
          <span class="term">absolutely</span>
          <span
            ><NoteMark
              sentence="The meal was absolutely delicious."
              :marks="['absolutely delicious']"
            /><span class="translation">那頓飯好吃極了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="really 修飾可分級和極端的形容詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">可分級</span>
          <span
            ><NoteMark
              sentence="The water in the lake was really cold."
              :marks="['really cold']"
            /><span class="translation">湖裡的水真的很冷。</span></span
          >
        </div>
        <div>
          <span class="term">極端</span>
          <span
            ><NoteMark sentence="It's really freezing in here." :marks="['really freezing']" /><span
              class="translation"
              >這裡真的冷死了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="修飾形容詞用副詞 completely">
      <NoteFix
        wrong="The town looks complete different in winter."
        right="The town looks completely different in winter."
        fix="completely"
      />
    </NoteSlide>

    <NoteSlide title="extreme 加 -ly 寫成 extremely" mark="extremely">
      <NoteFix
        wrong="The road to the village is extremly narrow."
        right="The road to the village is extremely narrow."
        fix="extremely"
      />
    </NoteSlide>

    <NoteSlide title="修飾形容詞用 highly，不用 high">
      <NoteFix
        wrong="She is high qualified for the job."
        right="She is highly qualified for the job."
        fix="highly"
      />
    </NoteSlide>

    <NoteSlide title="修飾形容詞用 deeply，不用 deep">
      <NoteFix
        wrong="I'm deep sorry for the delay."
        right="I'm deeply sorry for the delay."
        fix="deeply"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
