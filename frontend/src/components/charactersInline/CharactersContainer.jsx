/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function CharactersContainer({ children }) {
  return <div className={s.charactersContainer}>{children}</div>;
}
