<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-past-1226, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="疑問詞當主詞，後面直接接 could have 和過去分詞" mark="What">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'What', role: '主詞', kind: 'key', ring: true },
          { t: 'could have', role: 'could have', kind: 'key' },
          { t: 'happened?', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="translation">會是出了什麼事呢？</p>
      <p class="remark">說話者不知道發生了什麼事。</p>
    </NoteSlide>

    <NoteSlide title="肯定句和否定句，could 後面接 have" mark="could have">
      <div class="rows is-labeled">
        <div>
          <span class="term">肯定句</span>
          <span
            ><NoteMark
              sentence="The keys could have dropped out of my pocket."
              :marks="['could have dropped']"
            /><span class="translation">鑰匙可能從我口袋掉出去了。</span></span
          >
        </div>
        <div>
          <span class="term">否定句</span>
          <span
            ><NoteMark
              sentence="The cat couldn't have climbed that high."
              :marks="['couldn\'t have climbed']"
            /><span class="translation">貓不可能爬那麼高。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="問句只把 could 移到主詞前面" mark="could">
      <div class="rows is-labeled">
        <div>
          <span class="term">疑問詞問句</span>
          <span
            ><NoteMark
              sentence="Where could they have gone?"
              :marks="['could', 'they', 'have gone']"
            /><span class="translation">他們會跑到哪裡去了？</span></span
          >
        </div>
        <div>
          <span class="term">Yes/No 問句</span>
          <span
            ><NoteMark
              sentence="Could he have forgotten?"
              :marks="['Could', 'he', 'have forgotten']"
            /><span class="translation">他會不會是忘了？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="have 不隨主詞改成 has，口語縮寫成 could've" mark="have">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'could have', role: '寫法', kind: 'key', ring: true },
          { t: 'could\'ve', role: '口語縮寫', kind: 'key' },
          { t: 'couldn\'t have', role: 'could not have', kind: 'key' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="could've 聽起來像 could of，寫成 could have" mark="could have">
      <NoteFix wrong="You could of told me." right="You could have told me." fix="could have" />
    </NoteSlide>

    <NoteSlide title="問句的 have 留在主詞後面" mark="have">
      <NoteFix
        wrong="Where could have they gone?"
        right="Where could they have gone?"
        fix="they have"
      />
    </NoteSlide>

    <NoteSlide title="not 放在 could 後面，寫成 couldn't have" mark="could">
      <NoteFix
        wrong="She could have not seen it."
        right="She couldn't have seen it."
        fix="couldn't"
      />
    </NoteSlide>

    <NoteSlide title="couldn't have 加比較級，表示最好或最壞的情況" mark="could have">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The weather', kind: 'dim' },
          { t: 'couldn\'t have been', role: 'couldn\'t have', kind: 'key' },
          { t: 'better.', role: '比較級', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">天氣好得不得了。</p>
      <p class="remark">這句不是說天氣不好。</p>
    </NoteSlide>

    <NoteSlide title="could 加原形動詞問現在，could have 問過去" mark="could have">
      <NoteFork
        stem="What could"
        :branches="[
          {
            head: 'it be?',
            rest: '',
            meaning: '現在的可能',
            zh: '那會是什麼呢？',
          },
          {
            head: 'have happened?',
            rest: '',
            meaning: '過去的可能',
            zh: '會是出了什麼事呢？',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="肯定句裡，might have 和 could have 都能推測過去" mark="could have">
      <div class="rows is-labeled">
        <div>
          <span class="term">might have</span>
          <span
            ><NoteMark
              sentence="He might have missed the train."
              :marks="['might have missed']"
            /><span class="translation">他可能沒趕上火車。</span></span
          >
        </div>
      </div>
      <p class="remark">
        否定的 <code>might not have</code> 表示可能沒有發生，<code>couldn't have</code>
        表示不可能發生。
      </p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
