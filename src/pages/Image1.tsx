import { FunctionComponent } from "react";
import styles from "./Image1.module.css";

const Image1: FunctionComponent = () => {
  return (
    <div className={styles.image}>
      <img
        className={styles.circleStrokeIcon}
        alt=""
        src="/circle-stroke@2x.png"
      />
      <img
        className={styles.circleElementIcon}
        alt=""
        src="/circle-element@2x.png"
      />
      <img className={styles.starIcon} alt="" src="/star@2x.png" />
      <div className={styles.circle1} />
      <div className={styles.circle2} />
      <img className={styles.icon} alt="" src="/@2x.png" />
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
        <img className={styles.launchpadChild} alt="" src="/polygon-4@2x.png" />
      </div>
    </div>
  );
};

export default Image1;
