/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Laundry({ type, handleError }) {
  return (
    <button
      className={`${s.point} ${s.laundry} ${
        type ? s.laundryActive : s.laundryInactive
      }`}
      onClick={handleError}
    ></button>
  );
}
