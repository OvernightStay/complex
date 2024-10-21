/* eslint-disable react/prop-types */
import s from "./styles.module.css";
import Mud from "../../components/mud/Mud";
import User from "../../components/characters/user/User";
import Cat from "../../components/characters/cat/Cat";
import Dialogue from "../../components/dialogue/Dialogue";
import Settings from "../../components/settingsIcon/Settings";

export default function NightBusIntro({ data, step, setStep }) {
  const catType = step === 3 ? "waves" : "basic";
  const position = step === 1 || step === 4;
  const speaking = position ? "Имя пользователя" : "Статус";

  return (
    <div className={`${s.nightBusContainer} ${s.nightBusIntro}`}>
      <Settings />
      <Mud />
      <User speaking={position} />
      <Cat type={catType} position={false} speaking={position} />
      <Dialogue
        data={data}
        step={step}
        setStep={setStep}
        question={false}
        position={position}
        speaking={speaking}
        navigate="night-bus-entry"
      />
    </div>
  );
}
