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
  const [tablet, setTablet] = useState(false);
  const [phone, setPhone] = useState(false);

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
      <div className={styles.top}>
        <p>{router?.query?.category}</p>
      </div>
      <div className={styles.cams}>
        {[...Array(15)].map((_, index) => (
          <Cam
            key={index}
            title={router?.query?.category}
            width={tablet ? 32 : phone ? 100 : 18.5}
          />
        ))}
      </div>
      <PaginationC />
      <Footer />
    </div>
  );
};

export default Category;
