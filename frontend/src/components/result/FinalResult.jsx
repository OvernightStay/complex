/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import s from "./styles.module.css";

export default function FinalResult({ moodCount, handleResetGame }) {
  let heading;

  const navigate = useNavigate();

  if (moodCount.good === 9) heading = "Превосходно";
  if (moodCount.good === 8) heading = "Отлично";
  if (moodCount.good === 7) heading = "Молодец";
  if (moodCount.good < 7) heading = "Попробуй снова";

  function handleFinishGame() {
    navigate("/night-bus-game-end");
  }

  return (
    <div className={s.finalResult}>
      <h1 className={s.finalResultHeading}>{heading}!</h1>
      <div className={s.finalResultText}>
        <p>Довольные</p>
        <span>{moodCount.good} / 9</span>
      </div>
      <div className={s.finalResultText}>
        <p>Недовольные</p>
        <span>{moodCount.bad} / 9</span>
      </div>

      <button
        className={`${s.finalResultButton} ${s.primary}`}
        onClick={handleResetGame}
      >
        Попробовать снова
      </button>
      <button
        className={`${s.finalResultButton} ${s.secondary}`}
        onClick={handleFinishGame}
      >
        Завершить
      </button>
    </div>
  );
}
