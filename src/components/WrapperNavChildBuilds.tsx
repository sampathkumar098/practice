import { FunctionComponent } from "react";
import styles from "./WrapperNavChildBuilds.module.css";

const NavChildBuildsIcon: FunctionComponent = () => {
  return (
    <div className={styles.wrapperNavchildBuilds}>
      <img
        className={styles.navchildBuildsIcon}
        alt=""
        src="/navchild-builds@2x.png"
      />
    </div>
  );
};

export default NavChildBuildsIcon;
