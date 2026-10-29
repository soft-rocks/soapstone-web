<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-questions-809, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="疑問詞加 have，再接主詞和 been 動詞-ing" mark="have you">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'What', role: '疑問詞' },
          { t: 'have', role: '主詞前面', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'been doing?', role: 'been + 動詞-ing', kind: 'key' },
        ]"
      />
      <p class="translation">你剛剛都在做什麼？</p>
      <p class="remark">室友回家，頭髮濕了，鞋子上都是泥巴。</p>
    </NoteSlide>

    <NoteSlide title="是非問句用 Have / Has 開頭，簡答用 have" mark="have">
      <div class="rows is-labeled">
        <div>
          <span class="term">問</span>
          <span
            ><NoteMark
              sentence="I haven't seen you in this office before. Have you been working here long?"
              :marks="['Have']"
            /><span class="translation"
              >我以前沒在這間辦公室見過你。你在這裡工作很久了嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">答</span>
          <span
            ><NoteMark sentence="No, I haven't." :marks="['haven\'t.']" /><span class="translation"
              >沒有。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Who 當主詞，不移動 has" mark="have you">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The battery is empty.', kind: 'dim' },
          { t: 'Who', role: '主詞', kind: 'key', ring: true },
          { t: 'has been using', role: 'has + been + 動詞-ing' },
          { t: 'my laptop?', kind: 'dim' },
        ]"
      />
      <p class="translation">電池沒電了。誰一直在用我的筆電？</p>
    </NoteSlide>

    <NoteSlide title="不用 do 造問句" mark="have">
      <NoteFix
        wrong="What do you have been doing in the garage?"
        right="What have you been doing in the garage?"
        fix="have you"
      />
    </NoteSlide>

    <NoteSlide title="have 放在主詞前面" mark="have you">
      <NoteFix
        wrong="How long your parents have been living in Spain?"
        right="How long have your parents been living in Spain?"
        fix="have your parents"
      />
    </NoteSlide>

    <NoteSlide title="been 不能漏掉" mark="been">
      <NoteFix
        wrong="Have you waiting for me outside the cinema?"
        right="Have you been waiting for me outside the cinema?"
        fix="been waiting"
      />
    </NoteSlide>

    <NoteSlide title="簡答只用 have" mark="have">
      <NoteFix
        wrong="Have you been waiting long? — Yes, I have been waiting."
        right="Have you been waiting long? — Yes, I have."
        fix="have.#2"
      />
    </NoteSlide>

    <NoteSlide title="現在完成簡單式問做完的事" mark="been doing?">
      <div class="rows is-labeled">
        <div>
          <span class="term">一段時間的活動</span>
          <span
            ><NoteMark
              sentence="You're covered in mud. What have you been doing?"
              :marks="['been doing?']"
            /><span class="translation">你全身都是泥巴。你剛剛都在做什麼？</span></span
          >
        </div>
        <div>
          <span class="term">做完的事</span>
          <span
            ><NoteMark sentence="The vase is broken. What have you done?" :marks="['done?']" /><span
              class="translation"
              >花瓶破了。你做了什麼好事？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去進行式問過去的時間點" mark="have you been doing?">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I called you three times.', kind: 'dim' },
          { t: 'What', kind: 'dim' },
          { t: 'were you doing', role: '過去進行式', kind: 'key', ring: true },
          { t: 'at ten last night?', role: '時間點' },
        ]"
      />
      <p class="translation">我打了三次電話給你。你昨天晚上十點在做什麼？</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
