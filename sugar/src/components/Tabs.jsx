import React, { useState } from "react";
import styles from "./Tabs.module.css";

// import { Link } from "react-router-dom";

const Tabs = () => {
  // const [hover, setHover] = useState(false);
  return (
    <div className={styles.tabs}>
      <div>
       
      </div>
      <div>
        <p>BRUSHES</p>
      </div>
      <div>
        <p>SKINCARE</p>
      </div>
      <div>
        <p>TRENDING</p>
      </div>
      <div>
        <p>BLOGS</p>
      </div>
      <div>
        <p>OFFERS</p>
      </div>
      <div>
        <p>STORIES</p>
      </div>
    </div>
  );
};

export default Tabs;
