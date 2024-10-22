/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function HalfWayHome({ type, handleError }) {
  return (
    <button
      className={`${s.point} ${s.halfWayHome} ${
        type ? s.halfWayHomeActive : s.halfWayHomeInactive
      }`}
      onClick={handleError}
    ></button>
  );
}
