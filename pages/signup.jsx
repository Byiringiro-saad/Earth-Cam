import React, { useEffect, useState } from "react";
import Link from "next/link";

import Ad from "../components/ad/ad";
import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav";
import styles from "../styles/Auth.module.css";

const Signup = () => {
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
            <Ad key={i} height={90} width={49} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
