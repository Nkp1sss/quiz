import { useState } from 'react';
import { questions } from './constants';
import { SelectedItemsType } from './types';
import Question from '../Question';
import PrevButton from '../Buttons/PrevButton';
import NextButton from '../Buttons/NextButton';
import ResultButton from '../Buttons/ResultButton';

import './Quiz.scss';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [selectedItems, setSelectedItems] = useState<SelectedItemsType>({});

  const handleQuestionChange = (questionId: number, value: string) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [questionId]: value,
    }));
  };

  return (
    <main className="quiz">
      <div className="container">
        <h1 className="title">Онлайн-подбор средств для лица</h1>
        <p className="message">
          Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов
        </p>
        <div className="question-wrapper">
          <div className="dots-container">
            {
              questions.map((_, id) => {
                return (
                  <span
                    className={id === currentQuestion - 1 ? "dot active" : "dot"}
                    key={id}
                    onClick={() => setCurrentQuestion(id + 1)}
                  >
                  </span>
                )
              })
            }
          </div>
          <p className="question__number">Вопрос {currentQuestion} из {questions.length}</p>
          <Question
            {...questions[currentQuestion - 1]}
            selectedValue={selectedItems[currentQuestion] || ''}
            onRadioChange={(value) => handleQuestionChange(currentQuestion, value)}
          />
          <div className="buttons">
            {currentQuestion !== 1 &&
              <PrevButton
                prevQuestion={() => setCurrentQuestion(currentQuestion - 1)}
              />
            }
            {currentQuestion !== questions.length &&
              <NextButton
                nextQuestion={() => setCurrentQuestion(currentQuestion + 1)}
              />
            }
            {currentQuestion === questions.length && <ResultButton />}
          </div>
        </div>
      </div>
    </main>
  );
}
