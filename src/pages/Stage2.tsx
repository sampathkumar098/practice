import { FunctionComponent } from "react";
import styles from "./Stage2.module.css";

const Stage2: FunctionComponent = () => {
  return (
    <div className={styles.stage2}>
      <div className={styles.image} />
      <div className={styles.launchpad}>
        <div className={styles.launchpadWrapper}>
          <div className={styles.you}>Launchpad</div>
        </div>
        <img className={styles.launchpadChild} alt="" src="/polygon-4@2x.png" />
      </div>
      <img
        className={styles.circleElementIcon}
        alt=""
        src="/circle-element@2x.png"
      />
      <div className={styles.circleWhiteElement} />
      <div className={styles.client}>
        <div className={styles.youWrapper}>
          <div className={styles.you}>You</div>
        </div>
        <img className={styles.clientChild} alt="" src="/polygon-1@2x.png" />
      </div>
      <img
        className={styles.circleStrokeIcon}
        alt=""
        src="/circle-stroke@2x.png"
      />
      <div className={styles.oblongElement} />
      <img className={styles.whiteLightIcon} alt="" src="/white-light@2x.png" />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <div className={styles.rectangle} />
      <img
        className={styles.stage2Child}
        alt=""
        src="/group-1171274764@2x.png"
      />
      <img
        className={styles.rectangleOrangeIcon}
        alt=""
        src="/rectangle-orange@2x.png"
      />
    </div>
  );
};

export default Stage2;
