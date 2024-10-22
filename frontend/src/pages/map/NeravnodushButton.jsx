/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import s from "./styles.module.css";

export default function NeravnodushButton({ type, navigate }) {
  const navigation = useNavigate();

  function handleNavigate() {
    navigation(`/${navigate}`);
  }

  return (
    <button
      className={`${s.point} ${s.neravnodush} ${
        type ? s.neravnodushActive : s.neravnodushInactive
      }`}
      onClick={handleNavigate}
    ></button>
  );
}
