import React from "react";
import styles from "./styles.module.css";
function Skleton({ width, height }) {
  return <div className={styles.skeleton} style={{ width, height }}></div>;
}

export default Skleton;
