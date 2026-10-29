<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-requests-1214, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Could you 加原形動詞，客氣地請別人做事" mark="Could you">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Could you', role: '請對方做', kind: 'key', ring: true },
          { t: 'help', role: '原形動詞', kind: 'key' },
          { t: 'me', role: '受詞' },
          { t: 'to paint', role: 'to 可以省略' },
          { t: 'my bedroom?', role: 'paint 的受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">你可以幫我粉刷房間嗎？</p>
      <p class="remark">對方可以答應，也可以拒絕。</p>
    </NoteSlide>

    <NoteSlide title="help 後面接人，再接動詞，to 可加可不加" mark="help me">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My arms are full.', role: '原因', kind: 'dim' },
          { t: 'Could you', kind: 'dim' },
          { t: 'help', role: '動詞', kind: 'key' },
          { t: 'me', role: '人', kind: 'key', ring: true },
          { t: 'carry', role: '原形動詞', kind: 'key' },
          { t: 'these bags?', kind: 'dim' },
        ]"
      />
      <p class="translation">我手上都是東西。你可以幫我提這些袋子嗎？</p>
    </NoteSlide>

    <NoteSlide title="先說出原因，再提出請求" mark="Could you">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I left my umbrella at your house yesterday.', role: '原因', kind: 'dim' },
          { t: 'Could you bring it', role: '請求', kind: 'key', ring: true },
          { t: 'to school tomorrow, please?', kind: 'dim' },
        ]"
      />
      <p class="translation">我昨天把傘忘在你家了。你明天可以帶來學校嗎？</p>
      <p class="remark">
        答應常說 <code>Sure.</code>、<code>Of course.</code>、<code>No problem.</code>。拒絕常說
        <code>Sorry, I can't.</code>，再說原因。
      </p>
    </NoteSlide>

    <NoteSlide title="could 後面直接接原形動詞，不加 to" mark="help">
      <NoteFix
        wrong="Could you to shut the gate behind you?"
        right="Could you shut the gate behind you?"
        fix="shut"
      />
    </NoteSlide>

    <NoteSlide title="could 後面用 give，不用 gave" mark="help">
      <NoteFix wrong="Could you gave me a pen?" right="Could you give me a pen?" fix="give" />
    </NoteSlide>

    <NoteSlide title="help me 後面用 move，不用 moving" mark="help me">
      <NoteFix
        wrong="Could you help me moving the piano upstairs?"
        right="Could you help me move the piano upstairs?"
        fix="move"
      />
    </NoteSlide>

    <NoteSlide title="Could you 比 Can you 客氣" mark="Could you">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The baby is asleep.', role: '原因', kind: 'dim' },
          { t: 'Can you', role: '也能請別人做事', kind: 'key', ring: true },
          { t: 'turn the music down?', kind: 'dim' },
        ]"
      />
      <p class="translation">寶寶睡著了。你可以把音樂關小聲一點嗎？</p>
    </NoteSlide>

    <NoteSlide title="Could I 問自己可不可以做，Could you 請對方做" mark="Could you">
      <div class="rows is-labeled">
        <div>
          <span class="term">Could I</span>
          <span
            ><NoteMark
              sentence="I forgot mine. Could I use your ruler?"
              :marks="['Could I']"
            /><span class="translation">我忘了帶我的。我可以用你的尺嗎？</span></span
          >
        </div>
        <div>
          <span class="term">Could you</span>
          <span
            ><NoteMark
              sentence="Could you help me to paint my bedroom?"
              :marks="['Could you']"
            /><span class="translation">你可以幫我粉刷房間嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Would you mind 更客氣，後面接動詞-&#x2060;ing" mark="Could you">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The doctor is with a patient.', kind: 'dim' },
          { t: 'Would you mind', role: '更客氣', kind: 'key', ring: true },
          { t: 'waiting', role: '動詞-ing', kind: 'key' },
          { t: 'a few minutes?', kind: 'dim' },
        ]"
      />
      <p class="translation">醫生正在看病人。你介意等幾分鐘嗎？</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
