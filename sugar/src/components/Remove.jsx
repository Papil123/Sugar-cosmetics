import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Card.module.css";
import axios from "axios"
const Card = (props) => {
    let item = props.info
    let remove = props.remove
    const[cartData,setCartData] =useState(item)
    let [count,setCount] =useState(1)

   
    const AddToCart =()=>{
        setCartData(item)
       
        remove(item,props.index)
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
      <button className={styles.cartBtn}  onClick={AddToCart} >Remove from cart</button>

       <div className={styles.counter}><button onClick={()=>setCount(count=count+1)}>+</button><div>{count}</div><button onClick={()=>setCount(count--)}>-</button></div>    
    </div>
  );
};

export default Card;
