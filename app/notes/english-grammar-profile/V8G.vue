<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// focus-form-use-wh-cleft-clause, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="整個 How 子句當主詞，動詞用單數">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'How they influenced my life', role: 'How 子句（主詞）', kind: 'key' },
          { t: 'is', role: '單數動詞' },
          { t: 'hard to tell.', role: '補語' },
        ]"
      />
      <p class="translation">他們怎麼影響了我的人生，很難說清楚。</p>
      <p class="remark">子句裡照直述句的語序，主詞在動詞前面。</p>
    </NoteSlide>

    <NoteSlide title="How 說方式，Why 說原因，Where 說地點" mark="How">
      <div class="rows is-labeled">
        <div>
          <span class="term">How<br /><i>方式</i></span>
          <span
            ><NoteMark
              sentence="How you say it matters more than what you say."
              :marks="['How you say it']"
            /><span class="translation">你怎麼說比你說什麼更重要。</span></span
          >
        </div>
        <div>
          <span class="term">Why<br /><i>原因</i></span>
          <span
            ><NoteMark sentence="Why she left is still a mystery." :marks="['Why she left']" /><span
              class="translation"
              >她為什麼離開，到現在還是個謎。</span
            ></span
          >
        </div>
        <div>
          <span class="term">Where<br /><i>地點</i></span>
          <span
            ><NoteMark
              sentence="Where they hid the money was never found out."
              :marks="['Where they hid the money']"
            /><span class="translation">他們把錢藏在哪裡，一直沒有人查出來。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞子句後面也可以接 be 以外的動詞" mark="is">
      <div class="rows is-labeled">
        <div>
          <span class="term">shapes</span>
          <span
            ><NoteMark
              sentence="How we are brought up shapes our character."
              :marks="['shapes']"
            /><span class="translation">我們怎麼被養大，塑造了我們的性格。</span></span
          >
        </div>
        <div>
          <span class="term">doesn't concern</span>
          <span
            ><NoteMark
              sentence="Why he quit doesn't concern you."
              :marks="['doesn\'t concern']"
            /><span class="translation">他為什麼辭職，跟你沒關係。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞子句不用疑問句的語序" mark="they influenced">
      <NoteFix
        wrong="Where did he go was a mystery."
        right="Where he went was a mystery."
        fix="he went"
      />
    </NoteSlide>

    <NoteSlide title="整個子句是一個主詞，動詞用單數" mark="is">
      <NoteFix
        wrong="How people get their things are also important."
        right="How people get their things is also important."
        fix="is"
      >
        <code>people</code> 是子句裡的主詞，不是整句的主詞。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="子句有動詞，整句也要有動詞" mark="is">
      <NoteFix
        wrong="How they met a funny story."
        right="How they met is a funny story."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="Why 子句要有自己的主詞" mark="they">
      <NoteFix
        wrong="Why left the company is unclear."
        right="Why she left the company is unclear."
        fix="she"
      />
    </NoteSlide>

    <NoteSlide title="子句放在句首，強調子句的內容" mark="How they influenced my life">
      <div class="rows is-labeled">
        <div>
          <span class="term">子句在句首</span>
          <span
            ><NoteMark
              sentence="How they influenced my life is hard to tell."
              :marks="['How they influenced my life']"
            /><span class="translation">他們怎麼影響了我的人生，很難說清楚。</span></span
          >
        </div>
        <div>
          <span class="term">It 在句首</span>
          <span
            ><NoteMark
              sentence="It's hard to tell how they influenced my life."
              :marks="['It\'s']"
            /><span class="translation">很難說清楚他們怎麼影響了我的人生。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="What 子句表示東西，Why 子句表示原因" mark="How">
      <div class="rows is-labeled">
        <div>
          <span class="term">What 子句</span>
          <span
            ><NoteMark sentence="What he said was true." :marks="['What he said']" /><span
              class="translation"
              >他說的是真的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">Why 子句</span>
          <span
            ><NoteMark sentence="Why she left is still a mystery." :marks="['Why she left']" /><span
              class="translation"
              >她為什麼離開，到現在還是個謎。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="問句用疑問句的語序，主詞子句用直述句的語序" mark="they influenced">
      <div class="rows is-labeled">
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Where did they go?" :marks="['did they go']" /><span
              class="translation"
              >他們去哪裡了？</span
            ></span
          >
        </div>
        <div>
          <span class="term">主詞子句</span>
          <span
            ><NoteMark sentence="Where he had gone was a mystery." :marks="['he had gone']" /><span
              class="translation"
              >他去了哪裡，沒有人知道。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
