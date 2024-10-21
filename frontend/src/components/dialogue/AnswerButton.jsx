/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function AnswerButton({ status, answer, handleAnswer }) {
  return (
    <button
      className={`${s.btn} ${s.answerBtn}`}
      onClick={(e) => handleAnswer(e)}
    >
      <img
        src={`/assets/button/answer-btn-${
          status ? (answer ? "correct" : "wrong") : "inactive"
        }.svg`}
        alt="answer button icon"
        id={answer ? "true" : "false"}
      />
    </button>
  );
}
