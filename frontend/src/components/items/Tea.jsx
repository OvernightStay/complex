/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Tea({ id, handlePickItem, type, isTeaPicked }) {
  function handlePick(e) {
    if (type === "container") {
      if (isTeaPicked) return;
      handlePickItem(id, e.target.name);
    } else {
      return;
    }
  }
  return (
    <img
      src="/assets/items/tea.svg"
      alt="tea picture"
      className={`${s.itemBtn} ${s[`tea-${type}-${id}`]} ${s.type} ${
        s[`tea-${type}`]
      }`}
      id={id}
      onClick={(e) => handlePick(e)}
      name="tea"
    />
  );
}
