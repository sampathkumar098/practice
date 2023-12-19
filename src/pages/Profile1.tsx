import { FunctionComponent } from "react";
import styles from "./Profile1.module.css";

const Profile1: FunctionComponent = () => {
  return (
    <div className={styles.profile}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.profileChild} />
    </div>
  );
};

export default Profile1;
