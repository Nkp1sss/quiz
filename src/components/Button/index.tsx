import { BtnPropsType } from "./types";

import './Button.scss';

export default function Button({ onClick, text, classes }: BtnPropsType) {
  return (
    <button onClick={onClick} className={`button ${classes}`}>{text}</button>
  );
}
