import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Process6.module.css";

const Process6: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProcessContainerClick = useCallback(() => {
    navigate("/process2");
  }, [navigate]);

  return (
    <div className={styles.process} onClick={onProcessContainerClick}>
      <div className={styles.content}>
        <div className={styles.copy}>
          <div className={styles.heading}>
            <div className={styles.category}>Stage 1</div>
            <div
              className={styles.researchStrategy}
            >{`Research & Strategy`}</div>
          </div>
          <div className={styles.copy1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero
            et velit interdum, ac aliquet odio mattis. Class aptent taciti
            adipiscing.
          </div>
        </div>
      </div>
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

export default Process6;
