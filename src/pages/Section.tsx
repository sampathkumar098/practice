import { FunctionComponent } from "react";
import styles from "./Section.module.css";

const Section: FunctionComponent = () => {
  return (
    <div className={styles.section}>
      <div className={styles.careers}>Careers</div>
    </div>
  );
};

export default Section;
