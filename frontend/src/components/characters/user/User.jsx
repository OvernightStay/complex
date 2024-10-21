/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function User({ speaking }) {
  return (
    <img
      className={`${s.user} ${speaking ? s.animate : ""}`}
      src={`/assets/user/user.svg`}
      alt="Cat icon"
    />
  );
}
