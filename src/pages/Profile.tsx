import { FunctionComponent } from "react";
import styles from "./Profile.module.css";

const Profile: FunctionComponent = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile1}>
        <img className={styles.starIcon} alt="" src="/star@2x.png" />
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <div className={styles.profileChild} />
      </div>
    </div>
  );
};

export default Profile;
