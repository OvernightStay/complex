/* eslint-disable react-hooks/exhaustive-deps */
import s from "./styles.module.css";
import TestComponent from "../../components/testComponent/TestComponent";
import Kettle from "../../components/items/Kettle";
import Tray from "../../components/items/tray/Tray";
import TeaContainer from "../../components/items/teaContainer/TeaContainer";
import MealContainer from "../../components/items/mealContainer/MealContainer";
import Tea from "../../components/items/Tea";
import Meal from "../../components/items/Meal";
import BreadContainer from "../../components/items/breadContainer/BreadContainer";
import Bread from "../../components/items/Bread";
import Result from "../../components/result/Result";
import { useEffect, useState } from "react";
import Settings from "../../components/settingsIcon/Settings";
import FinalResult from "../../components/result/FinalResult";

export default function NightBusGamePlay() {
  const initialCharacters = [
    "old-lady",
    "mathew",
    "tamara",
    "girl",
    "vladimir",
    "olga",
    "michael",
    "boy",
    "guy",
  ];

  const itemCount = [1, 2, 3];
  const [cups, setCups] = useState(itemCount);
  const [meal, setMeal] = useState(itemCount);
  const [bread, setBread] = useState(itemCount);
  const [isMealPicked, setMealPicked] = useState(false);
  const [isBreadPicked, setBreadPicked] = useState(false);
  const [isTeaPicked, setTeaPicked] = useState(false);
  const [items, setItems] = useState([]);
  const [isTime, setTime] = useState(true);
  const [characters, setCharacters] = useState(initialCharacters);
  const [mood, setMood] = useState([]);

  const moodCount = mood.reduce(
    (acc, mood) => {
      if (mood === "good") acc.good += 1;
      if (mood === "bad") acc.bad += 1;
      return acc;
    },
    { good: 0, bad: 0 }
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (items.length === 3) {
        switchCharacters();
        if (isTime) {
          handleCharacterMood("good");
        } else {
          handleCharacterMood("bad");
        }
        setTime(true);
      }

      if (cups.length === 0 && bread.length === 0 && meal.length === 0)
        resetItems();
    }, 100);

    return () => clearTimeout(timer);
  }, [items, mood, bread.length, meal, length, cups.length, isTime]);

  function switchCharacters() {
    setCharacters((prev) => prev.slice(1));
    setItems([]);
    setMealPicked(false);
    setBreadPicked(false);
    setTeaPicked(false);
  }

  function resetItems() {
    setCups(itemCount);
    setBread(itemCount);
    setMeal(itemCount);
  }

  function handleCharacterMood(mood) {
    setMood((prev) => [...prev, mood]);
  }

  function handlePickCup(id, name) {
    setCups(cups.filter((cup) => cup !== id));
    setItems((prev) => [...prev, name]);
    setTeaPicked(true);
  }

  function handlePickMeal(id, name) {
    setMeal(meal.filter((meal) => meal !== id));
    setItems((prev) => [...prev, name]);
    setMealPicked(true);
  }

  function handlePickBread(id, name) {
    setBread(bread.filter((bread) => bread !== id));
    setItems((prev) => [...prev, name]);
    setBreadPicked(true);
  }

  function handleResetGame() {
    setMood([]);
    setCharacters(initialCharacters);
  }

  return (
    <div
      className={`${s.nightBusGame} ${s.nightBusGamePlay} ${
        mood.length === 9 && s.finalResult
      }`}
    >
      <Settings />
      {mood.length < 9 ? (
        <>
          {characters.slice(0, 3).map((character, i) => (
            <TestComponent
              key={character}
              name={character}
              pos={i}
              setTime={setTime}
            />
          ))}

          <Kettle />
          <Tray>
            {items.includes("meal") && <Meal type="tray" />}
            {items.includes("tea") && <Tea type="tray" />}
            {items.includes("bread") && <Bread type="tray" />}
          </Tray>
          <TeaContainer>
            {cups.map((cup) => (
              <Tea
                key={cup}
                id={cup}
                handlePickItem={handlePickCup}
                type="container"
                isTeaPicked={isTeaPicked}
              />
            ))}
          </TeaContainer>
          <MealContainer>
            {meal.map((meal) => (
              <Meal
                key={meal}
                id={meal}
                handlePickItem={handlePickMeal}
                type="container"
                isMealPicked={isMealPicked}
              />
            ))}
          </MealContainer>
          <BreadContainer>
            {bread.map((bread) => (
              <Bread
                key={bread}
                id={bread}
                handlePickItem={handlePickBread}
                type="container"
                isBreadPicked={isBreadPicked}
              />
            ))}
          </BreadContainer>
          <Result moodCount={moodCount} />
        </>
      ) : (
        <FinalResult moodCount={moodCount} handleResetGame={handleResetGame} />
      )}
    </div>
  );
}
