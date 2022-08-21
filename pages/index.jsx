import React from "react";

import Nav from "../components/nav/nav";
import Cams from "../components/cams/cams";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer/footer";
import PaginationC from "../components/pagination/pagination";
import Top from "../components/top/top";

export default function Home() {
  const [cams, setCams] = React.useState([
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

  return (
    <div className={styles.container}>
      <Nav />
      <Top />
      <div className={styles.cams}>
        {cams.map((cam, index) => (
          <Cams key={index} title={cam} num={index} />
        ))}
      </div>
      <PaginationC />
      <Footer />
    </div>
  );
}
