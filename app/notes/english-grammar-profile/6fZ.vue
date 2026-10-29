<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-direct-object-particle-preposition-object, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="第一個受詞放在動詞和小品詞中間">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'His flatmate', role: '主詞', kind: 'dim' },
          { t: 'put', role: '動詞', kind: 'key' },
          { t: 'him', role: '第一個受詞\n（someone）' },
          { t: 'up', role: '小品詞', kind: 'key' },
          { t: 'to', role: '介系詞', kind: 'key' },
          { t: 'it.', role: '第二個受詞\n（something）' },
        ]"
      />
      <p class="translation">是他室友慫恿他去做那件事的。</p>
      <p class="remark">片語介系詞動詞由動詞、小品詞和介系詞組成。</p>
    </NoteSlide>

    <NoteSlide title="第二個受詞接在介系詞後面" :mark="['put', 'up to']">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'put', role: '動詞', kind: 'key', alts: ['let', 'talk', 'take'] },
          { t: 'someone', role: '第一個受詞', kind: 'slot' },
          { t: 'up', role: '小品詞', kind: 'key', alts: ['in', 'out', 'down', 'off'] },
          { t: 'to', role: '介系詞', kind: 'key', alts: ['on', 'of', 'with', 'for'] },
          { t: 'something', role: '第二個受詞', kind: 'slot' },
        ]"
      />
      <p class="remark">第一個受詞是直接受詞，接在動詞後面。<br />第二個受詞接在介系詞後面。</p>
    </NoteSlide>

    <NoteSlide title="常見的片語介系詞動詞">
      <div class="rows">
        <div>
          <span class="term"><b>put</b> <i>someone</i> <b>up to</b> <i>something</i></span
          ><span class="gloss">慫恿某人做某事</span>
        </div>
        <div>
          <span class="term"><b>let</b> <i>someone</i> <b>in on</b> <i>something</i></span
          ><span class="gloss">把某事告訴某人</span>
        </div>
        <div>
          <span class="term"><b>talk</b> <i>someone</i> <b>out of</b> <i>something</i></span
          ><span class="gloss">勸某人不要做某事</span>
        </div>
        <div>
          <span class="term"><b>take</b> <i>someone</i> <b>up on</b> <i>something</i></span
          ><span class="gloss">接受某人的提議</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞不同，意思不同" mark="to">
      <NoteFork
        stem="put Sam up"
        :branches="[
          {
            head: 'to',
            rest: 'the prank',
            meaning: '慫恿某人做某事',
            zh: '是那些大男孩慫恿 Sam 去惡作劇的。',
          },
          {
            head: 'for',
            rest: 'class president',
            meaning: '推某人出來爭取某個位子',
            zh: '全班推 Sam 出來選班長。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="小品詞和介系詞不同，意思不同" mark="up to">
      <NoteFork
        stem="let the twins"
        :branches="[
          {
            head: 'in on',
            rest: 'the surprise party',
            meaning: '把某事告訴某人',
            zh: '老師把驚喜派對的事告訴了那對雙胞胎。',
          },
          {
            head: 'off with',
            rest: 'a warning',
            meaning: '只給某人輕的處罰',
            zh: '老師只警告了那對雙胞胎，就放過他們了。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="片語介系詞動詞要有小品詞" mark="up">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'talk', role: '動詞', kind: 'key' },
          { t: 'someone', role: '第一個受詞', kind: 'slot' },
          { t: 'out', role: '小品詞', kind: 'key' },
          { t: 'of', role: '介系詞', kind: 'key' },
          { t: 'something', role: '第二個受詞', kind: 'slot' },
        ]"
      />
      <NoteWords
        :size="24"
        :parts="[
          { t: 'talk', role: '動詞', kind: 'key' },
          { t: 'someone', role: '受詞', kind: 'slot' },
          { role: '沒有小品詞' },
          { t: 'into', role: '介系詞', kind: 'key' },
          { t: 'something', role: '介系詞的受詞', kind: 'slot' },
        ]"
      />
      <p class="remark">
        <code>talk into</code> 是說服某人去做某事，意思和 <code>talk out of</code> 相反。<br /><code
          >talk into</code
        >
        沒有小品詞，只有介系詞 <code>into</code>，是介系詞動詞。
      </p>
    </NoteSlide>

    <NoteSlide title="代名詞和名詞都放在小品詞前面" mark="him">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Can you', kind: 'dim' },
          { t: 'let', role: '動詞' },
          { t: 'me', role: '代名詞', kind: 'key', ring: true },
          { t: 'in', role: '小品詞' },
          { t: 'on', role: '介系詞' },
          { t: 'the joke?', kind: 'dim' },
        ]"
      />
      <p class="translation">那個笑話在笑什麼，可以跟我說嗎？</p>
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Did anyone', kind: 'dim' },
          { t: 'let', role: '動詞' },
          { t: 'your parents', role: '名詞', kind: 'key', ring: true },
          { t: 'in', role: '小品詞' },
          { t: 'on', role: '介系詞' },
          { t: 'the plan?', kind: 'dim' },
        ]"
      />
      <p class="translation">有人跟你爸媽說這個計畫了嗎？</p>
      <p class="remark">
        <code>let in on</code>、<code>put up to</code>、<code>talk out of</code>、<code
          >take up on</code
        >
        的名詞受詞也放在小品詞前面。
      </p>
    </NoteSlide>

    <NoteSlide title="hand over 的名詞受詞，可以放在小品詞後面" mark="him">
      <NoteWords
        :size="24"
        :move="{ from: 2, to: 4 }"
        :parts="[
          { t: 'We', kind: 'dim' },
          { t: 'handed', role: '動詞' },
          { t: 'the case', role: '名詞', kind: 'key' },
          { t: 'over', role: '小品詞' },
          { role: '也可以放這裡' },
          { t: 'to', role: '介系詞' },
          { t: 'the police.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們把這個案子交給了警方。</p>
      <p class="remark">
        <code>hand over</code>、<code>sign up</code>
        的第一個受詞是名詞時，可以放在小品詞前面或後面。
      </p>
    </NoteSlide>

    <NoteSlide title="第二個受詞可以是名詞、代名詞、動詞-ing 或 wh 子句" mark="it">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="We'll take them up on the invitation."
              :marks="['the invitation']"
            /><span class="translation">我們會接受他們的邀請。</span></span
          >
        </div>
        <div>
          <span class="term">代名詞</span>
          <span
            ><NoteMark sentence="Nobody put me up to it." :marks="['it']" /><span
              class="translation"
              >沒有人慫恿我。</span
            ></span
          >
        </div>
        <div>
          <span class="term">動詞-ing</span>
          <span
            ><NoteMark
              sentence="We talked him out of selling the car."
              :marks="['selling the car']"
            /><span class="translation">我們勸他不要賣掉那台車。</span></span
          >
        </div>
        <div>
          <span class="term">wh 子句</span>
          <span
            ><NoteMark sentence="Fill me in on what I missed." :marks="['what I missed']" /><span
              class="translation"
              >我錯過了什麼，跟我說一下。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="第二個受詞移到前面，介系詞留在句尾" mark="it">
      <NoteWords
        :size="22"
        :move="{ from: 6, to: 1 }"
        :parts="[
          { t: 'That\'s not', kind: 'dim' },
          { t: 'something', role: '第二個受詞\n（something）', kind: 'key' },
          { t: 'I\'d', kind: 'dim' },
          { t: 'put', role: '動詞' },
          { t: 'anyone', role: '第一個受詞\n（someone）' },
          { t: 'up to', role: '小品詞＋介系詞' },
          { role: '原本的位置' },
        ]"
      />
      <p class="translation">那種事我不會慫恿別人去做。</p>
      <p class="remark">第二個受詞移到句子前面時，介系詞留在句尾。</p>
    </NoteSlide>

    <NoteSlide title="代名詞不能放在小品詞後面" mark="him">
      <NoteFix wrong="She let in me on her secret." right="She let me in on her secret." fix="me">
        第一個受詞是代名詞時，放在小品詞前面。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="put up to 要有第一個受詞" mark="him">
      <NoteFix wrong="Her friends put up to it." right="Her friends put her up to it." fix="her#2">
        <code>put up to</code> 要有第一個受詞。<br />第一個受詞是被慫恿的人。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="介系詞後面接動詞-ing，不接原形動詞" mark="it">
      <NoteFix
        wrong="They talked him out of go to the police."
        right="They talked him out of going to the police."
        fix="going"
      >
        <code>of</code> 是介系詞。<br />介系詞後面接名詞或動詞-&#x2060;ing。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="介系詞後面不接 that 子句" mark="it">
      <NoteFix
        wrong="She let me in on that the deal had collapsed."
        right="She let me in on the fact that the deal had collapsed."
        fix="the fact"
      >
        介系詞後面不接 <code>that</code> 子句。<br />在 <code>that</code> 前面加名詞，像
        <code>the fact</code>。<br />也可以改用 wh 子句，像
        <code>let me in on what had happened</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="take up on 不能少了 up" mark="up">
      <NoteFix
        wrong="He took her on her offer of a job."
        right="He took her up on her offer of a job."
        fix="up"
      >
        <code>take up on</code> 的小品詞是 <code>up</code>。<br />少了小品詞，意思就不是接受提議。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="look after 只有一個受詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Someone has to', kind: 'dim' },
          { t: 'look', role: '動詞', kind: 'key' },
          { role: '沒有小品詞' },
          { t: 'after', role: '介系詞', kind: 'key' },
          { t: 'the kids.', role: '受詞' },
        ]"
      />
      <p class="translation">總得有人照顧小孩。</p>
      <p class="remark">
        <code>look after</code> 沒有小品詞，只有一個受詞。<br />受詞放在介系詞後面。
      </p>
    </NoteSlide>

    <NoteSlide title="put up with 沒有第一個受詞" mark="him">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I don\'t know how she', kind: 'dim' },
          { t: 'puts', role: '動詞', kind: 'key' },
          { role: '沒有第一個受詞\n（someone）' },
          { t: 'up', role: '小品詞', kind: 'key' },
          { t: 'with', role: '介系詞', kind: 'key' },
          { t: 'him.', role: '受詞' },
        ]"
      />
      <p class="translation">我不知道她怎麼受得了他。</p>
      <p class="remark"><code>put up with</code> 的受詞放在 <code>with</code> 後面。</p>
    </NoteSlide>

    <NoteSlide title="take up 是開始從事，take up on 是接受提議">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'She', kind: 'dim' },
          { t: 'took', role: '動詞', kind: 'key' },
          { t: 'up', role: '小品詞', kind: 'key' },
          { t: 'cycling', role: '受詞' },
          { t: 'last year.', kind: 'dim' },
        ]"
      />
      <p class="translation"><code>take up</code>：開始從事。她去年開始騎腳踏車。</p>
      <NoteWords
        :size="22"
        :parts="[
          { t: 'She', kind: 'dim' },
          { t: 'took', role: '動詞', kind: 'key' },
          { t: 'me', role: '第一個受詞\n（someone）' },
          { t: 'up', role: '小品詞', kind: 'key' },
          { t: 'on', role: '介系詞', kind: 'key' },
          { t: 'my offer of a lift.', role: '第二個受詞\n（something）' },
        ]"
      />
      <p class="translation">
        <code>take up on</code>：接受某人的提議。她接受了我說要載她一程的提議。
      </p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
