import './PrevButton.scss';
import { PrevBtnPropsType } from './types';

export default function PrevButton({ prevQuestion }: PrevBtnPropsType) {
  return (
    <button onClick={prevQuestion} className="button prev-btn">Назад</button>
  );
}
