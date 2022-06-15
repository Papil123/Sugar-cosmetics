import React, { useContext } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import styles from "./Navbar.module.css";
import Login from "../pages/Login";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,Portal} from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Register from "../pages/Register";
import { AuthContext } from "../contex/Authcontex";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {isAuth,logout} = useContext(AuthContext)
  console.log(isAuth)
  const btnRef = React.useRef();

  return (
    <div className={styles.Navbar}>
      <>
        <Link to="/">
          <img
            className={styles.logo}
            src="https://in.sugarcosmetics.com/desc-images/pride-logo-option.gif"
          />
        </Link>
      </>
      <div className={styles.searchbar}>
        <>
          {" "}
          <input
            className={styles.searchInput}
            placeholder="Try Liquid Lipstick"
          />
        </>

        <div>
          <Button
            width="113px"
            border="none"
            backgroundColor="black"
            color="white"
          >
            Search
          </Button>
        </div>
      </div>
      <div>
        <>
        <div>{isAuth ===true ? <Button ref={btnRef}
            border="none"
            backgroundColor="white"
           ><i class="fa-solid fa-user"></i><Menu>
            <MenuButton>Hello Papil</MenuButton>
            <Portal>
              <MenuList fontSize='13px'>
                <MenuItem><Button  onClick={logout} >Logout</Button></MenuItem>
               
                
              </MenuList>
            </Portal>
          </Menu></Button>:<Button
            ref={btnRef}
            border="none"
            backgroundColor="white"
            onClick={onOpen}
          >
            <i class="fa-solid fa-user"></i>
           <Link to='login' > Login/Register</Link> 
          </Button> 
          }</div>
          
          <Drawer
            size="lg"
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader fontWeight="light">
                <h1 style={{ fontWeight: "bold", color: "pink" }}>
                  Login/Sign up
                </h1>
              </DrawerHeader>

              <DrawerBody>
                <Routes>
                  <Route path="" element={<h1>Login Successfull!!</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/Register" element={<Register {...onClose } />} />
                </Routes>
             
               <Outlet/>
              </DrawerBody>

              <DrawerFooter>
                <div>
                  Registering for this site allows you to access your order
                  status and history. Just fill in the fields below, and we'll
                  get a new account set up for you in no time. We will only ask
                  you for information necessary to make the purchase process
                  faster and easier.
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      </div>
      <div className={styles.tributton}>
        <p>
          <Link to="/wishlist">
            <i class="fa-solid fa-heart"></i>
          </Link>
        </p>
        <p>
          <Link to="/cart">
            <i class="fa-solid fa-bag-shopping"></i>
          </Link>
        </p>
        <p>
          <Link to="/offers">
            <img
              className={styles.discount}
              src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg"
            ></img>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
