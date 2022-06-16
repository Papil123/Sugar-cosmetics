import React ,{ createContext,useState} from "react";
import { useEffect } from "react";
import axios from "axios";

export const  CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cartData ,setCartData] = useState([])
    useEffect( () => {
        const getdata = async()=>{
            let res = await fetch("http://localhost:8080/cartData") 
            let d = await res.json()
            setCartData(d)
        }
        getdata()
      }, []);
    
    const Add = ()=>{
        axios.post('http://localhost:8080/cartData',cartData)
        .then(function (response) {
          console.log(response.data)})   
    };
    const remove =(item)=>{
        axios.delete('http://localhost:8080/cartData',item)
        .then(function (response) {
          console.log(response.data)})   
    };

    return (
        <CartContext.Provider value={{cartData,Add,remove}} >{children}</CartContext.Provider>
    );
}