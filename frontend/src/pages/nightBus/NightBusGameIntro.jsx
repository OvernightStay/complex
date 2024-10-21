/* eslint-disable react/prop-types */
import s from "./styles.module.css";
import { useState } from "react";
import Screen from "../screenChange/Screen";
import Settings from "../../components/settingsIcon/Settings";
import Home from "../../components/homeIcon/Home";
import Progress from "../../components/progress/Progress";
import Cat from "../../components/characters/cat/Cat";
import Dialogue from "../../components/dialogue/Dialogue";
import Book from "../../components/book/Book";

export default function NightBusGameIntro({ step, setStep, data, level }) {
  const [screen, setScreen] = useState(true);
  const playBtn = step === 1;

  setTimeout(() => {
    setScreen(false);
  }, 5000);

  return (
    <>
      {screen ? (
        <Screen />
      ) : (
        <div
          className={`${s.nightBusGame} ${
            step === 0 ? s.nightBusGameIntro : s.nightBusGamePlay
          }`}
        >
          <Settings />
          {step === 0 && (
            <>
              <Home level={level} />
              <Progress status="green" />
              <Book />
            </>
          )}

          <Cat type="basic" />
          <Dialogue
            data={data}
            step={step}
            setStep={setStep}
            question={false}
            position={false}
            speaking="Статус"
            playBtn={playBtn}
          />
        </div>
      )}
    </>
  );
}

// 1. Result Page with buttons
// 2. Congratulations from cat Page
// 3. Achieve Page
// 4. Bagpack Icon Page
// 5. Home Icon Change Page
// 6. Home Inside Picture Page
// 7. Map Icon
// 8. Cat Icon
// 9. End

// 1. change characters' mood based on status
// 2. change direction of characters based on their position
