/* eslint-disable react/prop-types */
import s from "./styles.module.css";
import AnswerButton from "./AnswerButton";

export default function Question({ data, handleAnswer, isAnswered }) {
  return (
    <ul className={s.question}>
      {data.map((option, i) => (
        <li className={s.option} key={i}>
          <AnswerButton
            status={isAnswered}
            answer={option.correctAnswer}
            handleAnswer={handleAnswer}
          />
          <p className={s.text}>{option.text}</p>
        </li>
      ))}
    </ul>
  );
}
