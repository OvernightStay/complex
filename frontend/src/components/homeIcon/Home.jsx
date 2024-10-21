/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function Home({ level, homeIcon }) {
  return (
    <img
      src={`/assets/icons/homeIcon/home-level-${level}.svg`}
      alt="home icon"
      className={`${s.home} ${homeIcon ? s.animate : ""}`}
    />
  );
}
