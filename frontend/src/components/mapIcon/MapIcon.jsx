/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import s from "./styles.module.css";

export default function MapIcon({ map }) {
  const navigation = useNavigate();

  return (
    <img
      src="/assets/icons/map.svg"
      alt="map icon"
      className={`${s.map} ${map ? s.animate : ""}`}
      onClick={() => navigation("/map")}
    />
  );
}
