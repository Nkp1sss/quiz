import { QuestionPropsType } from './types';

import './Question.scss';

export default function Question({ questionId, question, options, selectedValue, onRadioChange }: QuestionPropsType) {
  const isRadioSelected = (value: string) => selectedValue === value;

  return (
    <>
      <p className="question__title">{question}</p>
      <div className="options">
        {
          options.map((option, id) => {
            return (
              <div className="option" key={id}>
                <input
                  type="radio"
                  id={`option-${id + 1}`}
                  name={`radiobutton-${questionId}`}
                  value={option}
                  checked={isRadioSelected(option)}
                  onChange={(e) => onRadioChange(e.target.value)}
                />
                <label htmlFor={`option-${id + 1}`}>{option}</label>
              </div>
            )
          })
        }
      </div>
    </>
  );
}
