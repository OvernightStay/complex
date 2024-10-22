/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function NextButton({ handleStep, disabled }) {
  return (
    <button
      className={`${s.btn} ${s.nextBtn}`}
      onClick={handleStep}
      disabled={disabled}
    >
      <img src="/assets/button/next-btn.svg" alt="next button icon" />
    </button>
  );
}
