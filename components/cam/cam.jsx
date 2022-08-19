import React from "react";

import { MdLocationOn } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

import styles from "./cam.module.css";

const Cam = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.about}>
        <p className={styles.title}>Tidal Basin Cam</p>
        <p>
          <MdLocationOn className={styles.icon} />
          Santa Monica, CA United States
        </p>
        <p>
          <AiFillEye className={styles.icon} />
          3.1M views
        </p>
      </div>
    </div>
  );
};

export default Cam;
