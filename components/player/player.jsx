import React from "react";
import { DefaultPlayer as Video } from "react-html5video";

import styles from "./player.module.css";

const Player = () => {
  const imageUrl = `https://picsum.photos/300/300?random=${Math.random()}`;

  return (
    <div className={styles.container}>
      <Video
        autoPlay
        loop
        poster={imageUrl}
        className={styles.video}
        // controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
      >
        <source src="/video.mp4" type="video/webm" />
      </Video>
    </div>
  );
};

export default Player;
