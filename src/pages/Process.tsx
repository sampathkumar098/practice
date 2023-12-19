import { FunctionComponent } from "react";
import styles from "./Process.module.css";

const Process: FunctionComponent = () => {
  return (
    <div className={styles.process}>
      <div className={styles.content}>
        <div className={styles.copy}>
          <div className={styles.heading}>
            <div className={styles.category}>Stage 4</div>
            <div className={styles.launchingSuccessfully}>
              Launching successfully
            </div>
          </div>
          <div className={styles.copy1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero
            et velit interdum, ac aliquet odio mattis. Class aptent taciti
            adipiscing.
          </div>
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
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
            <img
              className={styles.clientChild}
              alt=""
              src="/polygon-1@2x.png"
            />
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
    </div>
  );
};

export default Process;
