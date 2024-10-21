/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Text({ children }) {
  return (
    <div className={s.textWrapper}>
      <p className={s.text} dangerouslySetInnerHTML={{ __html: children }} />
    </div>
  );
}
