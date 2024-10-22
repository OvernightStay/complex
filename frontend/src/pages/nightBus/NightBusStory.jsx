/* eslint-disable react/prop-types */
import s from "./styles.module.css";
import Mud from "../../components/mud/Mud";
import User from "../../components/characters/user/User";
import Michael from "../../components/characters/michael/Michael";
import Psychologist from "../../components/characters/psychologist/Psychologist";
import Cat from "../../components/characters/cat/Cat";
import Dialogue from "../../components/dialogue/Dialogue";
import Progress from "../../components/progress/Progress";
import Settings from "../../components/settingsIcon/Settings";
import { useState } from "react";
import Home from "../../components/homeIcon/Home";
import Book from "../../components/book/Book";
import Screen from "../screenChange/Screen";
import { useNavigate } from "react-router-dom";

export default function NightBusStory({ data, step, setStep, level }) {
  const [screen, setScreen] = useState(true);
  const [progress, setProgress] = useState([]);
  const navigation = useNavigate();
  const falseCount = Number(
    progress.filter((value) => value === "false").length
  );

  setTimeout(() => {
    setScreen(false);
  }, 5000);

  if (falseCount >= 3) navigation("/book-mock");

  const status =
    falseCount === 1
      ? "yellow"
      : falseCount === 2
      ? "orange"
      : falseCount === 3
      ? "red"
      : "green";

  const cat =
    step === 0 || step === 1 || step === 2 || step === 9 || step === 16;

  const psychologist = step === 9;

  const michael =
    step === 3 ||
    step === 5 ||
    step === 7 ||
    step === 10 ||
    step === 12 ||
    step === 14;

  const user =
    step === 4 ||
    step === 6 ||
    step === 8 ||
    step === 11 ||
    step === 13 ||
    step === 15;

  const question =
    step === 4 ||
    step === 6 ||
    step === 8 ||
    step === 11 ||
    step === 13 ||
    step === 15;

  const progressIcon = step >= 1;
  const bookIcon = step >= 2;

  const speaking = user ? "Имя пользователя" : cat ? "Статус" : "Михаил";

  return (
    <>
      {screen ? (
        <Screen />
      ) : (
        <div
          className={`${s.nightBusStory} ${
            psychologist ? s.background2 : s.background1
          }`}
        >
          <Settings />
          <Home level={level} />
          {progressIcon && (
            <Progress status={status} progressIcon={progressIcon} />
          )}
          {bookIcon && <Book bookIcon={bookIcon} />}
          <Mud />
          <User speaking={user} />
          {psychologist ? (
            <Psychologist />
          ) : (
            <Michael cat={cat} speaking={michael} />
          )}
          {cat && <Cat type="basic" position={false} speaking={!cat} />}
          <Dialogue
            data={data}
            step={step}
            setStep={setStep}
            question={question}
            position={user}
            speaking={speaking}
            progress={progress}
            setProgress={setProgress}
            navigate="night-bus-game-intro"
          />
        </div>
      )}
    </>
  );
}
