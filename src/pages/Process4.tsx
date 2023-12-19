import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Process4.module.css";

const Process4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProcessContainerClick = useCallback(() => {
    navigate("/process1");
  }, [navigate]);

  return (
    <div className={styles.process} onClick={onProcessContainerClick}>
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
      <div className={styles.imageParent}>
        <div className={styles.image} />
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
        <img
          className={styles.whiteLightIcon}
          alt=""
          src="/white-light@2x.png"
        />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <div className={styles.rectangle} />
        <img
          className={styles.groupChild}
          alt=""
          src="/group-1171274764@2x.png"
        />
        <img
          className={styles.rectangleOrangeIcon}
          alt=""
          src="/rectangle-orange@2x.png"
        />
      </div>
    </div>
  );
};

export default Process4;
