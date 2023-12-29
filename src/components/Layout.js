import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UserProfile from "./UserProfile";
import TopNav from "./TopNav";
import ForCompanies from "./ForCompanies";
import SellCar from "./SellCar";
import Blog from "../routes/Blog";
import CarsList from "./CarsList";
import Home from "../routes/Home";
import News from "../routes/News";
import About from "../routes/About";
import CarDetails from "../routes/CarDetails";

import { Routes, Route, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <TopNav />
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarsList />} />
          <Route path="/cars/*" element={<CarDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<News />} />
          <Route path="/sell-car" element={<SellCar />} />
          <Route path="/for-companies" element={<ForCompanies />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
