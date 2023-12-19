import { FunctionComponent } from "react";
import styles from "./Stage3.module.css";

const Stage3: FunctionComponent = () => {
  return (
    <div className={styles.stage3}>
      <div className={styles.image} />
      <img className={styles.stage3Child} alt="" src="/group-3207@2x.png" />
      <div className={styles.launchpad}>
        <div className={styles.launchpadWrapper}>
          <div className={styles.you}>Launchpad</div>
        </div>
        <img className={styles.launchpadChild} alt="" src="/polygon-4@2x.png" />
      </div>
      <div className={styles.client}>
        <div className={styles.youWrapper}>
          <div className={styles.you}>You</div>
        </div>
        <img className={styles.clientChild} alt="" src="/polygon-1@2x.png" />
      </div>
      <div className={styles.wrapperCrossElement}>
        <img
          className={styles.crossElementIcon}
          alt=""
          src="/cross-element@2x.png"
        />
      </div>
      <div className={styles.wrapperCrossElementWhite}>
        <img
          className={styles.crossElementIcon}
          alt=""
          src="/cross-element-white@2x.png"
        />
      </div>
      <img
        className={styles.stage3Item}
        alt=""
        src="/group-1171274765@2x.png"
      />
      <img className={styles.settingsIcon} alt="" src="/settings@2x.png" />
      <img
        className={styles.settingsStrokeIcon}
        alt=""
        src="/settings-stroke@2x.png"
      />
    </div>
  );
};

export default Stage3;
