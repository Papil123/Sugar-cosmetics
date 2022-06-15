import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Lip from "../pages/Lip";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Lip" element={<Lip />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
