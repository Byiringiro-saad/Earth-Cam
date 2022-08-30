import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { ImCross } from "react-icons/im";
import { GoSettings } from "react-icons/go";
import { TbDeviceTv } from "react-icons/tb";
import { BsCameraVideo } from "react-icons/bs";

import styles from "./sidebar.module.css";

const Sidebar = ({ close }) => {
  const router = useRouter();
  const [categories, setCategories] = React.useState([
    "Tress",
    "People",
    "Beach",
    "City",
    "Nature",
    "Animals",
    "Food",
    "Travel",
    "Sports",
    "Architecture",
    "Art",
    "Fashion",
    "Technology",
    "Nature",
    "Animals",
    "Food",
    "Travel",
    "Sports",
    "Architecture",
    "Art",
    "Fashion",
    "Technology",
    "Nature",
    "Animals",
  ]);

  const goToCategory = (e) => {
    router.push(`/${e.target.innerHTML.toLowerCase()}`);
    close();
  };

  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.top}>
          <p className={styles.title}>WorldCam</p>
          <ImCross className={styles.icon} onClick={() => close()} />
        </div>
        <div className={styles.content}>
          <div className={styles.nav}>
            <p>
              <TbDeviceTv className={styles.icon} /> <span> </span>
              WorldCam Tv
            </p>
            <p>
              <BsCameraVideo className={styles.icon} /> <span> </span>
              My WorldCam
            </p>
            <div className={styles.auth}>
              <Link href="/submit">Submit</Link>
              <Link href="/login">Login</Link>
            </div>
          </div>
          <div className={styles.header}>
            <GoSettings className={styles.icon} />
            <p>Filter WorldCams</p>
          </div>
          <ul className={styles.list}>
            <li onClick={() => router.push("/")}>All</li>
            {categories.map((category, index) => (
              <li key={index} onClick={goToCategory}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.close} onClick={() => close()}></div>
    </div>
  );
};

export default Sidebar;
