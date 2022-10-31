import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";

import Nav from "../components/nav/nav";
import Cams from "../components/cams/cams";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer/footer";
import PaginationC from "../components/pagination/pagination";
import Top from "../components/top/top";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [cams, setCams] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend.interviewblindspots.com/displaycode/listpics/")
      .then((res) => {
        setCams(res?.data?.pics);

        //getting categories
        const categories = _.countBy(
          res?.data?.pics?.map((cam) => cam?.categories)
        );
        setCategories(Object.keys(categories));
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Nav />
      <Top categories={categories} />
      <div className={styles.cams}>
        {categories.map((category, index) => (
          <Cams
            key={index}
            title={category}
            num={index}
            cams={cams.filter((cam) => cam?.categories === category)}
          />
        ))}
      </div>

      <PaginationC />
      <Footer />
    </div>
  );
}
