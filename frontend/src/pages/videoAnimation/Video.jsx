/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import s from "./styles.module.css";

export default function Video({ setStep }) {
  const navigation = useNavigate();

  function handleNavigate() {
    navigation("/night-bus-intro");
    setStep(0);
  }

  return (
    <div className={s.videoContainer}>
      <video className={s.fullscreenVideo} autoPlay onEnded={handleNavigate}>
        <source src="/assets/video/night-bus.mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
