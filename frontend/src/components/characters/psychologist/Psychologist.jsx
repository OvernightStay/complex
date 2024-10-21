import s from "./styles.module.css";

export default function Psychologist() {
  return (
    <img
      className={`${s.psychologist} ${s.animate} `}
      src={`/assets/psychologist/psychologist.svg`}
      alt="psychologist icon"
    />
  );
}
