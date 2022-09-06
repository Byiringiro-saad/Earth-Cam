import React from "react";
import { useRouter } from "next/router";

import styles from "./footer.module.css";

const Footer = () => {
  const router = useRouter();
  const [categories, setCategories] = React.useState([
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

  const goToCategory = (e) => {
    router.push(`/${e.target.innerHTML.toLowerCase()}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>SmartCam</p>
      </div>
      <div className={styles.right}>
        <div className={styles.column}>
          <p className={styles.header}>Resources</p>
          <ul>
            {categories.map((category, index) => (
              <li onClick={goToCategory} key={index}>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Links</p>
          <ul>
            <li>Home</li>
            <li>WorlCam Tv</li>
            <li>My worldCam</li>
          </ul>
        </div>
        <div className={styles.column}>
          <p className={styles.header}>Follow us</p>
          <ul>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
