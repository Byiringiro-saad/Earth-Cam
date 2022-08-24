import React, { useEffect, useState } from "react";

import Nav from "../components/nav/nav";
import Cams from "../components/cams/cams";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer/footer";
import PaginationC from "../components/pagination/pagination";
import Top from "../components/top/top";

export default function Home() {
  const [tablet, setTablet] = useState(false);
  const [phone, setPhone] = useState(false);
  const [cams, setCams] = useState([
    "Tress",
    "People",
    "Beach",
    "City",
    "Nature",
    "Animals",
    "Food",
    "Travel",
    "Sports",
  ]);

  useEffect(() => {
    const width = window.innerWidth;

    if (width > 992) {
      setTablet(false);
      setPhone(false);
    } else if (width < 992 && width > 600) {
      setTablet(true);
      setPhone(false);
    } else {
      setPhone(true);
      setTablet(false);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Nav tablet={tablet} phone={phone} />
      <Top tablet={tablet} phone={phone} />
      <div className={styles.cams}>
        {cams.map((cam, index) => (
          <Cams
            key={index}
            title={cam}
            num={index}
            tablet={tablet}
            phone={phone}
          />
        ))}
      </div>
      <PaginationC />
      <Footer />
    </div>
  );
}
