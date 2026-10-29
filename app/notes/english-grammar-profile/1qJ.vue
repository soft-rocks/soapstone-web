<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-with-modal-verbs, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="情態動詞加 be，再接過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'things', role: '名詞', kind: 'dim' },
          { t: 'that', role: '主詞' },
          { t: 'could', role: '情態動詞', kind: 'key' },
          { t: 'be improved', role: 'be + 過去分詞', kind: 'key' },
        ]"
      />
      <p class="translation">可以改進的地方</p>
    </NoteSlide>

    <NoteSlide title="可以、應該、一定要" mark="could">
      <div class="rows is-labeled">
        <div>
          <span class="term">can / could</span>
          <span
            ><NoteMark sentence="Some things could be improved." :marks="['could']" /><span
              class="translation"
              >有些地方可以改進。</span
            ></span
          >
        </div>
        <div>
          <span class="term">should</span>
          <span
            ><NoteMark
              sentence="Architects should be hired to design parks."
              :marks="['should']"
            /><span class="translation">應該請建築師來設計公園。</span></span
          >
        </div>
        <div>
          <span class="term">must</span>
          <span
            ><NoteMark sentence="All bags must be checked." :marks="['must']" /><span
              class="translation"
              >所有包包一定要檢查。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="可能會、會" mark="could be improved">
      <div class="rows is-labeled">
        <div>
          <span class="term">may / might</span>
          <span
            ><NoteMark sentence="The match might be cancelled." :marks="['might']" /><span
              class="translation"
              >比賽可能會取消。</span
            ></span
          >
        </div>
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark sentence="You will be met at the airport." :marks="['will']" /><span
              class="translation"
              >會有人在機場接你。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞可以是人、東西、it 或關係代名詞" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">人</span>
          <span
            ><NoteMark sentence="Students should be given more time." :marks="['Students']" /><span
              class="translation"
              >應該給學生多一點時間。</span
            ></span
          >
        </div>
        <div>
          <span class="term">東西</span>
          <span
            ><NoteMark sentence="The room can be booked online." :marks="['The room']" /><span
              class="translation"
              >房間可以在網路上訂。</span
            ></span
          >
        </div>
        <div>
          <span class="term">it</span>
          <span
            ><NoteMark
              sentence="It could be said that everyone lives in a digital world."
              :marks="['It']"
            /><span class="translation">可以說每個人都活在數位世界裡。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="情態動詞後面接原形 be" mark="be">
      <NoteFix
        wrong="A few things could are improved."
        right="A few things could be improved."
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="被動要有 be" mark="be">
      <NoteFix
        wrong="Architects should hired to design parks."
        right="Architects should be hired to design parks."
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="情態動詞後面不加 to" mark="could be">
      <NoteFix
        wrong="All bags must to be checked."
        right="All bags must be checked."
        fix="must be"
      />
    </NoteSlide>

    <NoteSlide title="be 後面接過去分詞" mark="improved">
      <NoteFix
        wrong="The room can be book online."
        right="The room can be booked online."
        fix="booked"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
