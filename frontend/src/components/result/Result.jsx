/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Result({ moodCount }) {
  return (
    <div className={s.result}>
      <p>
        Довольных: <span>{moodCount.good}</span>
      </p>
      <p>
        Недовольных: <span>{moodCount.bad}</span>
      </p>
    </div>
  );
}
