/* eslint-disable react/prop-types */
import s from "./styles.module.css";
import Cat from "../../components/characters/cat/Cat";
import Dialogue from "../../components/dialogue/Dialogue";
import User from "../../components/characters/user/User";
import Mud from "../../components/mud/Mud";
import NightBusEntryBackground from "./NightBusEntryBackground";
import Fliers from "../../components/fliers/Fliers";
import Settings from "../../components/settingsIcon/Settings";

export default function NightBusEntry({ data, step, setStep }) {
  const position = step === 2 || step === 5 || step === 8;
  const speaking = position ? "Имя пользователя" : "Статус";
  const fliers = step === 7 || step === 8;
  return (
    <div className={`${s.nightBusContainer} ${s.nightBusEntry}`}>
      <NightBusEntryBackground step={step} />
      <Settings />
      <Mud />
      <User speaking={position} />
      <Cat type="basic" position={false} speaking={position} />
      {fliers && <Fliers />}
      <Dialogue
        data={data}
        step={step}
        setStep={setStep}
        question={false}
        position={position}
        speaking={speaking}
        navigate="night-bus-story"
      />
    </div>
  );
}
