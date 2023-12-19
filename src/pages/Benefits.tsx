import { FunctionComponent } from "react";
import styles from "./Benefits.module.css";

const Benefits: FunctionComponent = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.benefitsChild} />
      <div className={styles.carosuel}>
        <div className={styles.block}>
          <img className={styles.icon} alt="" src="/icon@2x.png" />
          <div className={styles.copy}>
            <div className={styles.teamMembersHave}>
              Team members have equity
            </div>
            <div className={styles.weWantEveryone}>
              We want everyone at Launchpad benefit from our growth and success.
            </div>
          </div>
        </div>
        <div className={styles.block1}>
          <img className={styles.icon} alt="" src="/icon@2x.png" />
          <div className={styles.copy}>
            <div className={styles.teamMembersHave}>Flexible working</div>
            <div className={styles.weWantEveryone}>
              Want to work from the beach? We don’t mind! Work from wherever you
              want
            </div>
          </div>
        </div>
        <div className={styles.block1}>
          <img className={styles.icon} alt="" src="/icon@2x.png" />
          <div className={styles.copy}>
            <div className={styles.teamMembersHave}>Flexible working</div>
            <div className={styles.weWantEveryone}>
              Want to work from the beach? We don’t mind! Work from wherever you
              want
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyParent}>
        <div className={styles.copy3}>
          <div className={styles.benefitsAtLaunchpadContainer}>
            <p className={styles.benefitsAt}>Benefits at</p>
            <p className={styles.launchpad}>Launchpad</p>
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Amet massa sed lectus dictum
            faucibus quis. Cursus elit lorem elit vitae tincidunt vulputate
            senectus libero fringilla.
          </div>
        </div>
        <div className={styles.cursorButtonParent}>
          <img
            className={styles.cursorButtonIcon}
            alt=""
            src="/cursor-button@2x.png"
          />
          <div className={styles.cursorButton}>
            <img
              className={styles.arrowUpRightIcon}
              alt=""
              src="/arrowupright@2x.png"
            />
            <div className={styles.view}>view</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
