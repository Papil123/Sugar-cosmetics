import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import {Login} from "../pages/Login";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
};

export default MainRoutes;
