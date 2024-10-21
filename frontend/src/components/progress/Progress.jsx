/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Progress({ status, progressIcon }) {
  return (
    <img
      src={`/assets/icons/progress-${status}.svg`}
      alt="progress status icon"
      className={`${s.progress} ${progressIcon ? s.animate : ""}`}
    />
  );
}
