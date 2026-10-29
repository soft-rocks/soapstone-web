<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-1208, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定句在 could 後面加 not，再接原形動詞" mark="couldn't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'couldn\'t', role: 'could not', kind: 'key', ring: true },
          { t: 'close', role: '原形動詞', kind: 'key' },
          { t: 'the window.', role: '受詞' },
        ]"
      />
      <p class="translation">我沒辦法把窗戶關上。</p>
      <p class="remark">說話者昨晚試過，可是做不到。</p>
    </NoteSlide>

    <NoteSlide title="正式文章寫 could not，說話寫 couldn't" mark="couldn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">couldn't</span>
          <span
            ><NoteMark
              sentence="The car park was full. We couldn't find a parking space."
              :marks="['couldn\'t']"
            /><span class="translation">停車場滿了。我們找不到停車位。</span></span
          >
        </div>
        <div>
          <span class="term">could not</span>
          <span
            ><NoteMark
              sentence="Mark was ill, so he could not go to the game."
              :marks="['could not']"
            /><span class="translation">馬克生病了，所以沒辦法去看比賽。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="所有主詞都用同一個形式" mark="I">
      <div class="rows is-labeled">
        <div>
          <span class="term">I / you / we / they</span>
          <span
            ><NoteMark
              sentence="The car park was full. We couldn't find a parking space."
              :marks="['We', 'couldn\'t']"
            /><span class="translation">停車場滿了。我們找不到停車位。</span></span
          >
        </div>
        <div>
          <span class="term">he / she / it</span>
          <span
            ><NoteMark
              sentence="My grandma is quite short. She couldn't reach the top shelf."
              :marks="['She', 'couldn\'t']"
            /><span class="translation">我奶奶個子很矮。她搆不到最上層的架子。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not 放在 could 後面" mark="couldn't">
      <NoteFix
        wrong="I not could find my passport at the airport."
        right="I couldn't find my passport at the airport."
        fix="couldn't"
      />
    </NoteSlide>

    <NoteSlide title="could 的否定不用 didn't" mark="couldn't">
      <NoteFix
        wrong="She didn't could come to the meeting on Friday."
        right="She couldn't come to the meeting on Friday."
        fix="couldn't"
      />
    </NoteSlide>

    <NoteSlide title="couldn't 後面接原形動詞" mark="close">
      <NoteFix
        wrong="They couldn't saw the screen from the back row."
        right="They couldn't see the screen from the back row."
        fix="see"
      />
    </NoteSlide>

    <NoteSlide title="撇號放在 n 和 t 中間" mark="couldn't">
      <NoteFix
        wrong="I could'nt hear you over the traffic."
        right="I couldn't hear you over the traffic."
        fix="couldn't"
      >
        撇號代替 <code>not</code> 的 <code>o</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="can't 說現在，couldn't 說過去" mark="couldn't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The lock is broken.', kind: 'dim' },
          { t: 'I', kind: 'dim' },
          { t: 'can\'t close', role: '現在做不到', kind: 'key', ring: true },
          { t: 'the back door.', kind: 'dim' },
        ]"
      />
      <p class="translation">鎖壞了。我關不上後門。</p>
    </NoteSlide>

    <NoteSlide title="Too bad you couldn't，說對方沒能做，覺得可惜" mark="couldn't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We had a great time at the beach.', kind: 'dim' },
          { t: 'Too bad', role: '可惜', kind: 'key', ring: true },
          { t: 'you couldn\'t come.', role: '對方沒能做' },
        ]"
      />
      <p class="translation">我們在海邊玩得很開心。可惜你沒能來。</p>
    </NoteSlide>

    <NoteSlide title="couldn't 也能說現在不可能" mark="couldn't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The bill says we ordered ten pizzas.', kind: 'dim' },
          { t: 'That', kind: 'dim' },
          { t: 'couldn\'t be', role: '不可能', kind: 'key', ring: true },
          { t: 'right.', kind: 'dim' },
        ]"
      />
      <p class="translation">帳單上寫我們點了十個披薩。那不可能是對的。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
