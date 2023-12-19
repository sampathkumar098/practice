import { FunctionComponent } from "react";
import styles from "./Process5.module.css";

const Process5: FunctionComponent = () => {
  return (
    <div className={styles.process}>
      <div className={styles.content}>
        <div className={styles.copy}>
          <div className={styles.heading}>
            <div className={styles.category}>Stage 2</div>
            <div className={styles.designingDifferentSolutions}>
              Designing different solutions
            </div>
          </div>
          <div className={styles.copy1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero
            et velit interdum, ac aliquet odio mattis. Class aptent taciti
            adipiscing.
          </div>
        </div>
      </div>
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
      <img
        className={styles.rectangleOrangeIcon}
        alt=""
        src="/rectangle-orange@2x.png"
      />
      <div className={styles.circle1} />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <div className={styles.rectangle} />
      <div className={styles.squareBlack} />
      <img
        className={styles.triangleWhiteIcon}
        alt=""
        src="/triangle-white@2x.png"
      />
      <img
        className={styles.triangleGrayIcon}
        alt=""
        src="/triangle-gray@2x.png"
      />
    </div>
  );
};

export default Process5;
