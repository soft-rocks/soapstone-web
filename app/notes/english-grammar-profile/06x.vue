<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// prepositions-form-simple-843, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="via 說明透過什麼方式">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I hate', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'shopping', role: '受詞', kind: 'dim' },
          { t: 'via', role: '介系詞', kind: 'key' },
          { t: 'the internet.', role: '名詞片語' },
        ]"
      />
      <p class="translation">我很討厭在網路上買東西。</p>
    </NoteSlide>

    <NoteSlide title="via 和 through 說方法和途徑" mark="via">
      <div class="rows is-labeled">
        <div>
          <span class="term">via<br /><i>經由、透過</i></span>
          <span
            ><NoteMark sentence="We flew to London via Dubai." :marks="['via Dubai']" /><span
              class="translation"
              >我們經過杜拜飛到倫敦。</span
            ></span
          >
        </div>
        <div>
          <span class="term">through<br /><i>穿過、透過</i></span>
          <span
            ><NoteMark
              sentence="I found this job through my cousin."
              :marks="['through my cousin']"
            /><span class="translation">我是透過我表哥找到這份工作的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="within、throughout 和 beyond 說範圍和時間" mark="via">
      <div class="rows is-labeled">
        <div>
          <span class="term">within<br /><i>在……之內</i></span>
          <span>within ten minutes, within the city</span>
        </div>
        <div>
          <span class="term">throughout<br /><i>在整段時間或整個地方</i></span>
          <span
            ><NoteMark
              sentence="The shop is open throughout the holidays."
              :marks="['throughout the holidays']"
            /><span class="translation">那家店整個假期都有開。</span></span
          >
        </div>
        <div>
          <span class="term">beyond<br /><i>超出、在……另一邊</i></span>
          <span>beyond the mountains</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="towards、beside、among 和 against 說方向和位置" mark="via">
      <div class="rows is-labeled">
        <div>
          <span class="term">towards<br /><i>朝向</i></span>
          <span>towards the sea</span>
        </div>
        <div>
          <span class="term">beside<br /><i>在……旁邊</i></span>
          <span>beside the lake</span>
        </div>
        <div>
          <span class="term">among<br /><i>在三個以上之中</i></span>
          <span>among the trees</span>
        </div>
        <div>
          <span class="term">against<br /><i>靠著、反對</i></span>
          <span>against the wall</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="despite 和 unlike 說對比" mark="via">
      <div class="rows is-labeled">
        <div>
          <span class="term">despite<br /><i>儘管</i></span>
          <span
            ><NoteMark
              sentence="We went out despite the cold."
              :marks="['despite the cold']"
            /><span class="translation">儘管天氣冷，我們還是出門了。</span></span
          >
        </div>
        <div>
          <span class="term">unlike<br /><i>跟……不一樣</i></span>
          <span>unlike my sister</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="despite 後面直接接名詞片語，不加 of">
      <NoteFix
        wrong="We played despite of the rain."
        right="We played despite the rain."
        fix="despite the rain"
      />
    </NoteSlide>

    <NoteSlide title="兩個之間用 between，among 用在三個以上">
      <NoteFix
        wrong="The ball fell among the two cars."
        right="The ball fell between the two cars."
        fix="between"
      />
    </NoteSlide>

    <NoteSlide title="within 接一段時間，時間點用 by">
      <NoteFix wrong="Please reply within Friday." right="Please reply by Friday." fix="by" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
