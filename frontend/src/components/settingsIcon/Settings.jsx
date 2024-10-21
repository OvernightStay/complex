/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Settings({ settings }) {
  return (
    <img
      src={`/assets/icons/settings.svg`}
      alt="settings icon"
      className={`${s.settings} ${settings ? s.animate : ""}`}
    />
  );
}
