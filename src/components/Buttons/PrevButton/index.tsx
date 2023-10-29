import { PrevBtnPropsType } from './types';

import './PrevButton.scss';

export default function PrevButton({ prevQuestion }: PrevBtnPropsType) {
  return (
    <button onClick={prevQuestion} className="button prev-btn">Назад</button>
  );
}
