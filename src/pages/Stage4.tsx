import { FunctionComponent } from "react";
import styles from "./Stage4.module.css";

const Stage4: FunctionComponent = () => {
  return (
    <div className={styles.stage4}>
      <div className={styles.stage4Child} />
      <div className={styles.stage4Item} />
      <div className={styles.stage4Inner} />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-4623@2x.png"
      />
      <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
      <div className={styles.wrapperSunriseLines}>
        <img
          className={styles.sunriseLinesIcon}
          alt=""
          src="/sunrise-lines@2x.png"
        />
      </div>
      <img className={styles.groupIcon} alt="" src="/group-3203@2x.png" />
      <div className={styles.cursors}>
        <div className={styles.client}>
          <div className={styles.youWrapper}>
            <div className={styles.you}>You</div>
          </div>
          <img className={styles.clientChild} alt="" src="/polygon-1@2x.png" />
        </div>
        <div className={styles.launchpad}>
          <div className={styles.launchpadWrapper}>
            <div className={styles.you}>Launchpad</div>
          </div>
          <img
            className={styles.launchpadChild}
            alt=""
            src="/polygon-4@2x.png"
          />
        </div>
      </div>
      <img className={styles.starLinesIcon} alt="" src="/star-lines@2x.png" />
    </div>
  );
};

export default Stage4;
