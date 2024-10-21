/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function MealContainer({ children }) {
  return <div className={s.mealContainer}>{children}</div>;
}
