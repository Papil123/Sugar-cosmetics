import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src="https://in.sugarcosmetics.com/Footer_sugar_icon.png" />

      <div className={styles.socialIcons}>
        <> <i style={{ color: "#999" }} class="fa-brands  fa-facebook-f fa-lg"></i></>
       <><i style={{ color: "#999" }} class="fa-regular  fa-envelope fa-lg"></i></>
        <><i style={{ color: "#999" }} class="fa-brands  fa-instagram fa-lg"></i></>
        <><i
          style={{ color: "#999" }}
          class="fa-brands  fa-pinterest-p fa-lg"
        ></i></>
        <><i style={{ color: "#999" }} class="fa-brands  fa-tumblr fa-lg"></i></>
        <><i style={{ color: "#999" }} class="fa-brands  fa-youtube fa-lg"></i></>
        <><i style={{ color: "#999" }} class="fa-brands  fa-twitter fa-lg"></i></>
        
      </div>
      <div className={styles.split}>
        <div>
           <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
           <input  />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
