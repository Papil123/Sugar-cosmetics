import React, { useEffect, useState } from "react";
import Slideshow from "../components/slideshow";
import styles from "./Home.module.css";

const Home = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("  http://localhost:8080/data").then((response) =>
  //     response.json()
  //   )
  //   .then((d) =>{
  //     console.log(d);
  //     setData(d)
  //   } );
  // },[]);
  const colors = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/70252059-0efb-40b0-b659-6d27afafa0ee.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/309d5880-c650-4773-9cb9-5b8efc593ac0.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/ae9f9040-e1f1-4c94-bd8d-c05be3ce5fe2.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/9f159288-063a-4ca4-926a-7fd43c13d370.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/7d151892-4d17-466e-8a06-743392796264.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg",
    "https://d32baadbbpueqt.cloudfront.net/549c6869-246f-4dba-8cde-7a6798f866ec.jpg",
    "https://d32baadbbpueqt.cloudfront.net/fc27be93-0882-45d7-aef9-0ad461636eae.jpg",
  ];
  const delay = 5000;
  const second = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/11b811a4-2faa-4985-98f0-01af9f2df943.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/2cf0052d-e531-4f6e-9b00-e31f3642f0b3.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/fb9d5eba-b79a-4e38-b01d-fb6cab221874.jpg",
  ];
  const third = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/a9cd0d51-c6e6-4d0c-a75c-94ddcc3c1b08.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg",
  ];
  return (
    <div>
      <Slideshow colors={colo} delay={delay} />
      <div className={styles.heads}>
        <h2>REFER YOUR FRIENDS</h2>
        <img src="https://d32baadbbpueqt.cloudfront.net/f53f2d67-ea43-4959-abca-eba6d87fd598.jpg" />
      </div>
      <div className={styles.heads}>
        <h2>AIR KISSED POWDER LIPSTICKS</h2>
        <iframe
          width="1093"
          height="331"
          src="https://www.youtube.com/embed/VXMBlOqZJbI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className={styles.second}>
        <h2 style={{ fontSize: "32px" }}>QUICK BEAUTY TIPS WITH SUGAR</h2>
        <Slideshow colors={second} delay={delay} />
      </div>

      <div className={styles.heads}>
        <h2>HOT DEALS</h2>
        <div className={styles.grid}>
          <>
            <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/6d99e54c-1213-4184-a8f8-0aca166a298f.jpg" />
          </>
          <>
            <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/9d535c56-b2f8-4f20-a076-79727a1548e4.jpg" />
          </>
          <>
            <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/0e757ba9-9124-4ce5-9a5b-eab5feb63ef0.jpg" />
          </>
        </div>
      </div>
      <br />
      {/* <div style={styles.second}>
        <Slideshow colors={third} delay={delay} />
      </div> */}
    </div>
  );
};

export default Home;
