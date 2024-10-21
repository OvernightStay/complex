/* eslint-disable react/prop-types */
import s from "./styles.module.css";
import ProgressBar from "../progress/ProgressBar";
import { useEffect, useState } from "react";

export default function TestComponent({ name, pos, setTime }) {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    if (timer <= 0) setTime(false);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div
      className={`${s.test}  ${pos === 0 && s.animate} ${
        pos === 1 ? s.right : ""
      }`}
    >
      <ProgressBar />
      <img src={`/assets/characters/${name}.svg`} alt="mathew icon" />
    </div>
  );
}
