import React from "react";
import { useRouter } from "next/router";

import styles from "./top.module.css";

const Top = ({ tablet, phone }) => {
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
    "Architecture",
    "Art",
    "Fashion",
    "Technology",
  ]);

  const goToCategory = (e) => {
    router.push(`/${e.target.innerHTML.toLowerCase()}`);
  };

  return (
    <ul className={styles.container}>
      <li
        onClick={() => router.push("/")}
        style={
          router?.query?.category
            ? {}
            : { background: "var(--blue)", color: "var(--white)" }
        }
      >
        All
      </li>
      {tablet &&
        categories.slice(0, 9).map((category, index) => (
          <li
            onClick={goToCategory}
            key={index}
            style={
              router?.query?.category == category.toLowerCase()
                ? { background: "var(--blue)", color: "var(--white)" }
                : {}
            }
          >
            {category}
          </li>
        ))}
      {phone &&
        categories.slice(0, 4).map((category, index) => (
          <li
            onClick={goToCategory}
            key={index}
            style={
              router?.query?.category == category.toLowerCase()
                ? { background: "var(--blue)", color: "var(--white)" }
                : {}
            }
          >
            {category}
          </li>
        ))}
      {!tablet &&
        !phone &&
        categories.map((category, index) => (
          <li
            onClick={goToCategory}
            key={index}
            style={
              router?.query?.category == category.toLowerCase()
                ? { background: "var(--blue)", color: "var(--white)" }
                : {}
            }
          >
            {category}
          </li>
        ))}
    </ul>
  );
};

export default Top;
