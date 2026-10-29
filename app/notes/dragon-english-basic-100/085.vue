<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 085, as slides, in the order of notes/dragon-english-basic-100/085.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="It costs 加金額加 to 不定詞，表示做一件事要花多少錢">
      <NoteWords
        :size="26"
        :move="{ from: 2, to: 0 }"
        :parts="[
          { t: 'It', role: '形式主詞', kind: 'key' },
          { t: 'cost ten thousand yen', role: 'cost + 金額' },
          { t: 'to have this bike repaired.', role: '真正的主詞', kind: 'key' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="cost 的過去式也是 cost" mark="cost">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在式</span>
          <span
            ><NoteMark
              sentence="It costs 500 yen to get into the museum."
              :marks="['costs']"
            /><span class="translation">進博物館要五百日圓。</span></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark
              sentence="It cost ten thousand yen to have this bike repaired."
              :marks="['cost']"
            /><span class="translation">修這台腳踏車花了一萬日圓。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="要說是誰付錢，人放在 cost 後面" mark="cost">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', kind: 'dim' },
          { t: 'cost', role: '動詞' },
          { t: 'me', role: '人', kind: 'key', ring: true },
          { t: '2,000 yen', role: '金額' },
          { t: 'to fix my phone.', role: 'to + 動詞原形' },
        ]"
      />
      <p class="translation">我修手機花了兩千日圓。</p>
    </NoteSlide>

    <NoteSlide title="東西也可以直接當 cost 的主詞" mark="cost">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'This T-shirt', role: '東西', kind: 'key' },
          { t: 'cost', role: '動詞' },
          { t: '1,000 yen.', role: '金額' },
        ]"
      />
      <p class="translation">這件 T 恤花了一千日圓。</p>
    </NoteSlide>

    <NoteSlide title="問要花多少錢，用 How much does it cost 開頭" mark="It cost">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'How much', role: '多少錢', kind: 'key' },
          { t: 'does it cost', role: '助動詞 + it + cost', kind: 'key' },
          { t: 'to take a taxi to the airport?', role: 'to + 動詞原形' },
        ]"
      />
      <p class="translation">搭計程車去機場要多少錢？</p>
    </NoteSlide>

    <NoteSlide title="have 加東西加過去分詞，表示請別人做某件事" mark="have this bike repaired">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'to', kind: 'dim' },
          { t: 'have', role: '使役動詞', kind: 'key' },
          { t: 'this bike', role: '東西' },
          { t: 'repaired.', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="remark">修腳踏車的是店家，不是主詞自己。</p>
    </NoteSlide>

    <NoteSlide title="東西是接受動作的一方，所以用過去分詞" mark="repaired">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'had', role: '使役動詞' },
          { t: 'my hair', role: '接受動作', kind: 'key' },
          { t: 'cut', role: '過去分詞', kind: 'key', ring: true },
          { t: 'yesterday.', kind: 'dim' },
        ]"
      />
      <p class="translation">我昨天去剪了頭髮。</p>
    </NoteSlide>

    <NoteSlide title="get 加東西加過去分詞，意思和 have 一樣" mark="have">
      <div class="rows is-labeled">
        <div>
          <span class="term">have</span>
          <span
            ><NoteMark
              sentence="We need to have the car checked."
              :marks="['have', 'checked']"
            /><span class="translation">我們需要把車拿去檢查。</span></span
          >
        </div>
        <div>
          <span class="term">get</span>
          <span
            ><NoteMark sentence="She got her watch fixed." :marks="['got', 'fixed']" /><span
              class="translation"
              >她把手錶拿去修好了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
