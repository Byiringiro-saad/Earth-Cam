import React from "react";

import styles from "./ad.module.css";

const Ad = ({ width, height }) => {
  return (
    <div
      className={styles.container}
      style={width ? { width: `${width}%`, height: `${height}%` } : {}}
    >
      <p>Ad</p>
    </div>
  );
};

export default Ad;
