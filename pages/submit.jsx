import React, { useEffect, useState } from "react";

import Ad from "../components/ad/ad";
import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav";
import styles from "../styles/Auth.module.css";

const Submit = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.content}>
        <form className={styles.form}>
          <h1 className={styles.title}>Submit a new WorldCam</h1>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Link" />
          <button type="submit">Submit</button>
          <div className="line"></div>
        </form>
        <div className={styles.right}>
          {[...Array(2)].map((_, i) => (
            <Ad key={i} height={45} width={100} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Submit;
