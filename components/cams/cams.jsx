import React from "react";
import Link from "next/link";

import Cam from "../cam/cam";
import styles from "./cams.module.css";

const Cams = ({ title, num, cams }) => {
  console.log(cams);

  return (
    <div
      style={
        parseInt(num) % 2 === 0
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
        {cams.slice(0, 5).map((cam, index) => (
          <Cam
            key={index}
            datas={{
              title: cam?.name,
              location: cam?.location,
              views: cam?.viewcount,
              url: cam?.url,
              name: cam?.name,
            }}
            title={title}
          />
        ))}
      </div>
    </div>
  );
};

export default Cams;
