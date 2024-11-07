/* eslint-disable react/prop-types */
import s from "./styles.module.css";
import ProgressBar from "../progress/ProgressBar";
import { useEffect, useState } from "react";

export default function CharactersInline({ name, pos, setTime }) {
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
      className={`${s.charactersInline}  ${pos === 0 && s.animate} ${
        pos === 1 && s.right
      } ${pos === 2 && s.left}`}
    >
      <ProgressBar />
      <img src={`/assets/characters/${name}.svg`} className={s.characterInlineImg} alt={`${name} icon`} />
    </div>
  );
}
