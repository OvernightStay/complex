/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Rehab({ type, handleError }) {
  return (
    <button
      className={`${s.point} ${s.rehab} ${
        type ? s.rehabActive : s.rehabInactive
      }`}
      id="rehab"
      onClick={(e) => handleError(e)}
    ></button>
  );
}
