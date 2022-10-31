import React from "react";
import { useRouter } from "next/router";

import { MdLocationOn } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

import styles from "./cam.module.css";

const Cam = ({ datas, title, width, url }) => {
  const router = useRouter();
  const router = useRouter();
  //const url = `https://picsum.photos/300/300?random=${Math.random()}`;

  const goToCam = () => {
    router.push(`/${datas?.title.toLowerCase()}/5`);
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
              width: `${datas?.width}px`,
              borderRadius: "5px",
            }
          : {}
      }
      onClick={goToCam}
    >
      <div className={styles.image}>
        <img src={url} alt="banner" />
        {/* <img src="https://random.imagecdn.app/500/500" alt="sasda" /> */}
      </div>
      <div className={styles.about}>
        <p className={styles.title}>Tidal Basin Cam</p>
        <p>
          <MdLocationOn className={styles.icon} />
          {datas?.location}
        </p>
        <p>
          <AiFillEye className={styles.icon} />
          {datas?.views} views
        </p>
      </div>
    </div>
  );
};

export default Cam;
