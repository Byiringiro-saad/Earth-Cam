import React from "react";
import Link from "next/link";

import Cam from "../cam/cam";
import styles from "./cams.module.css";

const Cams = ({ title, num }) => {
  const imageUrl = `https://picsum.photos/300/300?random=${Math.random()}`;
  const location = "Santa Monica, CA United States";
  const views = "3.1M";

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
        {[...Array(5)].map((_, index) => (
          <Cam key={index} datas={{ title, imageUrl, location, views }} />
        ))}
      </div>
    </div>
  );
};

export default Cams;
