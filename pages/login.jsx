import React, { useEffect, useState } from "react";
import Link from "next/link";

import Ad from "../components/ad/ad";
import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav";
import styles from "../styles/Auth.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.content}>
        <form className={styles.form}>
          <h1 className={styles.title}>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <div className="line"></div>
          <p>
            Don&apos;t have an account? <span> </span>
            <Link href="/signup">Signup</Link>
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

export default Login;
