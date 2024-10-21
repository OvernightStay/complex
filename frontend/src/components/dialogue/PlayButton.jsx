/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function PlayButton({ handlePlay }) {
  return (
    <button className={`${s.btn} ${s.playBtn}`} onClick={handlePlay}>
      Играть
    </button>
  );
}
