import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Login from "../pages/Login";
import News from "../pages/News";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
