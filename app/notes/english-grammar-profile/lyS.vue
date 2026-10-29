<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// discourse-markers-form-use-textual-reference, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="as 後面直接接過去分詞，再接位置">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'As', role: '連接詞', kind: 'key' },
          { t: 'mentioned', role: '過去分詞', kind: 'key' },
          { t: 'above,', role: '位置', kind: 'key' },
          {
            t: 'it might be possible to negotiate better contracts for your company.',
            role: '句子',
            kind: 'dim',
          },
        ]"
      />
      <p class="translation">如上所述，或許可以替貴公司談到更好的合約。</p>
      <p class="remark"><code>above</code> 指這封信前面寫過的部分。</p>
    </NoteSlide>

    <NoteSlide title="前面寫過的部分用 above 或 earlier，後面的部分用 below" mark="above">
      <div class="rows is-labeled">
        <div>
          <span class="term">above<br /><i>前面寫過的部分</i></span>
          <span
            ><NoteMark
              sentence="As mentioned above, the price includes breakfast."
              :marks="['As mentioned above,']"
            /><span class="translation">如上所述，價格包含早餐。</span></span
          >
        </div>
        <div>
          <span class="term">earlier<br /><i>前面寫過的部分</i></span>
          <span
            ><NoteMark
              sentence="As stated earlier, all staff must wear their badges."
              :marks="['As stated earlier,']"
            /><span class="translation">如前所述，所有員工都必須配戴識別證。</span></span
          >
        </div>
        <div>
          <span class="term">below<br /><i>後面要寫的部分</i></span>
          <span
            ><NoteMark
              sentence="As shown below, sales rose by 20% last year."
              :marks="['As shown below,']"
            /><span class="translation">如下所示，去年的銷售額成長了百分之二十。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去分詞後面也可以接 in 和文件的部分" mark="above">
      <div class="rows is-labeled">
        <div>
          <span class="term">in Section 2</span>
          <span
            ><NoteMark
              sentence="As explained in Section 2, we sent the survey to 300 customers."
              :marks="['in Section 2,']"
            /><span class="translation">如第二節所說明，我們把問卷寄給了三百位顧客。</span></span
          >
        </div>
        <div>
          <span class="term">in my last email</span>
          <span
            ><NoteMark
              sentence="As noted in my last email, the deadline is 15 May."
              :marks="['in my last email,']"
            /><span class="translation">如我上一封信所提，截止日是五月十五日。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="as follows 放在動詞後面，the following 放在名詞前面">
      <div class="rows is-labeled">
        <div>
          <span class="term">as follows</span>
          <span
            ><NoteMark
              sentence="The schedule is as follows: arrival at 9, lunch at 12, departure at 4."
              :marks="['is as follows:']"
            /><span class="translation">行程如下：九點抵達，十二點午餐，四點出發。</span></span
          >
        </div>
        <div>
          <span class="term">the following</span>
          <span
            ><NoteMark
              sentence="Please bring the following items: a passport, two photos and a pen."
              :marks="['the following items:']"
            /><span class="translation">請帶以下物品：護照、兩張照片和一支筆。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="see above 和 see below 是祈使句，常放在括號裡">
      <div class="rows is-labeled">
        <div>
          <span class="term">see below</span>
          <span
            ><NoteMark
              sentence="For directions to the hotel, see below."
              :marks="['see below.']"
            /><span class="translation">到飯店的路線請見下方。</span></span
          >
        </div>
        <div>
          <span class="term">(see above)</span>
          <span
            ><NoteMark
              sentence="The contact details are the same as before (see above)."
              :marks="['(see above).']"
            /><span class="translation">聯絡資料跟之前一樣（請見上方）。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="the above 當名詞用，above 也可以放在名詞後面" mark="above">
      <div class="rows is-labeled">
        <div>
          <span class="term">the above</span>
          <span
            ><NoteMark
              sentence="If you agree with the above, please sign the form."
              :marks="['the above,']"
            /><span class="translation">如果您同意以上內容，請在表格上簽名。</span></span
          >
        </div>
        <div>
          <span class="term">名詞 + above</span>
          <span
            ><NoteMark
              sentence="I hope the points above answer your questions."
              :marks="['the points above']"
            /><span class="translation">希望上面這幾點回答了您的問題。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="as 後面接過去分詞" mark="mentioned">
      <NoteFix
        wrong="As mention above, the room is on the second floor."
        right="As mentioned above, the room is on the second floor."
        fix="mentioned"
      />
    </NoteSlide>

    <NoteSlide title="above 放在過去分詞後面" mark="mentioned above,">
      <NoteFix
        wrong="As above mentioned, the course starts in June."
        right="As mentioned above, the course starts in June."
        fix="mentioned above,"
      />
    </NoteSlide>

    <NoteSlide title="as 後面直接接過去分詞，不加 it" mark="As mentioned">
      <NoteFix
        wrong="As it mentioned above, the trip costs $200."
        right="As mentioned above, the trip costs $200."
        fix="As mentioned"
      >
        要寫主詞，就寫出提到的人，像 <code>As I mentioned above</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="as follows 的 follows 一定加 -s">
      <NoteFix
        wrong="The rules are as follow: no food, no drinks, no phones."
        right="The rules are as follows: no food, no drinks, no phones."
        fix="follows:"
      >
        主詞是複數也一樣。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="指後面的內容用 below，above 只指前面的內容" mark="above,">
      <NoteFix
        wrong="The full timetable starts on the next page (see above)."
        right="The full timetable starts on the next page (see below)."
        fix="below"
      />
    </NoteSlide>

    <NoteSlide
      title="As I mentioned 說寫的人提過，As you know 說讀者知道"
      mark="As mentioned above,"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">As I mentioned<br /><i>寫的人之前提過</i></span>
          <span
            ><NoteMark
              sentence="As I mentioned on the phone, the car will be ready on Monday."
              :marks="['As I mentioned']"
            /><span class="translation">就像我在電話裡提過的，車子星期一會好。</span></span
          >
        </div>
        <div>
          <span class="term">As you know<br /><i>讀者本來就知道</i></span>
          <span
            ><NoteMark
              sentence="As you know, the shop closes early on Sundays."
              :marks="['As you know,']"
            /><span class="translation">你也知道，這家店星期天提早關門。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
