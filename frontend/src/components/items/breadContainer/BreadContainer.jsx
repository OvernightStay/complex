/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function BreadContainer({ children }) {
  return (
    <div className={s.breadContainer}>
      <div className={s.breadContainerWrapper}>{children}</div>
    </div>
  );
}
