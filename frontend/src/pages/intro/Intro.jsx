/* eslint-disable react/prop-types */
import s from "./styles.module.css";
import Cat from "../../components/characters/cat/Cat";
import Dialogue from "../../components/dialogue/Dialogue";
import Settings from "../../components/settingsIcon/Settings";

export default function Intro({ data, step, setStep }) {
  const cat = step === 1 ? "surprised" : step === 5 ? "waves" : "basic";
  const position = step === 0 || step >= 6;
  const speaking = "Статус";
  const settings = step >= 6;

  return (
    <div className={s.intro}>
      {settings && <Settings settings={settings} />}
      <Cat type={cat} position={position} />
      <Dialogue
        data={data}
        step={step}
        setStep={setStep}
        question={false}
        position={position}
        speaking={speaking}
        navigate="video"
      />
    </div>
  );
}
