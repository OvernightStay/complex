/* eslint-disable react/prop-types */
import s from "./styles.module.css";

export default function CatError({ error, isRehab }) {
  return (
    <>
      <div className={`${s.catError} ${error ? s.catErrorActive : ""}`}>
        <img
          src="/assets/cat/cat-error-not-ready.svg"
          alt="cat from left side"
        />
      </div>
      <div className={`${s.catErrorText} ${error ? s.catErrorTextActive : ""}`}>
        <img
          src={`/assets/cat/cat-error-not-${
            isRehab ? "opened" : "ready"
          }-text.svg`}
          alt="cat from left side with text"
        />
      </div>
    </>
  );
}
