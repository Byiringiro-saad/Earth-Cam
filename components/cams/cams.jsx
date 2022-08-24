import React from "react";
import Link from "next/link";

import Cam from "../cam/cam";
import styles from "./cams.module.css";

const Cams = ({ title, num, tablet, phone }) => {
  return (
    <div
      style={
        parseInt(num) % 2 == 0
          ? { background: "var(--gray)" }
          : { background: "var(--white)" }
      }
      className={styles.container}
    >
      <div className={styles.top}>
        <p>{title}</p>
        <Link href={`/${title.toLowerCase()}`}>See more</Link>
      </div>
      <div className={styles.cams}>
        {!tablet &&
          !phone &&
          [...Array(5)].map((_, index) => <Cam key={index} title={title} />)}
        {tablet &&
          [...Array(3)].map((_, index) => <Cam key={index} title={title} />)}
        {phone &&
          [...Array(1)].map((_, index) => <Cam key={index} title={title} />)}
      </div>
    </div>
  );
};

export default Cams;
