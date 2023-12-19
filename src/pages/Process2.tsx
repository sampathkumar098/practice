import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Process2.module.css";

const Process2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProcessContainerClick = useCallback(() => {
    navigate("/process");
  }, [navigate]);

  return (
    <div className={styles.process} onClick={onProcessContainerClick}>
      <div className={styles.content}>
        <div className={styles.copy}>
          <div className={styles.heading}>
            <div className={styles.category}>Stage 3</div>
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
        <img className={styles.groupChild} alt="" src="/group-3207@2x.png" />
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
          className={styles.groupItem}
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
    </div>
  );
};

export default Process2;
