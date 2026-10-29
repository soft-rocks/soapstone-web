<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-with-adverbs-828, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="句中副詞放在 have 和過去分詞中間" mark="always">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'ve', role: '主詞 + have' },
          { t: 'always', role: '句中副詞', kind: 'key', ring: true },
          { t: 'loved', role: '過去分詞', kind: 'key' },
          { t: 'seafood.', role: '受詞' },
        ]"
      />
      <p class="translation">我一直都很愛吃海鮮。</p>
      <p class="remark">說話者從小到現在都愛吃海鮮。</p>
    </NoteSlide>

    <NoteSlide title="現在完成式常用的句中副詞" mark="always">
      <div class="rows is-labeled">
        <div>
          <span class="term">頻率</span>
          <span
            ><NoteMark sentence="I've never tried sushi." :marks="['never']" /><span
              class="translation"
              >我從來沒吃過壽司。</span
            ></span
          >
        </div>
        <div>
          <span class="term">時間</span>
          <span
            ><NoteMark
              sentence="We've looked at twenty houses. We've finally found one we like."
              :marks="['finally']"
            /><span class="translation">我們看了二十間房子。我們終於找到一間喜歡的了。</span></span
          >
        </div>
        <div>
          <span class="term">程度</span>
          <span
            ><NoteMark sentence="I've nearly finished the report." :marks="['nearly']" /><span
              class="translation"
              >報告我快寫完了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">確定的程度</span>
          <span
            ><NoteMark
              sentence="Look at the man in the red coat. I've definitely seen him before."
              :marks="['definitely']"
            /><span class="translation">你看那個穿紅外套的男人。我確定以前見過他。</span></span
          >
        </div>
        <div>
          <span class="term">附加</span>
          <span
            ><NoteMark sentence="I've also invited your sister." :marks="['also']" /><span
              class="translation"
              >我也邀了你妹妹。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定句：probably、certainly 放在 hasn't 前面" mark="always">
      <div class="rows is-labeled">
        <div>
          <span class="term">hasn't 後面</span>
          <span
            ><NoteMark
              sentence="My aunt moved to this town ten years ago. She hasn't always lived here."
              :marks="['hasn\'t', 'always']"
            /><span class="translation"
              >我阿姨十年前搬來這個小鎮。她不是一直都住在這裡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">hasn't 前面</span>
          <span
            ><NoteMark
              sentence="Don't mention the wedding to Tom yet. He probably hasn't heard the news."
              :marks="['probably', 'hasn\'t']"
            /><span class="translation">先別跟湯姆提婚禮的事。他可能還沒聽到消息。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="問句的副詞放在主詞後面" mark="always">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My cousin is getting married in Rio.', kind: 'dim' },
          { t: 'Have', role: '句首' },
          { t: 'you', role: '主詞' },
          { t: 'ever', role: '句中副詞', kind: 'key', ring: true },
          { t: 'been', role: '過去分詞' },
          { t: 'to Brazil?', kind: 'dim' },
        ]"
      />
      <p class="translation">我表姊要在里約結婚。你去過巴西嗎？</p>
    </NoteSlide>

    <NoteSlide title="副詞不放在 have 前面" mark="I've always">
      <NoteFix
        wrong="I always have loved seafood."
        right="I've always loved seafood."
        fix="I've always"
      />
    </NoteSlide>

    <NoteSlide title="nearly 放在 has 和 finished 中間" mark="always">
      <NoteFix
        wrong="My daughter has finished nearly the Harry Potter book."
        right="My daughter has nearly finished the Harry Potter book."
        fix="nearly"
      />
    </NoteSlide>

    <NoteSlide title="否定句的 probably 放在 hasn't 前面" mark="always">
      <NoteFix
        wrong="The manager hasn't probably seen your report yet."
        right="The manager probably hasn't seen your report yet."
        fix="probably"
      />
    </NoteSlide>

    <NoteSlide title="already 可以放在句尾，always 不行" mark="always">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Can I go out and play now?', kind: 'dim' },
          { t: 'I\'ve finished my homework', kind: 'dim' },
          { t: 'already.', role: '句尾', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我現在可以出去玩嗎？我功課已經寫完了。</p>
    </NoteSlide>

    <NoteSlide title="現在簡單式的句中副詞放在動詞前面" mark="always">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Let\'s go to the fish market.', kind: 'dim' },
          { t: 'I', kind: 'dim' },
          { t: 'always', role: '句中副詞', kind: 'key', ring: true },
          { t: 'eat', role: '動詞' },
          { t: 'fish on Fridays.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們去魚市場吧。我星期五都吃魚。</p>
    </NoteSlide>

    <NoteSlide title="be 動詞的句中副詞放在 be 後面" mark="always">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Don\'t wait for Lucy.', kind: 'dim' },
          { t: 'She', kind: 'dim' },
          { t: 'is', role: 'be 動詞' },
          { t: 'always', role: '句中副詞', kind: 'key', ring: true },
          { t: 'late.', kind: 'dim' },
        ]"
      />
      <p class="translation">不用等露西。她總是遲到。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
