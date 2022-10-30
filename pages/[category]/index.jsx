import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Top from "../../components/top/top";
import Nav from "../../components/nav/nav";
import Cam from "../../components/cam/cam";
import PaginationC from "../../components/pagination/pagination";
import Footer from "../../components/footer/footer";
import styles from "../../styles/Category.module.css";

const Category = () => {
  const router = useRouter();

  const imageUrl = `https://picsum.photos/300/300?random=${Math.random()}`;
  const location = "Santa Monica, CA United States";
  const views = "3.1M";

  return (
    <div className={styles.container}>
      <Nav />
      <Top />
      <div className={styles.top}>
        <p>{router?.query?.category}</p>
      </div>
      <div className={styles.cams}>
        {[...Array(15)].map((_, index) => (
          <Cam
            key={index}
            datas={{
              title: router?.query?.category,
              imageUrl,
              location,
              views,
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
