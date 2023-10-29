type QuestionPropsType = {
  questionId: number;
  question: string;
  options: string[];
  selectedValue: string;
  onRadioChange: (value: string) => void;
};

export type { QuestionPropsType };
