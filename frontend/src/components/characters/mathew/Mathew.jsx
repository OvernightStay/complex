/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Mathew({ turn }) {
  return (
    <img
      className={`${s.mathew}  ${turn && s.animate}`}
      src={`/assets/characters/mathew.svg`}
      alt="mathew icon"
    />
  );
}
