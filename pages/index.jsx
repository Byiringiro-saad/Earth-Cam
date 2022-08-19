import React from "react";

import Nav from "../components/nav/nav";
import Cams from "../components/cams/cams";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer/footer";
import PaginationC from "../components/pagination/pagination";

export default function Home() {
  const [cams, setCams] = React.useState(["Tress", "People", "Beach", "City"]);

  return (
    <div className={styles.container}>
      <Nav />
      <ul className={styles.top}>
        <li className={styles.active}>All</li>
        <li>Animals</li>
        <li>Sky</li>
        <li>People</li>
        <li>Skyscrapers</li>
        <li>Forest</li>
        <li>Rain</li>
        <li>Highway</li>
        <li>Mountains</li>
        <li>Animals</li>
        <li>Sky</li>
        <li>Skyscrapers</li>
        <li>Highway</li>
        <li>Beach</li>
        <li>Stadium</li>
      </ul>
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
