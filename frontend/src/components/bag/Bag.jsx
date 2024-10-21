/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Bag({ bag }) {
  return (
    <img
      src="/assets/icons/bag.svg"
      alt="bag icon"
      className={`${s.bag} ${bag ? s.animate : ""}`}
    />
  );
}
