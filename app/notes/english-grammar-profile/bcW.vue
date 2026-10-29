<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-with-subordinating-conjunctions, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="子句和主句都用過去簡單式" mark="got">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'Once', role: '從屬連接詞', kind: 'key' },
          { t: 'he', role: '子句的主詞' },
          { t: 'got inside,', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'he started searching for clues.', role: '主句', kind: 'dim' },
        ]"
      />
      <p class="translation">他一進去，就開始找線索。</p>
      <p class="remark">說話者在講偵探小說的情節。</p>
    </NoteSlide>

    <NoteSlide title="說出時間" mark="Once">
      <div class="rows is-labeled">
        <div>
          <span class="term">when</span>
          <span
            ><NoteMark sentence="My mother cried when she heard the news." :marks="['when']"
          /></span>
        </div>
        <div>
          <span class="term">while</span>
          <span
            ><NoteMark sentence="While I lived in Osaka, I learned to cook." :marks="['While']"
          /></span>
        </div>
        <div>
          <span class="term">before</span>
          <span
            ><NoteMark sentence="I checked the windows before I left." :marks="['before']"
          /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="一發生就接著發生" mark="Once">
      <div class="rows is-labeled">
        <div>
          <span class="term">as soon as</span>
          <span
            ><NoteMark sentence="I called you as soon as I heard." :marks="['as soon as']" /><span
              class="translation"
              >我一聽到消息就打給你了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">once</span>
          <span
            ><NoteMark sentence="Once the guests left, we cleaned up." :marks="['Once']" /><span
              class="translation"
              >客人一走，我們就收拾乾淨。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說出條件、原因和結果" mark="Once">
      <div class="rows is-labeled">
        <div>
          <span class="term">條件</span>
          <span><NoteMark sentence="If it rained, we played cards." :marks="['If']" /></span>
        </div>
        <div>
          <span class="term">原因</span>
          <span><NoteMark sentence="Since it was late, we took a taxi." :marks="['Since']" /></span>
        </div>
        <div>
          <span class="term">結果</span>
          <span><NoteMark sentence="I was tired, so I went to bed." :marks="['so']" /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="子句也用過去式" mark="got">
      <NoteFix
        wrong="When I arrive at the station, I called my mother."
        right="When I arrived at the station, I called my mother."
        fix="arrived"
      />
    </NoteSlide>

    <NoteSlide title="since 的主句用現在完成式" mark="got">
      <NoteFix
        wrong="I lived here since I moved to Taipei."
        right="I have lived here since I moved to Taipei."
        fix="have lived"
      />
    </NoteSlide>

    <NoteSlide title="until 的子句用肯定句" mark="got">
      <NoteFix
        wrong="We didn't leave until the film didn't finish."
        right="We didn't leave until the film finished."
        fix="finished"
      />
    </NoteSlide>

    <NoteSlide title="so 放在原因後面" mark="Once">
      <NoteFix
        wrong="So it was late, we went home."
        right="It was late, so we went home."
        fix="so"
      />
    </NoteSlide>

    <NoteSlide title="since 說出時間和原因" mark="Once">
      <div class="rows is-labeled">
        <div>
          <span class="term">時間</span>
          <span
            ><NoteMark
              sentence="We haven't spoken since we had that argument."
              :marks="['haven\'t spoken', 'since']"
            /><span class="translation">那次吵架以後，我們就沒說過話了。</span></span
          >
        </div>
        <div>
          <span class="term">原因</span>
          <span
            ><NoteMark
              sentence="Since nobody answered the door, I left the parcel with a neighbour."
              :marks="['Since', 'left']"
            /><span class="translation">因為沒人應門，我就把包裹交給鄰居了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="when 和 while" mark="Once">
      <div class="rows is-labeled">
        <div>
          <span class="term">when</span>
          <span
            ><NoteMark sentence="When the phone rang, I answered it." :marks="['When']" /><span
              class="translation"
              >電話響的時候，我接了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">while</span>
          <span
            ><NoteMark
              sentence="While I cooked dinner, my brother set the table."
              :marks="['While']"
            /><span class="translation">我做晚餐的時候，我弟弟擺好了餐具。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
