import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import { MdLocationOn } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { BsCloudsFill } from "react-icons/bs";

import Ad from "../../components/ad/ad";
import Nav from "../../components/nav/nav";
import Cam from "../../components/cam/cam";
import styles from "../../styles/Cam.module.css";
import Footer from "../../components/footer/footer";
import Player from "../../components/player/player";

const CamPage = () => {
  const router = useRouter();

  // const geoUrl =
  //   "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  return (
    <div className={styles.container}>
      <Nav />
      <Player />
      <div className={styles.info}>
        <div className={styles.left}>
          <p className={styles.title}>Tidal Basin Cam</p>
          <p>
            <MdLocationOn className={styles.icon} />
            Santa Monica, CA United States
          </p>
          <p>
            <AiFillEye className={styles.icon} />
            3.1M views
          </p>
        </div>
        <div className={styles.right}>
          <p>
            <BsCloudsFill className={styles.icon} />A few Clouds
          </p>
          <p>Wind 13.8 mph NNE</p>
          <p>54 0F</p>
          <p>Gust 0.0 mph</p>
          <p>Humidity 30.5%</p>
          <p>Visibility 10 miles</p>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.left}>
          <p>
            Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar
            commodo orci, suscipit porttitor velit elementum non. Fusce nec
            pellentesque erat, id lobortis nunc. Donec dui leo, ultrices quis
            turpis nec, sollicitudin sodales tortor. Aenean dapibus magna quam,
            id tincidunt quam placerat consequat. Nulla eu laoreet ex.
            Vestibulum nec vulputate turpis, id euismod orci. Phasellus
            consectetur tortor est. Donec lectus ex, rhoncus ac consequat at,
            viverra sit amet sem. Aliquam sed vestibulum nibh. Phasellus ut
          </p>
        </div>
        <div className={styles.right}>
          {/* <ComposableMap>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    width={100}
                    height={100}
                  />
                ))
              }
            </Geographies>
          </ComposableMap> */}
        </div>
      </div>
      <div className={styles.recomends}>
        <div className={styles.left}>
          <div className={styles.top}>
            <p>Related WorldCams</p>
            <Link href={`/${router?.query?.category}`}>Seel all</Link>
          </div>
          <div className={styles.cams}>
            {[...Array(6)].map((_, index) => (
              <Cam key={index} width={280} title={router?.query?.category} />
            ))}
          </div>
        </div>
        <div className={styles.right}>
          {[...Array(1)].map((_, index) => (
            <Ad key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CamPage;
