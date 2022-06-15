import React from "react";
import { Input, InputGroup, Button, InputLeftAddon } from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import styles from "../components/Navbar.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className={styles.loginhead}>
        <h2>
          <i class="fa-solid fa-mobile-screen"> </i> Login/Sign-up Using phone
        </h2>
      </div>
      <br />
      <InputGroup width="500px">
        <InputLeftAddon children="+91" />
        <Input type="tel" placeholder="phone number" />
        <Button
          width="150px"
          backgroundColor="#FC2779
                  cd sugar"
          marginLeft="20px"
        >
          Request OTP
        </Button>
      </InputGroup>
      <br />
      <p style={{ color: "#FC2779" }}>
        Enter your mobile number to request an OTP
      </p>
      <br />
      <hr />
      <br />
      <p>Enter the OTP received on your mobile number</p>
      <br />
      <>
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </>
      <br />
      <br />
      <Button backgroundColor="#FC2779">
        <Link to="/Register"> Verify OTP</Link>
      </Button>
    </div>
  );
};

export default Login;
