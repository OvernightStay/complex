/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function ConsultingCenter({ type, handleError }) {
  return (
    <button
      className={`${s.point} ${s.consulting} ${
        type ? s.consultingActive : s.consultingInactive
      }`}
      onClick={handleError}
    ></button>
  );
}
