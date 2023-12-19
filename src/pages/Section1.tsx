import { FunctionComponent } from "react";
import styles from "./Section1.module.css";

const Section1: FunctionComponent = () => {
  return (
    <div className={styles.section}>
      <div className={styles.articles}>Articles</div>
    </div>
  );
};

export default Section1;
