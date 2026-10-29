<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-politeness-i-wondered-and-i-wanted, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I wondered if 讓請求聽起來客氣" mark="I wondered if">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'I wondered', role: '客氣', kind: 'key', ring: true },
          { t: 'if', role: '想知道的事' },
          { t: 'you', role: '子句的主詞' },
          { t: 'could introduce', role: 'could + 原形動詞', kind: 'key' },
          { t: 'me to somebody who knows how to use a camera.', kind: 'dim' },
        ]"
      />
      <p class="translation">不知道你能不能幫我介紹一個會用相機的人。</p>
      <p class="remark">說話者要去旅行拍照，寫信請編輯幫忙。</p>
    </NoteSlide>

    <NoteSlide title="I wanted to 問資訊、道謝、告知" mark="I wondered">
      <div class="rows is-labeled">
        <div>
          <span class="term">問資訊</span>
          <span
            ><NoteMark
              sentence="I wanted to know if the rooms are single or double."
              :marks="['I wanted to know']"
          /></span>
        </div>
        <div>
          <span class="term">道謝</span>
          <span
            ><NoteMark
              sentence="I wanted to thank you for your help last week."
              :marks="['I wanted to thank you']"
          /></span>
        </div>
        <div>
          <span class="term">告知</span>
          <span
            ><NoteMark
              sentence="I wanted to let you know that your parcel has arrived."
              :marks="['I wanted to let you know']"
          /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="I was wondering 更客氣" mark="I wondered">
      <NoteMark
        sentence="I was wondering if you could help me with my CV."
        :marks="['I was wondering']"
      />
      <p class="translation">不知道你能不能幫我看一下履歷。</p>
    </NoteSlide>

    <NoteSlide title="if 後面用一般語序" mark="if you could">
      <NoteFix
        wrong="I wondered could you send me a brochure."
        right="I wondered if you could send me a brochure."
        fix="if you could"
      />
    </NoteSlide>

    <NoteSlide title="子句用 could，不用 can" mark="could">
      <NoteFix
        wrong="I wondered if you can lend me your notes."
        right="I wondered if you could lend me your notes."
        fix="could"
      />
    </NoteSlide>

    <NoteSlide title="thank you for 後面接動詞-ing" mark="I wondered">
      <NoteFix
        wrong="I wanted to thank you for give me the first prize."
        right="I wanted to thank you for giving me the first prize."
        fix="giving"
      />
    </NoteSlide>

    <NoteSlide title="直述句用句號" mark="I wondered">
      <NoteFix
        wrong="I wondered if you could help me?"
        right="I wondered if you could help me."
        fix="me."
      />
    </NoteSlide>

    <NoteSlide title="客氣的 I wanted 和過去的 I wanted" mark="I wondered">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在的請求</span>
          <span
            ><NoteMark
              sentence="I wanted to ask if there is a gym in the hotel."
              :marks="['I wanted']"
            /><span class="translation">我想請問飯店有沒有健身房。</span></span
          >
        </div>
        <div>
          <span class="term">過去的願望</span>
          <span
            ><NoteMark
              sentence="I wanted to be a doctor when I was young."
              :marks="['I wanted']"
            /><span class="translation">我小時候想當醫生。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Could you 是直接的問句" mark="I wondered if you could">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接</span>
          <span
            ><NoteMark sentence="Could you send me the timetable?" :marks="['Could you']" /><span
              class="translation"
              >可以寄時刻表給我嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">客氣</span>
          <span
            ><NoteMark
              sentence="I wondered if you could send me the timetable."
              :marks="['I wondered if']"
            /><span class="translation">不知道您能不能寄時刻表給我。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
