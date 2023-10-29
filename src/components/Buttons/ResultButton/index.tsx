import { ResultBtnPropsType } from "./types";

export default function ResultButton({ getResults }: ResultBtnPropsType) {
  return (
    <button onClick={getResults} className="button result-btn">Узнать результат</button>
  );
}
