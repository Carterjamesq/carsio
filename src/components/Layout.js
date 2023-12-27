import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../routes/Home";
import About from "../routes/About";
import Blog from "../routes/Blog";
import News from "../routes/News";
import CarsList from "./CarsList";

import { Routes, Route } from "react-router-dom";
import UserProfile from "./UserProfile";
import TopNav from "./TopNav";
import SellCar from "./SellCar";
import ForCompanies from "./ForCompanies";

const Layout = () => {
  return (
    <>
      <TopNav />
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarsList />} />
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
