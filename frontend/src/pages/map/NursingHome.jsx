/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function NursingHome({ type, handleError }) {
  return (
    <button
      className={`${s.point} ${s.nursingHome} ${
        type ? s.nursingHomeActive : s.nursingHomeInactive
      }`}
      onClick={handleError}
    >
      {" "}
    </button>
  );
}
