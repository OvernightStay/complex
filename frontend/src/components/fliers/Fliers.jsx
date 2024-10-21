import s from "./styles.module.css";

export default function Fliers() {
  return (
    <div className={s.fliersContainer}>
      <div className={s.fliers}>
        <img
          className={s.flier1}
          src="/assets/fliers/flier-1.svg"
          alt="flier 1"
        />
        <img
          className={s.flier2}
          src="/assets/fliers/flier-2.svg"
          alt="flier 2"
        />
      </div>
    </div>
  );
}
