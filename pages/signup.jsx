import React, { useEffect, useState } from "react";
import Link from "next/link";

import Ad from "../components/ad/ad";
import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav";
import styles from "../styles/Auth.module.css";

const Signup = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.content}>
        <form className={styles.form}>
          <h1 className={styles.title}>Signup</h1>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Signup</button>
          <div className="line"></div>
          <p>
            Already have an account? <span> </span>
            <Link href="/login">Login</Link>
          </p>
        </form>
        <div className={styles.right}>
          {[...Array(2)].map((_, i) => (
            <Ad key={i} height={45} width={100} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
