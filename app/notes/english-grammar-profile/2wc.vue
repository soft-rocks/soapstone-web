<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-collective-nouns, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="把員工看成一個整體，動詞用單數">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The staff', role: '集合名詞', kind: 'key' },
          { t: 'is', role: '單數動詞', kind: 'key' },
          { t: 'friendly and polite to guests.', kind: 'dim' },
        ]"
      />
      <p class="translation">員工對客人很友善，也很有禮貌。</p>
    </NoteSlide>

    <NoteSlide title="想到每一個人時，動詞用複數" mark="is">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數<br /><i>一個整體</i></span>
          <span
            ><NoteMark sentence="The team is the best in the league." :marks="['is']" /><span
              class="translation"
              >這支球隊是聯賽裡最強的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數<br /><i>每一個人</i></span>
          <span
            ><NoteMark
              sentence="After the spring break the whole staff have to start work at 7.15 am."
              :marks="['have']"
            /><span class="translation">春假過後，全體員工都得早上七點十五分開始上班。</span></span
          >
        </div>
      </div>
      <p class="remark">一個句子裡選一種，前後一致。</p>
    </NoteSlide>

    <NoteSlide title="集合名詞指工作、家庭或學校的一群人，police 只用複數" mark="is">
      <div class="rows is-labeled">
        <div>
          <span class="term">工作</span>
          <span>staff, team, company, government</span>
        </div>
        <div>
          <span class="term">家庭和學校</span>
          <span>family, class, audience, crowd</span>
        </div>
        <div>
          <span class="term">police</span>
          <span><NoteMark sentence="The police are here." :marks="['are']" /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="staff 本身就指一群人，不加 -&#x2060;s" mark="staff">
      <NoteFix
        wrong="The staffs are very helpful."
        right="The staff are very helpful."
        fix="staff"
      />
    </NoteSlide>

    <NoteSlide title="police 用複數動詞" mark="is">
      <NoteFix
        wrong="The police is looking for the driver."
        right="The police are looking for the driver."
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="說一個員工用 a member of staff" mark="staff">
      <NoteFix
        wrong="A staff helped me with my bags."
        right="A member of staff helped me with my bags."
        fix="A member of staff"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
