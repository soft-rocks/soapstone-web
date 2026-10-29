<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-anything-ellipsis, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="anything 開頭的省略子句">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Anything else', role: '任何東西', kind: 'key' },
          { t: 'you need,', role: '主詞 + 動詞' },
          { t: 'ask Sarah.', role: '主要子句', kind: 'key' },
        ]"
      />
      <p class="translation">你還需要什麼，就問 Sarah。</p>
    </NoteSlide>

    <NoteSlide title="省略了 if there is" mark="Anything else you need">
      <div class="rows is-labeled">
        <div>
          <span class="term">完整</span>
          <span
            ><NoteMark
              sentence="If there is anything you need for the trip, ask Sarah."
              :marks="['If there is']"
            /><span class="translation">如果你旅行需要什麼，就問 Sarah。</span></span
          >
        </div>
        <div>
          <span class="term">省略</span>
          <span
            ><NoteMark
              sentence="Anything you need for the trip, ask Sarah."
              :marks="['Anything']"
            /><span class="translation">你旅行需要什麼，就問 Sarah。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常接的主要子句" mark="ask Sarah.">
      <div class="rows is-labeled">
        <div>
          <span class="term">祈使句</span>
          <span
            ><NoteMark
              sentence="Anything you don't understand, ask your teacher."
              :marks="['ask your teacher.']"
            /><span class="translation">有什麼不懂的，就問老師。</span></span
          >
        </div>
        <div>
          <span class="term">正式書信</span>
          <span
            ><NoteMark
              sentence="Anything you need for the meeting, please don't hesitate to let me know."
              :marks="['please don\'t hesitate to']"
            /><span class="translation">開會需要什麼，請隨時告訴我。</span></span
          >
        </div>
        <div>
          <span class="term">不用客氣</span>
          <span
            ><NoteMark
              sentence="Anything you want to add, feel free to say so."
              :marks="['feel free to']"
            /><span class="translation">想補充什麼，儘管說。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不用疑問句的語序" mark="you need">
      <NoteFix
        wrong="Anything do you need for the party, just call me."
        right="Anything you need for the party, just call me."
        fix="you need"
      />
    </NoteSlide>

    <NoteSlide title="need 後面不再加 it" mark="you need">
      <NoteFix
        wrong="Anything you need it from the kitchen, ask Tom."
        right="Anything you need from the kitchen, ask Tom."
        fix="need,"
      />
    </NoteSlide>

    <NoteSlide title="任何東西用 anything" mark="Anything">
      <NoteFix
        wrong="Something you need during your stay, ask the staff."
        right="Anything you need during your stay, ask the staff."
        fix="Anything"
      />
    </NoteSlide>

    <NoteSlide title="else 放在 anything 後面" mark="Anything else">
      <NoteFix
        wrong="Else anything you'd like to order, tell the waiter."
        right="Anything else you'd like to order, tell the waiter."
        fix="Anything else"
      />
    </NoteSlide>

    <NoteSlide title="anything 當主要子句的主詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Anything', role: '主詞', kind: 'key' },
          { t: 'is', role: '動詞', kind: 'key' },
          { t: 'better than waiting here.', kind: 'dim' },
        ]"
      />
      <p class="translation">做什麼都比在這裡乾等好。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
