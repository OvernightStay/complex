/* eslint-disable react/prop-types */
import { useState } from "react";
import s from "./styles.module.css";
import { useEffect } from "react";

const animaions = {
  animation1: [
    "/assets/background/background-night-bus-entry-animation1-step1.svg",
    "/assets/background/background-night-bus-entry-animation1-step2.svg",
  ],
  animation2: [
    "/assets/background/background-night-bus-entry-animation2-step1.svg",
    "/assets/background/background-night-bus-entry-animation2-step2.svg",
  ],
  animation3: [
    "/assets/background/background-night-bus-entry-animation3-step1.svg",
    "/assets/background/background-night-bus-entry-animation3-step2.svg",
  ],
  animation4: [
    "/assets/background/background-night-bus-entry-animation4-step1.svg",
  ],
  animation5: [
    "/assets/background/background-night-bus-entry-animation3-step2.svg",
  ],
  animation6: [
    "/assets/background/background-night-bus-entry-animation6-step1.svg",
  ],
  animation7: [
    "/assets/background/background-night-bus-entry-animation7-step1.svg",
  ],
};

export default function NightBusEntryBackground({ step }) {
  const [index, setIndex] = useState(0);

  let images;

  switch (step) {
    case 0:
      images = animaions.animation1;
      break;
    case 1:
    case 2:
      images = animaions.animation2;
      break;
    case 3:
      images = animaions.animation3;
      break;
    case 4:
    case 5:
      images = animaions.animation4;
      break;
    case 6:
      images = animaions.animation5;
      break;
    case 7:
    case 8:
      images = animaions.animation6;
      break;
    case 9:
      images = animaions.animation7;
      break;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className={s.nightBusEntryBackground}>
      <div className={s.animation1}>
        <img
          className={s.nightBusEntryBackgroundImage}
          src={images[index]}
          alt="background image"
        />
      </div>
    </div>
  );
}
