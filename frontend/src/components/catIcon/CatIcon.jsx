/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function CatIcon({ catIcon }) {
  return (
    <img
      src="/assets/icons/cat-avatar.svg"
      alt="cat avatar icon"
      className={`${s.catIcon} ${catIcon ? s.animate : ""}`}
    />
  );
}
