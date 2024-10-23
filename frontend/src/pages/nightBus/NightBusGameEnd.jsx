/* eslint-disable react/prop-types */
import s from "./styles.module.css";
import Achievement from "../../components/achievement/Achievement";
import Bag from "../../components/bag/Bag";
import Book from "../../components/book/Book";
import Cat from "../../components/characters/cat/Cat";
import HomeExperience from "../../components/homeExperience/HomeExperience";
import Dialogue from "../../components/dialogue/Dialogue";
import Home from "../../components/homeIcon/Home";
import Progress from "../../components/progress/Progress";
import Settings from "../../components/settingsIcon/Settings";
import MapIcon from "../../components/mapIcon/MapIcon";
import CatIcon from "../../components/catIcon/CatIcon";

export default function NightBusGameEnd({
  data,
  step,
  setStep,
  level,
  setLevel,
}) {
  const achievement = step === 1;
  const bag = step >= 2;
  const homeLevel = step === 2;
  const homeIcon = step === 3;
  const experience = step === 4;
  const map = step >= 5;
  const catIcon = step >= 6;
  const disabled = step === data.length - 1 || achievement;

  function handleGetAchievement() {
    setStep((prev) => prev + 1);
  }

  return (
    <div
      className={`${s.nightBusGame} ${s.nightBusGamePlay} ${s.finalResult} ${s.nightBusGameEnd}`}
    >
      <Home level={level} homeIcon={homeIcon} />
      <Progress status="green" />
      <Book />
      <Settings />
      <Cat type="basic" />
      <Dialogue
        data={data}
        step={step}
        setStep={setStep}
        question={false}
        position={false}
        speaking="Статус"
        navigate="test"
        setLevel={setLevel}
        homeLevel={homeLevel}
        disabled={disabled}
      />
      {achievement && (
        <Achievement handleGetAchievement={handleGetAchievement} />
      )}
      {bag && <Bag bag={bag} />}
      {experience && <HomeExperience />}
      {map && <MapIcon map={map} />}
      {catIcon && <CatIcon catIcon={catIcon} />}
    </div>
  );
}
