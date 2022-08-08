import Link from "next/link";
import React from "react";

import styles from "./nav.module.css";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.bars}></div>
        <Link href="/">WorldCam</Link>
      </div>
      <div className={styles.middle}>
        <form action="#" className={styles.form}>
          <input type="text" placeholder="Search here..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={styles.right}>
        <Link href="tv">WorldCam Tv</Link>
        <Link href="mine">My WorldCam</Link>
      </div>
    </div>
  );
};

export default Nav;
