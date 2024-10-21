/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Michael({ cat, speaking }) {
  return (
    <img
      className={`${s.michael} ${cat ? s.middle : s.left} ${
        speaking ? s.animate : ""
      }`}
      src={`/assets/michael/michael.svg`}
      alt="Cat icon"
    />
  );
}
