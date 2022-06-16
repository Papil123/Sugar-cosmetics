import React, { useEffect, useState } from "react";
import styles from "./Lips.module.css";
import Card from "../components/Card";
import axios from "axios";

const Lip = () => {
  const [data, setData] = useState([]);
  useEffect( () => {
    const getdata = async()=>{
        let res = await fetch("http://localhost:8080/skin") 
        let d = await res.json()
        setData(d)
    }
    getdata()
  }, []);
  return (
    <div className={styles.main}>
      <h1>Make-Up Lips</h1>
      <div className={styles.card}>
        {data.map((item) => (
          <Card key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
};

export default Lip;
