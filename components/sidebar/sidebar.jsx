import React from "react";

import { ImCross } from "react-icons/im";
import { GoSettings } from "react-icons/go";

import styles from "./sidebar.module.css";

const Sidebar = ({ close }) => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.top}>
          <p className={styles.title}>WorldCam</p>
          <ImCross className={styles.icon} onClick={() => close()} />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <GoSettings className={styles.icon} />
            <p>Filter WorldCams</p>
          </div>
          <ul className={styles.list}>
            <li>All</li>
            <li>Animals</li>
            <li>Sky</li>
            <li>People</li>
            <li>Skyscrapers</li>
            <li>Forest</li>
            <li>Rain</li>
            <li>Highway</li>
            <li>Mountains</li>
            <li>Animals</li>
            <li>Sky</li>
            <li>Skyscrapers</li>
            <li>Highway</li>
            <li>Beach</li>
            <li>Stadium</li>
            <li>City</li>
            <li>Water</li>
            <li>Flowers</li>
            <li>Trees</li>
            <li>Cars</li>
          </ul>
        </div>
      </div>
      <div className={styles.close} onClick={() => close()}></div>
    </div>
  );
};

export default Sidebar;
