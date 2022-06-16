import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Card.module.css";
import axios from "axios"
const Card = (props) => {
    let item = props.info
    const[cartData,setCartData] =useState(item)
    const[itemData,setItemData] = useState({})
    // useEffect( () => {
    //     const getdata = async()=>{
    //         let res = await fetch("http://localhost:8080/Cartdata") 
    //         let d = await res.json()
    //         setCartData(d)
    //     }
    //     getdata()
    //   }, [itemData]);
    const AddToCart =()=>{
        setCartData(item)
        // console.log(item)
        // setCartData({...cartData,item}) 
        axios.post('http://localhost:8080/cartData',cartData)
        .then(function (response) {
          console.log(response.data)})   
    }
  return (
    <div className={styles.card}>
      <img src={item.img} />
      <h3>{item.title}</h3>
      <div className={styles.price}>
        <p>Mrp: {item.mrp}</p>
        <p> Price: {item.price}</p>
       
      </div>
      <p>Discount: {item.discount}</p>
      <button className={styles.cartBtn}  onClick={AddToCart} >Add to cart</button>
    </div>
  );
};

export default Card;
