import { NextBtnPropsType } from "./types";

export default function NextButton({ nextQuestion }: NextBtnPropsType) {
  return (
    <button onClick={nextQuestion} className="button next-btn">Дальше</button>
  );
}
