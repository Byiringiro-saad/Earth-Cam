import React from "react";
import Link from "next/link";

import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { TbDeviceTv } from "react-icons/tb";
import { BsCameraVideo } from "react-icons/bs";

import styles from "./nav.module.css";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.bars}>
          <FaBars className={styles.icon} />
        </div>
        <Link href="/">WorldCam</Link>
      </div>
      <div className={styles.middle}>
        <form action="#" className={styles.form}>
          <BiSearch className={styles.icon} />
          <input type="text" placeholder="Search here..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={styles.right}>
        <div>
          <TbDeviceTv className={styles.icon} />
          <Link href="tv">WorldCam Tv</Link>
        </div>
        <div>
          <BsCameraVideo className={styles.icon} />
          <Link href="mine">My WorldCam</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
