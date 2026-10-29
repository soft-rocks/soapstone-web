<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-past-speculation, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="could have 推測過去可能發生的事" mark="could have">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I thought', role: '當時的想法', kind: 'dim' },
          { t: 'perhaps', role: '不確定', kind: 'dim' },
          { t: 'a thief', role: '主詞' },
          { t: 'could have', role: 'could have', kind: 'key', ring: true },
          { t: 'entered', role: '過去分詞', kind: 'key' },
          { t: 'my house.', role: '受詞' },
        ]"
      />
      <p class="translation">我當時想，也許有小偷闖進了我家。</p>
      <p class="remark">說話者當時不知道有沒有小偷。</p>
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞，或 been 加其他成分" mark="entered">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去分詞</span>
          <span
            ><NoteMark sentence="He could have taken a taxi." :marks="['taken']" /><span
              class="translation"
              >他可能搭了計程車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">been + 名詞</span>
          <span
            ><NoteMark
              sentence="It could have been a mistake."
              :marks="['been', 'a mistake']"
            /><span class="translation">那可能是個誤會。</span></span
          >
        </div>
        <div>
          <span class="term">been + 動詞-&#x2060;ing</span>
          <span
            ><NoteMark sentence="She could have been sleeping." :marks="['been sleeping']" /><span
              class="translation"
              >她當時可能在睡覺。</span
            ></span
          >
        </div>
        <div>
          <span class="term">been + 過去分詞<br /><i>被動</i></span>
          <span
            ><NoteMark
              sentence="The window could have been left open."
              :marks="['been left']"
            /><span class="translation">窗戶可能一直沒關。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="疑問詞問句的 could 放在主詞前面" mark="could have">
      <div class="rows is-labeled">
        <div>
          <span class="term">疑問詞 + could + 主詞 + have</span>
          <span
            ><NoteMark
              sentence="Where could she have put the tickets?"
              :marks="['could', 'she', 'have put']"
            /><span class="translation">她會把票放到哪裡去了？</span></span
          >
        </div>
        <div>
          <span class="term">主詞是疑問詞</span>
          <span
            ><NoteMark
              sentence="Who could have done this?"
              :marks="['Who', 'could have done']"
            /><span class="translation">這會是誰做的？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="推測過去的事，could 後面接 have 和過去分詞" mark="could have">
      <NoteFix
        wrong="A thief could entered the house."
        right="A thief could have entered the house."
        fix="have entered"
      />
    </NoteSlide>

    <NoteSlide title="could 後面的動詞用原形，寫 have" mark="have">
      <NoteFix wrong="She could has forgotten." right="She could have forgotten." fix="have" />
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞，不接過去式" mark="entered">
      <NoteFix wrong="Who could have took it?" right="Who could have taken it?" fix="taken">
        <code>take</code> 的過去式是 <code>took</code>，過去分詞是 <code>taken</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="could have 不確定，couldn't have 和 must have 確定" mark="could have">
      <div class="rows is-labeled">
        <div>
          <span class="term">could have<br /><i>不確定</i></span>
          <span
            ><NoteMark sentence="He could have taken a taxi." :marks="['could have taken']" /><span
              class="translation"
              >他可能搭了計程車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">couldn't have<br /><i>確定沒有發生</i></span>
          <span
            ><NoteMark
              sentence="She couldn't have seen us."
              :marks="['couldn\'t have seen']"
            /><span class="translation">她不可能看到我們。</span></span
          >
        </div>
        <div>
          <span class="term">must have<br /><i>確定發生了</i></span>
          <span
            ><NoteMark
              sentence="Someone must have opened the door."
              :marks="['must have opened']"
            /><span class="translation">一定有人開了門。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說話者知道沒有發生時，could have 說的是沒有發生的可能" mark="could have">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You', kind: 'dim' },
          { t: 'could have been hurt!', role: '沒有發生的可能', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">你本來可能會受傷的！</p>
      <p class="remark">說話者知道對方沒有受傷。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
