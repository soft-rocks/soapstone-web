<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verb-plus-around, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="不及物片語動詞後面不接受詞" mark="get up">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'m going to', kind: 'dim' },
          { t: 'get', role: '動詞', kind: 'key' },
          { t: 'up', role: '小品詞', kind: 'key' },
          { t: 'early on Saturday.', role: '時間' },
        ]"
      />
      <p class="translation">我星期六要早起。</p>
      <p class="remark"><code>get up</code> 的意思是起床。</p>
    </NoteSlide>

    <NoteSlide title="片語動詞後面可以接時間、地方或 to + 地方" mark="early on Saturday">
      <div class="rows is-labeled">
        <div>
          <span class="term">時間</span>
          <span
            ><NoteMark
              sentence="The twins usually wake up around dawn."
              :marks="['around dawn']"
            /><span class="translation">那對雙胞胎通常天一亮就醒了。</span></span
          >
        </div>
        <div>
          <span class="term">地方</span>
          <span
            ><NoteMark sentence="Come in and sit down on the sofa." :marks="['on the sofa']" /><span
              class="translation"
              >進來坐在沙發上吧。</span
            ></span
          >
        </div>
        <div>
          <span class="term">to + 地方</span>
          <span
            ><NoteMark
              sentence="My cousin came over to our flat for dinner."
              :marks="['to our flat']"
            /><span class="translation">我表哥來我們公寓吃晚餐。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="同一個動詞，小品詞不同，意思不同" mark="up">
      <div class="rows is-labeled">
        <div>
          <span class="term">come in<br /><i>進來</i></span>
          <span
            ><NoteMark sentence="Come in quickly and shut the door." :marks="['in']" /><span
              class="translation"
              >快進來，把門關上。</span
            ></span
          >
        </div>
        <div>
          <span class="term">come back<br /><i>回來</i></span>
          <span
            ><NoteMark sentence="The swallows come back every spring." :marks="['back']" /><span
              class="translation"
              >燕子每年春天都會回來。</span
            ></span
          >
        </div>
        <div>
          <span class="term">come over<br /><i>過來</i></span>
          <span
            ><NoteMark sentence="My grandparents are coming over for tea." :marks="['over']" /><span
              class="translation"
              >我爺爺奶奶要過來喝下午茶。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="起床是 get up，up 不能省略" mark="up">
      <NoteFix
        wrong="On school days my son gets at half past six."
        right="On school days my son gets up at half past six."
        fix="up"
      />
    </NoteSlide>

    <NoteSlide title="小品詞放在動詞後面" mark="up">
      <NoteFix
        wrong="Our guests in came through the garden."
        right="Our guests came in through the garden."
        fix="came in"
      />
    </NoteSlide>

    <NoteSlide title="說自己醒來，wake up 後面不接受詞" mark="get up">
      <NoteFix
        wrong="What time did you wake up yourself?"
        right="What time did you wake up?"
        fix="wake up"
      />
    </NoteSlide>

    <NoteSlide title="片語動詞的動詞照時態變化，小品詞不變" mark="get">
      <NoteFix
        wrong="Last Monday the whole family get up before dawn."
        right="Last Monday the whole family got up before dawn."
        fix="got"
      />
    </NoteSlide>

    <NoteSlide title="wake up 有受詞時，是叫醒別人">
      <NoteMark sentence="The thunder woke the baby up." :marks="['the baby']" />
      <p class="translation">雷聲把寶寶吵醒了。</p>
    </NoteSlide>

    <NoteSlide title="upstairs 是地方副詞，不是小品詞">
      <NoteMark sentence="Come upstairs and see my new room." :marks="['upstairs']" />
      <p class="translation">上樓來看我的新房間。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
