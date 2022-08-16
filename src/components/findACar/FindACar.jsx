import React from "react";
import styles from "./FindACar.module.css";

export const FindACar = () => {
  return (
    <div className={styles.search_container}>
      <div className={styles.search_btn}>Search</div>
      <div className={styles.search_content}></div>
    </div>
  );
};
