/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function NightHome({ type, handleError }) {
  return (
    <div
      className={`${s.point} ${s.nightHome} ${
        type ? s.nightHomeActive : s.nightHomeInactive
      }`}
      onClick={handleError}
    ></div>
  );
}
