/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function OldLady({ turn }) {
  return (
    <img
      className={`${s.oldLady}  ${turn && s.animate}`}
      src={`/assets/characters/old-lady.svg`}
      alt="old lady"
    />
  );
}
