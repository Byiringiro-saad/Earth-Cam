import _ from "lodash";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Top from "../../components/top/top";
import Nav from "../../components/nav/nav";
import Cam from "../../components/cam/cam";
import PaginationC from "../../components/pagination/pagination";
import Footer from "../../components/footer/footer";
import styles from "../../styles/Category.module.css";

const Category = () => {
  const router = useRouter();
  const [cams, setCams] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend.interviewblindspots.com/displaycode/listpics/")
      .then((res) => {
        const cams = res?.data?.pics?.filter(
          (cam) => cam?.categories === router?.query?.category?.toLowerCase()
        );
        setCams(cams);

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

  console.log(cams);
  const imageUrl = `https://backend.interviewblindspots.com/displaycode/randompic/`;
  const location = "Santa Monica, CA United States";
  const views = "3.1M";

  return (
    <div className={styles.container}>
      <Nav />
      <Top categories={categories} />
      <div className={styles.top}>
        <p>{router?.query?.category}</p>
      </div>
      <div className={styles.cams}>
        {cams.map((cam, index) => (
          <Cam
            key={index}
            datas={{
              title: router?.query?.category,
              url: cam?.url,
              location: cam?.location,
              views: cam?.viewcount,
              name: cam?.name,
            }}
          />
        ))}
      </div>
      <PaginationC />
      <Footer />
    </div>
  );
};

export default Category;
