import React, { useContext, useEffect, useState } from "react";
import styles from "./Lips.module.css";
import Card from "../components/Card";
import axios from "axios";
import Remove from "../components/Remove";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Select,
} from "@chakra-ui/react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const Lip = () => {
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const getdata = async () => {
      let res = await fetch("http://localhost:8080/cartData");
      let d = await res.json();
      setData(d);
    };
    getdata();
  }, []);
  //   console.log( typeof(data[0].price))
  let cartTotal = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );
  const Checkout = () => {
    return (
        <>
         <ModalHeader>Checkout</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <div className={styles.modal}>
         <div>
        <h2>Deliverd to: Chatrapati sq, Nagpur, Maharashtra</h2>
         </div>
          <div> Phone:1234567890</div>
         <div> Expected Delivery: 20 june 2022</div>
         </div>
        </ModalBody>

        <ModalFooter>
          <Select placeholder="Select payment Option">
            <option value="option1">Credit card</option>
            <option value="option2">Debit card</option>
            <option value="option3">Cash on Delivery</option>
          </Select>
          <Button colorScheme="blue" mr={3} onClick={handleClick}>
            <Link to='*success' > Pay</Link>
           
          </Button>
        </ModalFooter></>
       
    );
  };
  const Success =()=>{
    return(
        <>
        <ModalHeader>Peyment Successfull </ModalHeader>
       <ModalCloseButton />
       <ModalBody>
       <div className={styles.success}>
        <div>
       <h2>Thank you for shopping with us! <img src="https://emoji.slack-edge.com/T01CBR70TN2/blob_excited/5d5d483e6784ad8a.gif" alt=""/></h2>
        </div>
         
        </div>
       </ModalBody>

       <ModalFooter>
         
         <Button colorScheme="blue" mr={3} onClick={onclose}><Link to="/"> Okay</Link>
          
         </Button>
       </ModalFooter></>
    )
  }
  const handleClick = () => {
    setData([]);
    // onClose();
    return <div>Payment Sucessfull ,Thank you Shopping </div>;
  };
  return (
    <div className={styles.main}>
      {data.length === 0 ? (
        <div className={styles.empty}>
          <img
            src="https://www.omegafoods.in/images/emptycart2.jpg"
            alt="empty cart"
          />
          <h3>Your cart is empty</h3>
        </div>
      ) : (
        <div className={styles.card}>
          {data.map((item, index) => (
            <Remove key={item.id} info={item} />
          ))}
        </div>
      )}

      <>
        <div>
          <h2>Cart Total:{cartTotal}</h2>
          <Button onClick={onOpen}>checkout</Button>

          <Modal size="xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <Routes>
                <Route path="/" element={<Checkout/>} />
                <Route path="*success" element={<Success/>} />
               
              </Routes>
              <Outlet/>
            </ModalContent>
          </Modal>
        </div>
      </>
    </div>
  );
};

export default Lip;
