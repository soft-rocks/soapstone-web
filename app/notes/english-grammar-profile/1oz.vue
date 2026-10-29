<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-ability-1218, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="could 加原形動詞，說主詞在過去做得到的事" mark="could hear">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She', role: '主詞' },
          { t: 'could', role: '過去的能力', kind: 'key', ring: true },
          { t: 'hear', role: '感官動詞', kind: 'key' },
          { t: 'a man', role: '受詞' },
          { t: 'talking.', role: '動詞-ing' },
        ]"
      />
      <p class="translation">她聽得到有個男人在說話。</p>
      <p class="remark">故事接著寫，那個男人在對她下命令。</p>
    </NoteSlide>

    <NoteSlide title="could 常接 see、smell、feel 這類感官動詞" mark="hear">
      <div class="rows is-labeled">
        <div>
          <span class="term">could see</span>
          <span
            ><NoteMark
              sentence="We could see the mountains from our room."
              :marks="['could see']"
            /><span class="translation">我們從房間看得到山。</span></span
          >
        </div>
        <div>
          <span class="term">could smell</span>
          <span
            ><NoteMark sentence="I could smell smoke in the hall." :marks="['could smell']" /><span
              class="translation"
              >我在走廊上聞得到煙味。</span
            ></span
          >
        </div>
        <div>
          <span class="term">could feel</span>
          <span
            ><NoteMark sentence="He could feel the floor shaking." :marks="['could feel']" /><span
              class="translation"
              >他感覺得到地板在搖。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞後面接動詞-&#x2060;ing，表示當時正在做的動作" mark="talking">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She could hear', kind: 'dim' },
          { t: 'a man', role: '受詞' },
          { t: 'talking.', role: '正在說話', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">她聽得到有個男人在說話。</p>
    </NoteSlide>

    <NoteSlide title="could 也說過去一段時間會的技能" mark="could">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My sister', kind: 'dim' },
          { t: 'could read', role: '會的技能', kind: 'key', ring: true },
          { t: 'before she started school.', role: '過去的時間' },
        ]"
      />
      <p class="translation">我妹妹上學之前就會讀書了。</p>
    </NoteSlide>

    <NoteSlide title="could 已經表示過去，後面接原形動詞" mark="hear">
      <NoteFix wrong="She could heard a noise." right="She could hear a noise." fix="hear" />
    </NoteSlide>

    <NoteSlide title="could 後面直接接原形動詞，不加 to" mark="hear">
      <NoteFix wrong="I could to see the lake." right="I could see the lake." fix="see" />
    </NoteSlide>

    <NoteSlide title="某一次做成的事，用 was able to" mark="could">
      <NoteFix
        wrong="The fire was big, but everyone could escape."
        right="The fire was big, but everyone was able to escape."
        fix="was able to"
      >
        感官動詞不受這個限制，<code>could see</code>、<code>could hear</code> 可以說一次的情況。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="can 說現在的能力，could 說過去的能力" mark="could">
      <NoteFork
        stem="I"
        :branches="[
          { head: 'can hear', rest: 'the birds.', meaning: '現在', zh: '我聽得到鳥叫聲。' },
          {
            head: 'could smell',
            rest: 'smoke in the hall.',
            meaning: '過去',
            zh: '我在走廊上聞得到煙味。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="說未來的 could 是可能，不是能力" mark="could">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', kind: 'dim' },
          { t: 'could rain', role: '未來的可能', kind: 'key', ring: true },
          { t: 'tonight.', role: '未來', kind: 'dim' },
        ]"
      />
      <p class="translation">今晚可能會下雨。</p>
    </NoteSlide>

    <NoteSlide title="was able to 說某一次做成的事" mark="could">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'After three hours,', kind: 'dim' },
          { t: 'they', role: '主詞' },
          { t: 'were able to open', role: 'were able to + 原形動詞', kind: 'key', ring: true },
          { t: 'the door.', kind: 'dim' },
        ]"
      />
      <p class="translation">三個小時後，他們終於打開了門。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
