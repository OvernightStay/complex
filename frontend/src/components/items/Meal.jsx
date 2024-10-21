/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Meal({ id, handlePickItem, type, isMealPicked }) {
  function handlePick(e) {
    if (type === "container") {
      if (isMealPicked) return;
      handlePickItem(id, e.target.name);
    } else {
      return;
    }
  }

  return (
    <img
      src="/assets/items/meal.svg"
      alt="meal picture"
      className={`${s.itemBtn} ${s[`meal-${type}-${id}`]} ${s[`meal-${type}`]}`}
      id={id}
      onClick={(e) => {
        handlePick(e);
      }}
      name="meal"
    />
  );
}
