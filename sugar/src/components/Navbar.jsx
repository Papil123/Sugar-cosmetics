import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

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

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <i class="fa-solid fa-user"></i>
        <>
          <Button
            ref={btnRef}
            border="none"
            backgroundColor="white"
            onClick={onOpen}
          >
            Login/Register
          </Button>
          <Drawer
            size='lg'
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader fontWeight="light">
                <i class="fa-solid fa-mobile-screen"> </i> Login/Sign-up Using
                phone
              </DrawerHeader>

              <DrawerBody>
                <InputGroup width='500px'>
                  <InputLeftAddon children="+91" />
                  <Input type="tel" placeholder="phone number" />
                  <Button width='150px' backgroundColor='#FC2779' marginLeft='20px' >Request OTP</Button>
                </InputGroup>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
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
