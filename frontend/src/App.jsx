import "./App.css";
import { useState } from "react";
import {
  introData,
  nightBusIntro,
  nightBusEntry,
  nightBusStory,
  nightBusGameIntro,
  nightBusGameEnd,
} from "../public/data/data";
import Intro from "./pages/intro/Intro";
import Video from "./pages/videoAnimation/Video";
import Screen from "./pages/screenChange/Screen";
import NightBusIntro from "./pages/nightBus/NightBusIntro";
import NightBusEntry from "./pages/nightBus/NightBusEntry";
import NightBusStory from "./pages/nightBus/NightBusStory";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NightBusGameEnd from "./pages/nightBus/NightBusGameEnd";
import NightBusGamePlay from "./pages/nightBus/NightBusGamePlay";
import NightBusGameIntro from "./pages/nightBus/NightBusGameIntro";
import DistributionGame from "./pages/distribution-game/DistributionGame";
import PsychologistPoint from "./pages/psychologist/PsychologistPoint";
import HeatingGame from "./pages/heatingGame/HeatingGame";
import NeravnodushGame from "./pages/neravnodushGame/NeravnodushGame";
import BookMock from "./pages/book-mock/BookMock";
import Map from "./pages/map/Map";

function App() {
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Intro data={introData} step={step} setStep={setStep} />}
        />
        <Route path="/video" element={<Video setStep={setStep} />} />
        <Route
          path="/night-bus-intro"
          element={
            <NightBusIntro data={nightBusIntro} step={step} setStep={setStep} />
          }
        />
        <Route
          path="/night-bus-entry"
          element={
            <NightBusEntry data={nightBusEntry} step={step} setStep={setStep} />
          }
        />
        <Route
          path="/night-bus-story"
          element={
            <NightBusStory
              data={nightBusStory}
              step={step}
              setStep={setStep}
              level={level}
            />
          }
        />
        <Route
          path="/night-bus-game-intro"
          element={
            <NightBusGameIntro
              data={nightBusGameIntro}
              step={step}
              setStep={setStep}
              level={level}
            />
          }
        />
        <Route path="/night-bus-game-play" element={<NightBusGamePlay />} />
        <Route
          path="/night-bus-game-end"
          element={
            <NightBusGameEnd
              data={nightBusGameEnd}
              step={step}
              setStep={setStep}
              level={level}
              setLevel={setLevel}
            />
          }
        />
        <Route path="/distribution-game" element={<DistributionGame />} />
        <Route path="/psychologist-point" element={<PsychologistPoint />} />
        <Route path="/heating-game" element={<HeatingGame />} />
        <Route path="/neravnodush-game" element={<NeravnodushGame />} />
        <Route path="/map" element={<Map level={level} />} />
        <Route path="/screen" element={<Screen />} />
        <Route path="/book-mock" element={<BookMock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// map
// responsive

// https://www.figma.com/design/TH6l582c9eJBljmpYjWLQW/%D0%9D%D0%9A%D0%9E-%D0%9D%D0%BE%D1%87%D0%BB%D0%B5%D0%B6%D0%BA%D0%B0-%7C-%D0%9F%D0%B5%D1%81%D0%BE%D1%87%D0%BD%D0%B8%D1%86%D0%B0?node-id=1-17&node-type=&t=bDsq5J1EqYIJz6S8-0
// Lights of background building animates
// Typing animation
