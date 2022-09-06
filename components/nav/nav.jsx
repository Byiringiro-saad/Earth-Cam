import React, { useState } from "react";
import Link from "next/link";

import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

import styles from "./nav.module.css";
import Sidebar from "../sidebar/sidebar";

const Nav = ({}) => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className={styles.container}>
      {sidebar ? <Sidebar close={handleSidebar} /> : null}
      <div className={styles.left}>
        <div className={styles.bars} onClick={handleSidebar}>
          <FaBars className={styles.icon} />
        </div>
        <Link href="/">SmartCam</Link>
      </div>
      <div className={styles.middle}>
        <form action="#" className={styles.form}>
          <BiSearch className={styles.icon} />
          <input type="text" placeholder="Search here..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={styles.right}>
        {/* <div>
          <TbDeviceTv className={styles.icon} />
          <Link href="tv">WorldCam Tv</Link>
        </div>
        <div>
          <BsCameraVideo className={styles.icon} />
          <Link href="mine">My WorldCam</Link>
        </div> */}
        <Link href="/submit">Submit</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
};

export default Nav;
