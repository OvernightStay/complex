/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Table({ children }) {
  return <div className={s.table}>{children}</div>;
}
