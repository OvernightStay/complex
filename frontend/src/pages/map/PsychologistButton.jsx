/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import s from "./styles.module.css";

export default function PsychologistButton({ type, navigate }) {
  const navigation = useNavigate();

  function handleNavigate() {
    navigation(`/${navigate}`);
  }

  return (
    <button
      className={`${s.point} ${s.psychologist} ${
        type ? s.psychologistActive : s.psychologistInactive
      }`}
      onClick={handleNavigate}
    ></button>
  );
}
