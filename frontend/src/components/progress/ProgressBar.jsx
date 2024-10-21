import s from "./styles.module.css";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const totalTime = 15;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prev) => {
        if (prev < totalTime) {
          return prev + 0.1;
        } else {
          clearInterval(interval);
          return totalTime;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [totalTime]);

  const progress = timeElapsed / totalTime;
  const greenWidth = `${(1 - progress) * 100}%`;

  return (
    <div>
      <div className={s.progressBarContainer}>
        <div
          className={s.progressBarGreen}
          style={{ width: `${greenWidth}` }}
        ></div>
      </div>
    </div>
  );
}
