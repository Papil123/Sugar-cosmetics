import React, { useContext } from "react";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contex/Authcontex";

const Register = () => {
  //   const   onClose = props.onClose
  const {isAuth,login,logout} = useContext(AuthContext);
  const handleClick = () => {
    login()
  };
  return (
    <div>
      <br />
      <br />

      <input placeholder="First Name.." />
      <input placeholder="Last Name.." />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <input placeholder="Email.." />
      <br />
      <br />
      <Button backgroundColor="#FC2779" onClick={handleClick}>
        <Link to="/"> Sign Up</Link>
      </Button>
    </div>
  );
};

export default Register;
