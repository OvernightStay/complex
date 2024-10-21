/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function NextButton({ handleStep }) {
  return (
    <button className={`${s.btn} ${s.nextBtn}`} onClick={handleStep}>
      <img src="/assets/button/next-btn.svg" alt="next button icon" />
    </button>
  );
}
