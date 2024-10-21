/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Bread({ id, handlePickItem, type, isBreadPicked }) {
  function handlePick(e) {
    if (type === "container") {
      if (isBreadPicked) return;
      handlePickItem(id, e.target.name);
    } else {
      return;
    }
  }
  return (
    <img
      src="/assets/items/bread.svg"
      alt="bread picture"
      className={`${s.itemBtn} ${s[`bread-${type}-${id}`]} ${
        s[`bread-${type}`]
      }`}
      id={id}
      onClick={(e) => handlePick(e)}
      name="bread"
    />
  );
}
