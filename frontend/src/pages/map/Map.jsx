/* eslint-disable react/prop-types */
import s from "./styles.module.css";
import NursingHome from "./NursingHome";
import Rehab from "./Rehab";
import HalfWayHome from "./HalfWayHome";
import Laundry from "./Laundry";
import ConsultingCenter from "./ConsultingCenter";
import NightHome from "./NightHome";
import DistributionPoint from "./DistributionPoint";
import PsychologistButton from "./PsychologistButton";
import HeatingButton from "./HeatingButton";
import NeravnodushButton from "./NeravnodushButton";
import NightBusButton from "./NightBusButton";
import Home from "../../components/homeIcon/Home";
import Progress from "../../components/progress/Progress";
import Book from "../../components/book/Book";
import Bag from "../../components/bag/Bag";
import Settings from "../../components/settingsIcon/Settings";
import CatIcon from "../../components/catIcon/CatIcon";
import CatError from "../../components/characters/cat/CatError";
import { useState } from "react";

export default function Map({ level }) {
  const [error, setError] = useState(false);
  const [isRehab, setRehab] = useState("");

  function handleError(e) {
    setError(true);
    setRehab(e.target.id);
    setTimeout(() => {
      setError(false);
      setRehab("");
    }, 3500);
  }

  return (
    <div className={s.mapContainer}>
      <div className={s.map}>
        <img src="/assets/map/map.svg" alt="main map" />
        <NursingHome handleError={handleError} />
        <Rehab type={true} handleError={handleError} />
        <HalfWayHome handleError={handleError} />
        <Laundry handleError={handleError} />
        <ConsultingCenter handleError={handleError} />
        <NightHome handleError={handleError} />
        <DistributionPoint type={true} navigate="distribution-game" />
        <PsychologistButton type={true} navigate="psychologist-point" />
        <HeatingButton type={true} navigate="heating-game" />
        <NeravnodushButton type={true} navigate="neravnodush-game" />
        <NightBusButton type={true} navigate="night-bus-intro" />
      </div>
      <Home level={level} />
      <Progress status="green" />
      <Book />
      <Bag />
      <Settings />
      <CatIcon />
      <CatError error={error} isRehab={isRehab} />
    </div>
  );
}
