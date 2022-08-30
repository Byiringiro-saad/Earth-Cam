import React from "react";
import { useRouter } from "next/router";

import { MdLocationOn } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

import styles from "./cam.module.css";

const Cam = ({ title, width }) => {
  const router = useRouter();

  const goToCam = () => {
    router.push(`/${title.toLowerCase()}/5`);
  };

  return (
    <div
      className={styles.container}
      style={
        router?.query?.category
          ? {
              margin: "0 0 40px 0",
              background: "var(--gray)",
              padding: "7px",
              width: `${width}px`,
              borderRadius: "5px",
            }
          : {}
      }
      onClick={goToCam}
    >
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
