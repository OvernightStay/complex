/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Book({ bookIcon }) {
  return (
    <img
      src="/assets/icons/book.svg"
      alt="book icon"
      className={`${s.book} ${bookIcon ? s.animate : ""}`}
    />
  );
}
