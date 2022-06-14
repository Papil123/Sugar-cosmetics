import React, { useState } from "react";
import styles from "./Tabs.module.css";
import DropDownMenuSelect from "react-nested-menu-selector";

// import { Link } from "react-router-dom";

const Tabs = () => {
  // const [hover, setHover] = useState(false);
  // const option = {
  //   placeholder: "Master",
  //   options: [
  //     {
  //       value: "Sample-Menu",
  //       label: "Sample-Menu",
  //       hidden: false,
  //       logo: "path_to_logo",
  //       options: [
  //         {
  //           value: "Sample-Sub-Menu",
  //           label: "Sample-Sub-Menu",
  //           hidden: false,
  //           logo: "path_to_logo",
  //           options: [
  //             {
  //               value: "Sub-Menu-Option-1",
  //               label: "Sub-Menu-Option-1",
  //               hidden: false,
  //               logo: "path_to_logo",
  //             },
  //             {
  //               value: "Sub-Menu-Option-2",
  //               label: "Sub-Menu-Option-2",
  //               hidden: true,
  //               logo: "path_to_logo",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // };
  return (
    <div className={styles.tabs}>
      <div>
        {/* <DropDownMenuSelect
          values={option}
          
        /> */}
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
