import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Lip from "../pages/Lip";
import Eye from "../pages/Eye"
import FaceMakeUp from "../pages/FaceMakeUp"
import Cart from "../pages/Cart"

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Lip" element={<Lip />} />
        <Route path="/eye" element={<Eye />} />
        <Route path="/face" element={<FaceMakeUp />} />
        <Route path="/cart*" element={<Cart />} />
        
      </Routes>
    </div>
  );
};

export default MainRoutes;
