<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-permission-1220, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Could I 加原形動詞，請對方准許自己做一件事" mark="Could I">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Could I', role: '請求許可', kind: 'key', ring: true },
          { t: 'play', role: '原形動詞', kind: 'key' },
          { t: 'with it', role: 'with + 受詞' },
          { t: 'now,', role: '時間', kind: 'dim' },
          { t: 'please?', role: '禮貌', kind: 'dim' },
        ]"
      />
      <p class="translation">請問我現在可以玩這個嗎？</p>
      <p class="remark"><code>it</code> 指媽媽買的那款遊戲。</p>
    </NoteSlide>

    <NoteSlide title="please 放在句尾，或放在 I 後面" mark="please">
      <div class="rows is-labeled">
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="Could I open the window, please?" :marks="['please']" /><span
              class="translation"
              >請問我可以開窗嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">I 後面</span>
          <span
            ><NoteMark
              sentence="Could I please leave a bit early today?"
              :marks="['please']"
            /><span class="translation">請問我今天可以早一點走嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Could we 請對方准許說話者和其他人" mark="Could I">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Could we', role: '說話者和其他人', kind: 'key', ring: true },
          { t: 'sit here?', role: '原形動詞' },
        ]"
      />
      <p class="translation">請問我們可以坐這裡嗎？</p>
    </NoteSlide>

    <NoteSlide title="回答用 can，不用 could" mark="Could">
      <div class="rows is-labeled">
        <div>
          <span class="term">答應</span>
          <span
            ><NoteMark sentence="Yes, of course you can." :marks="['can']" /><span
              class="translation"
              >當然可以。</span
            ></span
          >
        </div>
        <div>
          <span class="term">拒絕</span>
          <span
            ><NoteMark sentence="Sorry, you can't." :marks="['can\'t']" /><span class="translation"
              >抱歉，不行。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Could I 後面直接接原形動詞，不加 to" mark="play">
      <NoteFix wrong="Could I to use your pen?" right="Could I use your pen?" fix="use" />
    </NoteSlide>

    <NoteSlide title="問句把 could 放在 I 前面" mark="Could I">
      <NoteFix wrong="I could borrow your bike?" right="Could I borrow your bike?" fix="Could I" />
    </NoteSlide>

    <NoteSlide title="答應別人的請求，用 can" mark="Could">
      <NoteFix wrong="Yes, you could." right="Yes, you can." fix="can">
        <code>Yes, you could</code> 聽起來像是在說一個可能。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="Can I 和 Could I 都能請求許可，Could I 比較客氣" mark="Could I">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Can I', role: '請求許可', kind: 'key', ring: true },
          { t: 'have a glass of water?', kind: 'dim' },
        ]"
      />
      <p class="translation">我可以喝杯水嗎？</p>
      <p class="remark">對長輩、老師或不熟的人，常用 <code>Could I</code>。</p>
    </NoteSlide>

    <NoteSlide title="Could you 請對方做事，Could I 請對方准許自己做事" mark="Could I">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Could you', role: '請對方做', kind: 'key', ring: true },
          { t: 'pass me the salt?', kind: 'dim' },
        ]"
      />
      <p class="translation">可以請你把鹽遞給我嗎？</p>
    </NoteSlide>

    <NoteSlide title="May I 比 Could I 更正式" mark="Could I">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'May I', role: '正式場合', kind: 'key', ring: true },
          { t: 'come in?', kind: 'dim' },
        ]"
      />
      <p class="translation">我可以進來嗎？</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
