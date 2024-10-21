/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Cat({ type, position, speaking }) {
  return (
    <img
      className={`${s.cat} ${position ? s.right : s.left} ${
        !speaking ? s.animate : ""
      }`}
      src={`/assets/cat/cat-${type}.svg`}
      alt="Cat icon"
    />
  );
}
