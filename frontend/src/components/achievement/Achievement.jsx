/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Achievement({ handleGetAchievement }) {
  return (
    <div className={s.achievement}>
      <h1>Кружки дружбы</h1>
      <img src="/assets/achievement/mug.svg" alt="mug achievements" />
      <button onClick={handleGetAchievement}>Забрать</button>
    </div>
  );
}
