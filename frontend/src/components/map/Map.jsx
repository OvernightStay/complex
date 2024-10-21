/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Map({ map }) {
  return (
    <img
      src="/assets/icons/map.svg"
      alt="map icon"
      className={`${s.map} ${map ? s.animate : ""}`}
    />
  );
}
