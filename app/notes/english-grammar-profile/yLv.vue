<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// discourse-markers-form-use-comparing, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="前一句寫一件事，言談標記引出相似的另一件事" mark="In the same way">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Tea is popular in China.', role: '前一句', kind: 'dim' },
          { t: 'Similarly,', role: '言談標記', kind: 'key' },
          { t: 'coffee is popular in Italy.', role: '相似的情況' },
        ]"
      />
      <p class="translation">茶在中國很受歡迎。同樣地，咖啡在義大利很受歡迎。</p>
      <p class="remark">言談標記放在句首時，後面加逗號。</p>
    </NoteSlide>

    <NoteSlide title="常見的表示比較的言談標記">
      <div class="rows is-labeled">
        <div>
          <span class="term">similarly</span>
          <span
            ><NoteMark
              sentence="Boys need sport lessons. Similarly, girls need them."
              :marks="['Similarly,']"
            /><span class="translation">男孩需要上體育課。同樣地，女孩也需要。</span></span
          >
        </div>
        <div>
          <span class="term">likewise</span>
          <span
            ><NoteMark
              sentence="The staff were friendly. Likewise, the guide was helpful."
              :marks="['Likewise,']"
            /><span class="translation">員工很友善。同樣地，導遊也很熱心。</span></span
          >
        </div>
        <div>
          <span class="term">in the same way</span>
          <span
            ><NoteMark
              sentence="A plant needs water. In the same way, a child needs love."
              :marks="['In the same way,']"
            /><span class="translation">植物需要水。同樣地，孩子需要愛。</span></span
          >
        </div>
        <div>
          <span class="term">in a similar way</span>
          <span
            ><NoteMark
              sentence="Birds fly south in winter. In a similar way, some fish swim to warmer seas."
              :marks="['In a similar way,']"
            /><span class="translation"
              >鳥在冬天往南飛。同樣地，有些魚會游到比較溫暖的海域。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="言談標記也可以放在主詞、be 動詞或助動詞後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 動詞後面</span>
          <span
            ><NoteMark
              sentence="The first test was easy. The second test was similarly easy."
              :marks="['similarly']"
            /><span class="translation">第一次考試很簡單。第二次考試同樣很簡單。</span></span
          >
        </div>
        <div>
          <span class="term">助動詞後面</span>
          <span
            ><NoteMark
              sentence="My parents never watch TV. My grandparents have likewise stopped watching it."
              :marks="['likewise']"
            /><span class="translation">我爸媽從來不看電視。我祖父母同樣也不看了。</span></span
          >
        </div>
        <div>
          <span class="term">主詞後面</span>
          <span
            ><NoteMark
              sentence="Anna uses French at work. Her brother likewise uses French in his job."
              :marks="['likewise']"
            /><span class="translation">Anna 工作時用法語。她弟弟工作時同樣用法語。</span></span
          >
        </div>
      </div>
      <p class="remark">
        放在句中時，<code>similarly</code> 和 <code>likewise</code> 前後可以不加逗號。
      </p>
    </NoteSlide>

    <NoteSlide title="分號後面的言談標記，後面加逗號">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Prices rose in May;', role: '分號', kind: 'dim' },
          { t: 'similarly,', role: '言談標記', kind: 'key' },
          { t: 'they rose again in June.', role: '相似的情況' },
        ]"
      />
      <p class="translation">物價在五月上漲了；同樣地，六月又漲了一次。</p>
    </NoteSlide>

    <NoteSlide title="原句：in the same way 引出讀書" mark="In the same way">
      <NoteWords
        :size="22"
        :parts="[
          {
            t: 'When you read a letter, you can almost feel the writer\'s emotions.',
            role: '前一句',
            kind: 'dim',
          },
          { t: 'In the same way,', role: '言談標記', kind: 'key' },
          { t: 'when you read a book, you can feel the author\'s emotions.', role: '相似的情況' },
        ]"
      />
      <p class="translation">
        讀信的時候，你幾乎能感受到寫信人的情緒。同樣地，讀書的時候，你也能感受到作者的情緒。
      </p>
    </NoteSlide>

    <NoteSlide title="言談標記用副詞 similarly，不用形容詞 similar">
      <NoteFix
        wrong="Our school has a library. Similar, the town has a big library."
        right="Our school has a library. Similarly, the town has a big library."
        fix="Similarly,"
      />
    </NoteSlide>

    <NoteSlide title="in the same way 的 same 前面加 the" mark="In the same way">
      <NoteFix
        wrong="Cats sleep a lot. In same way, dogs sleep most of the day."
        right="Cats sleep a lot. In the same way, dogs sleep most of the day."
        fix="the"
      />
    </NoteSlide>

    <NoteSlide title="likewise 是副詞，兩個子句之間用分號或句號">
      <NoteFix
        wrong="The bus was late, likewise the train was late."
        right="The bus was late; likewise, the train was late."
        fix="late; likewise,"
      />
    </NoteSlide>

    <NoteSlide title="兩件事相反時，用 in contrast">
      <NoteFix
        wrong="My sister loves cats. Likewise, my brother hates them."
        right="My sister loves cats. In contrast, my brother hates them."
        fix="In contrast,"
      >
        表示比較的言談標記引出相似的事。也可以用 <code>on the other hand</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="like 後面接名詞片語，Likewise. 可以單獨回話" mark="In the same way">
      <div class="rows is-labeled">
        <div>
          <span class="term">like<br /><i>介系詞</i></span>
          <span
            ><NoteMark
              sentence="Like Japan, Korea has four seasons."
              :marks="['Like Japan,']"
            /><span class="translation">韓國跟日本一樣有四季。</span></span
          >
        </div>
        <div>
          <span class="term">Likewise.<br /><i>回話</i></span>
          <span
            ><NoteMark
              sentence='"It was nice to meet you." "Likewise."'
              :marks="['Likewise.']"
            /><span class="translation">「很高興認識你。」「我也是。」</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
