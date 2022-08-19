import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>WorldCam</p>
      </div>
      <div className={styles.right}>
        <div className={styles.column}>
          <p className={styles.header}>Resources</p>
          <ul>
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
          </ul>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Links</p>
          <ul>
            <li>Home</li>
            <li>WorlCam Tv</li>
            <li>My worldCam</li>
          </ul>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Follow us</p>
          <ul>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
