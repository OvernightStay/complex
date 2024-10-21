/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function TeaContainer({ children }) {
  return <div className={s.teaContainer}>{children}</div>;
}
