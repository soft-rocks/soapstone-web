<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-possibility-1222, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="could 加原形動詞，說現在或未來的可能" mark="could be">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'It', role: '代替後面的 to have ...' },
          { t: 'could', role: '可能', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞', kind: 'key' },
          { t: 'really fun', role: '形容詞' },
          { t: 'to have a talkative person as your friend.', role: '真正的主詞', kind: 'dim' },
        ]"
      />
      <p class="translation">交一個很愛聊天的朋友可能會很有趣。</p>
      <p class="remark">說話者不確定結果會怎樣。</p>
    </NoteSlide>

    <NoteSlide title="could 後面接 be、原形動詞，或 be 加動詞-&#x2060;ing" mark="be">
      <div class="rows is-labeled">
        <div>
          <span class="term">be + 形容詞</span>
          <span
            ><NoteMark sentence="The answer could be wrong." :marks="['be', 'wrong']" /><span
              class="translation"
              >答案可能是錯的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span
            ><NoteMark sentence="Prices could go up next year." :marks="['go up']" /><span
              class="translation"
              >明年物價可能會上漲。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be + 動詞-&#x2060;ing</span>
          <span
            ><NoteMark sentence="He could be sleeping right now." :marks="['be sleeping']" /><span
              class="translation"
              >他現在可能在睡覺。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="問句把 could 放在主詞前面" mark="could">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Could', kind: 'key', ring: true },
          { t: 'the bus', role: '主詞' },
          { t: 'be', role: '原形動詞', kind: 'key' },
          { t: 'late?', role: '形容詞' },
        ]"
      />
      <p class="translation">公車會不會誤點了？</p>
    </NoteSlide>

    <NoteSlide title="could 後面接原形動詞 be，不接 is" mark="be">
      <NoteFix wrong="It could is dangerous." right="It could be dangerous." fix="be" />
    </NoteSlide>

    <NoteSlide title="could 後面直接接原形動詞，不加 to" mark="be">
      <NoteFix wrong="The train could to be late." right="The train could be late." fix="be" />
    </NoteSlide>

    <NoteSlide title="某一件事可能發生，用 could，不用 can" mark="could">
      <NoteFix
        wrong="Take a coat. It can rain later."
        right="Take a coat. It could rain later."
        fix="could"
      />
    </NoteSlide>

    <NoteSlide title="can 說一般的情況，could 說某一件事的可能" mark="could">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Winters in Hokkaido', kind: 'dim' },
          { t: 'can', role: '常常會這樣', kind: 'key', ring: true },
          { t: 'be very cold.', kind: 'dim' },
        ]"
      />
      <p class="translation">北海道的冬天有時候會很冷。</p>
    </NoteSlide>

    <NoteSlide title="couldn't 確定不可能，could 不確定" mark="could">
      <div class="rows is-labeled">
        <div>
          <span class="term">couldn't<br /><i>確定不可能</i></span>
          <span
            ><NoteMark sentence="That couldn't be true." :marks="['couldn\'t']" /><span
              class="translation"
              >那不可能是真的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">could<br /><i>不確定</i></span>
          <span
            ><NoteMark sentence="The answer could be wrong." :marks="['could']" /><span
              class="translation"
              >答案可能是錯的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="could have 加過去分詞說過去，could 加原形動詞說現在或未來" mark="could be">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The keys', kind: 'dim' },
          { t: 'could have fallen', role: 'could have + 過去分詞', kind: 'key', ring: true },
          { t: 'out of the car.', kind: 'dim' },
        ]"
      />
      <p class="translation">鑰匙可能從車上掉出去了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
