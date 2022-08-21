import React from "react";
import { useRouter } from "next/router";

import Top from "../../components/top/top";
import Nav from "../../components/nav/nav";
import Cam from "../../components/cam/cam";
import PaginationC from "../../components/pagination/pagination";
import Footer from "../../components/footer/footer";
import styles from "../../styles/Category.module.css";

const Category = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Nav />
      <Top />
      <div className={styles.top}>
        <p>{router?.query?.category}</p>
      </div>
      <div className={styles.cams}>
        {[...Array(15)].map((_, index) => (
          <Cam key={index} title={router?.query?.category} width={18.5} />
        ))}
      </div>
      <PaginationC />
      <Footer />
    </div>
  );
};

export default Category;
