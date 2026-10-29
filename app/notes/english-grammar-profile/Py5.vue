<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-ellipsis, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="第二個選項省掉開頭，or 後面直接接動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Is he going to', role: '開頭', kind: 'key' },
          { t: 'give it back to me', role: '動詞 A' },
          { t: 'or', role: '連接詞', kind: 'key' },
          { t: 'is he going to', role: '省略', kind: 'gone' },
          { t: 'show it to everybody?', role: '動詞 B' },
        ]"
      />
      <p class="translation">他是要把它還給我，還是要拿給大家看？</p>
      <p class="remark">選擇疑問句列出兩個以上的選項，問對方選哪一個。</p>
    </NoteSlide>

    <NoteSlide title="兩個選項共用一個開頭" mark="Is he going to">
      <NoteFork
        stem="Do you"
        :branches="[
          { head: 'cook', rest: 'at home', meaning: '動詞 A', zh: '在家煮' },
          { head: 'or eat', rest: 'out?', meaning: '動詞 B', zh: '在外面吃' },
        ]"
      />
      <p class="remark">開頭是助動詞和主詞，也可以包括後面的字，像 <code>Is he going to</code>。</p>
    </NoteSlide>

    <NoteSlide title="動詞 B 和動詞 A 用同一個形式" mark="show">
      <div class="rows is-labeled">
        <div>
          <span class="term">Do + 主詞<br /><i>原形</i></span>
          <span
            ><NoteMark
              sentence="Did you call her or send her a message?"
              :marks="['call', 'send']"
            /><span class="translation">你是打電話給她，還是傳訊息給她？</span></span
          >
        </div>
        <div>
          <span class="term">be + 主詞<br /><i>動詞-ing</i></span>
          <span
            ><NoteMark
              sentence="Are you working tonight or staying home?"
              :marks="['working', 'staying']"
            /><span class="translation">你今晚要上班，還是待在家？</span></span
          >
        </div>
        <div>
          <span class="term">have + 主詞<br /><i>過去分詞</i></span>
          <span
            ><NoteMark
              sentence="Have you finished the book or given up on it?"
              :marks="['finished', 'given']"
            /><span class="translation">你是看完那本書了，還是放棄了？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="情態動詞和 to 後面，兩個動詞都用原形" mark="show">
      <div class="rows is-labeled">
        <div>
          <span class="term">情態動詞</span>
          <span
            ><NoteMark
              sentence="Will you drive or take the train?"
              :marks="['drive', 'take']"
            /><span class="translation">你要開車，還是搭火車？</span></span
          >
        </div>
        <div>
          <span class="term">going to</span>
          <span
            ><NoteMark
              sentence="Are you going to fix it yourself or call someone?"
              :marks="['fix', 'call']"
            /><span class="translation">你要自己修，還是找人來修？</span></span
          >
        </div>
        <div>
          <span class="term">it + be + 形容詞 + to</span>
          <span
            ><NoteMark
              sentence="Is it easier to rent a car or to take the bus?"
              :marks="['rent', 'take']"
            /><span class="translation">租車比較方便，還是搭公車？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="it + be + 形容詞 + to 的句子，or 後面的 to 可以省略" mark="or">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Is it cheaper to', role: '開頭', kind: 'key' },
          { t: 'fly', role: '動詞 A' },
          { t: 'or', role: '連接詞', kind: 'key' },
          { t: 'to', role: '可以省略', kind: 'gone' },
          { t: 'take the train?', role: '動詞 B' },
        ]"
      />
      <p class="translation">搭飛機比較便宜，還是搭火車？</p>
    </NoteSlide>

    <NoteSlide title="選項不只兩個時，最後一個選項前面放 or" mark="or">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Did you', role: '開頭', kind: 'key' },
          { t: 'take the bus,', role: '選項一' },
          { t: 'walk', role: '選項二' },
          { t: 'or', role: '連接詞', kind: 'key' },
          { t: 'get a lift?', role: '選項三' },
        ]"
      />
      <p class="translation">你是搭公車、走路，還是搭別人的便車？</p>
      <p class="remark">前面的選項用逗號隔開。</p>
    </NoteSlide>

    <NoteSlide title="動詞 B 的形式要和開頭相合" mark="show">
      <NoteFix
        wrong="Does she still teach the evening class or runs the library now?"
        right="Does she still teach the evening class or run the library now?"
        fix="run"
      >
        開頭是 <code>Does</code>。<br />動詞 A 和動詞 B 都用原形。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="兩個選項的主詞不同時，不省略" mark="he">
      <NoteFix
        wrong="Is he going to give it back or she keep it?"
        right="Is he going to give it back, or is she going to keep it?"
        fix="is she going to"
      >
        第二個選項的主詞是 <code>she</code>，和開頭的
        <code>he</code> 不同。<br />第二個選項寫成完整的問句。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="主詞和助動詞一起省掉" mark="or show">
      <NoteFix
        wrong="Did you call the landlord or you email him?"
        right="Did you call the landlord or email him?"
        fix="or email"
      >
        <code>or</code> 後面直接接動詞。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="or 後面要接動詞" mark="show">
      <NoteFix
        wrong="Do you agree with the plan or against it?"
        right="Do you agree with the plan or oppose it?"
        fix="oppose"
      >
        <code>against it</code> 是介系詞片語，不是動詞。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="or 後面接名詞或 not 的問句，不屬於省略的選擇疑問句">
      <div class="rows is-labeled">
        <div>
          <span class="term">or + 名詞</span>
          <span
            ><NoteMark sentence="Would you like tea or coffee?" :marks="['tea', 'coffee']" /><span
              class="translation"
              >你要喝茶還是咖啡？</span
            ></span
          >
        </div>
        <div>
          <span class="term">or not</span>
          <span
            ><NoteMark sentence="Are you coming or not?" :marks="['or not']" /><span
              class="translation"
              >你到底來不來？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">
        <code>or</code> 後面接名詞時，不接動詞。<br /><code>or not</code> 代替否定的選項。回答用 yes
        或 no。
      </p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
