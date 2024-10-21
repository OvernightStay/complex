/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Tray({ children }) {
  return <div className={s.tray}>{children}</div>;
}
