/* eslint-disable react/prop-types */
import s from "./styles.module.css";
import Label from "./Label";
import NextButton from "./NextButton";
import Text from "./Text";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PlayButton from "./PlayButton";

export default function Dialogue({
  data,
  step,
  setStep,
  position,
  speaking,
  question,
  setProgress,
  navigate,
  playBtn,
  setLevel,
  homeLevel,
  disabled,
}) {
  const navigation = useNavigate();
  const [isAnswered, setAnswered] = useState(false);

  function handleStep() {
    if (step < data.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      setStep(data.length);
      navigation(`/${navigate}`);
      setStep(0);
    }
    if (homeLevel) setLevel((prev) => prev + 1);

    if (question) {
      if (!isAnswered) {
        setProgress((prev) => [...prev, "false"]);
      }
    }
    setAnswered(false);
  }

  function handlePlay() {
    navigation("/night-bus-game-play");
    setStep(0);
  }

  function handleAnswer(e) {
    const answerId = e.target.id;
    if (!isAnswered) {
      setProgress((prev) => [...prev, answerId]);
      setAnswered(true);
    }
  }

  return (
    <div className={`${s.dialogueWrapper} ${position ? s.right : s.left}`}>
      <div className={s.dialogue}>
        <Label position={position}>{speaking}</Label>
        {playBtn ? (
          <PlayButton handlePlay={handlePlay} />
        ) : (
          <NextButton handleStep={handleStep} disabled={disabled} />
        )}
        {question ? (
          <Question
            data={data[step]?.options}
            handleAnswer={handleAnswer}
            isAnswered={isAnswered}
          />
        ) : (
          <Text>{data[step]?.text || ""}</Text>
        )}
      </div>
    </div>
  );
}
