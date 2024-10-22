/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import s from "./styles.module.css";

export default function HeatingButton({ type, navigate }) {
  const navigation = useNavigate();

  function handleNavigate() {
    navigation(`/${navigate}`);
  }
  return (
    <button
      className={`${s.point} ${s.heatingPoint} ${
        type ? s.heatingPointActive : s.heatingPointInactive
      }`}
      onClick={handleNavigate}
    ></button>
  );
}
