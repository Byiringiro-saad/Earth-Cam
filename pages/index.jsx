import React, { useEffect, useState } from "react";

import axios from "axios";

import Nav from "../components/nav/nav";
import Cams from "../components/cams/cams";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer/footer";
import PaginationC from "../components/pagination/pagination";
import Top from "../components/top/top";

export default function Home() {
  const [cams, setCams] = useState([
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

 const [listPicsMetadata, setListPicsMetadata]  = useState([]);

  useEffect(() => {
    axios.get("https://backend.interviewblindspots.com/displaycode/listpics/")
        .then (res => {
            console.log("my pics is");
            console.log (res)
            console.log (res?.data?.pics)
            setListPicsMetadata(res?.data?.pics);
        }).catch (err => {
            console.log(err)
        })
    }, [])//(, [dispatch])

    var urls = [];
    //var urls = ["https://url1.com/xyz.png", "https://url2.com/abc.png"];
    //urls[index % 2]
    //start from some random number, for now
    var min = 10;
    var max = 1000;
    var startIndex = Math.floor(Math.random() * (max - min + 1) + min);
    var howManyPics = 5;
    for (var i=startIndex; i<startIndex+howManyPics; i++) {
        //Eg: https://backend.interviewblindspots.com/displaycode/pic/output703.jpg",
        var currUrl = "https://backend.interviewblindspots.com/displaycode/pic/output"+i+".jpg";
        urls.push(currUrl);
    }  

  return (
    <div className={styles.container}>
      <Nav />
      <Top />

      <div className={styles.cams}>
        {listPicsMetadata.map((picMetadata, index) => (
          <Cams key={index} title={picMetadata.name} num={index} url={picMetadata.url} />
        ))}
      </div>





      <div className={styles.cams}>
        {cams.map((cam, index) => (
          <Cams key={index} title={cam} num={index} url={urls[index]} urlArray={urls}/>
        ))}
      </div>
      <PaginationC />
      <Footer />
    </div>
  );
}
