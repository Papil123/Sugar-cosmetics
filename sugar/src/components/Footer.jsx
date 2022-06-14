import React from "react";
import styles from "./Footer.module.css";


const Footer = () => {
  return (
    
    <div className={styles.footer}>
      <img src="https://in.sugarcosmetics.com/Footer_sugar_icon.png" />

      <div className={styles.socialIcons}>
        <>
          {" "}
          <i
            style={{ color: "#999" }}
            class="fa-brands  fa-facebook-f fa-lg"
          ></i>
        </>
        <>
          <i
            style={{ color: "#999" }}
            class="fa-regular  fa-envelope fa-lg"
          ></i>
        </>
        <>
          <i
            style={{ color: "#999" }}
            class="fa-brands  fa-instagram fa-lg"
          ></i>
        </>
        <>
          <i
            style={{ color: "#999" }}
            class="fa-brands  fa-pinterest-p fa-lg"
          ></i>
        </>
        <>
          <i style={{ color: "#999" }} class="fa-brands  fa-tumblr fa-lg"></i>
        </>
        <>
          <i style={{ color: "#999" }} class="fa-brands  fa-youtube fa-lg"></i>
        </>
        <>
          <i style={{ color: "#999" }} class="fa-brands  fa-twitter fa-lg"></i>
        </>
      </div>
      <div className={styles.split}>
        <div>
          <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
          <div style={{marginTop:'30px'}} >
          <input
            style={{ backgroundColor: "black", textDecoration:'underline', height:'60px',padding:'1px 2px', }}
            placeholder="Your email address"
          />
          <button
            style={{
              backgroundColor: "#FC2779",
              width: "94px",
              height: "40px",
              borderRadius:'5px'
            }}
          >
            Sign Up
          </button>
          </div>
         
        </div>
        <div>
          <h5>GET THE NEW SUGAR APP TODAY </h5>
          <div style={{display:'flex',marginTop:'30px'}}>
            <div style={{width:'180px',color:'#999999'}} >Tap into a better shopping experience</div>
            
            <div className={styles.appstore}  >
              <> <img src="https://in.sugarcosmetics.com/playstore.png" /></>
              <> <img src ='https://in.sugarcosmetics.com/apple-store.png' /></>
             
            </div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
      <h5>INFORMATION</h5>
       <div >
        <>  <a href="">Stores</a></>
        <> <a href="">Terms&Conditions</a ></>
         <>  <a href="">Returns</a></>
        <> <a href="">FAQ's</a></>
         <> <a href="">About Us</a></>
         
       </div>
      </div>
      <div className={styles.touch}>
      <h5>GET IN TOUCH</h5>
       <div >
        <div>  <a href="">Call us at</a><br/>
            <a >1800-209-9933</a>
            <p className={styles.grey} >Monday to Friday :9am to 7 pm</p>
        </div>
        <div> <a href="">Support</a ><br/>
            <a href="">hello@sugarcosmetics.com</a>
        </div>
         <div>  <a href="">Careers</a><br/>
             <a href="">We're hiring!</a>
         </div>
        <div> <a href="">PRESS & MEDIA</a><br/>
              <a href="" >pr@sugarcosmetics.com</a>
        </div>
         <div> <a href="">INFLUENCER COLLAB</a><br/>
               <a>JOIN US</a>
         </div>
         
       </div>
      </div>
    </div>
  );
};

export default Footer;
