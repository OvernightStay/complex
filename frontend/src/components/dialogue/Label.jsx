/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Label({ children, position }) {
  return (
    <div className={`${s.label} ${position ? "" : s.labelSecondary}`}>
      {children}
    </div>
  );
}
