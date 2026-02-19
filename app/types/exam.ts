export class WordToken {
  public text: string = '';
  public isMasked: boolean = true;
  public static from(json: any): WordToken {
    const token = new WordToken();
    if (json) {
      token.text = json.text ?? '';
      token.isMasked = typeof json.isMasked === 'boolean' ? json.isMasked : true;
    }
    return token;
  }
}
export type ExamType = 'LISTENING';
export type ExamInteractionMode = 'TYPING' | 'ASSEMBLY';

export interface WordDetail {
  id: number;
  public_id: string;
  word: string;
  locale: string;
  markdown: string;
}

export interface GrammarDetail {
  id: number;
  public_id: string;
  category: string;
  value: string;
  markdown: string;
  locale: string;
}

export class ListeningExam {
  public type: string = 'LISTENING';
  public hint: string = '';
  public answer: string = '';
  public tokens: WordToken[] = [];
  public audioUrl: string = '';
  public interactionMode: ExamInteractionMode = 'TYPING';
  public wordDetails: WordDetail[] = [];
  public grammarDetails: GrammarDetail[] = [];
  public static from(json: any): ListeningExam {
    const exam = new ListeningExam();
    Object.assign(exam, json);
    if (json.tokens && Array.isArray(json.tokens)) {
      exam.tokens = json.tokens.map((t: any) => WordToken.from(t));
    }
    if (json.wordDetails && Array.isArray(json.wordDetails)) {
      exam.wordDetails = json.wordDetails;
    }
    if (json.grammarDetails && Array.isArray(json.grammarDetails)) {
      exam.grammarDetails = json.grammarDetails;
    }
    return exam;
  }
}

export class ExamFactory {
  public static fromList(list: any[]): (ListeningExam | any)[] {
    if (!Array.isArray(list)) return [];
    return list
      .filter((item) => item && typeof item.type === 'string')
      .map((item) => {
        if (item.type === 'LISTENING') {
          return ListeningExam.from(item);
        }
        return item;
      });
  }
}
