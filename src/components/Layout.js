import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import UserProfile from "./UserProfile";
import TopNav from "./TopNav";
import ForCompanies from "./ForCompanies";
import SellCar from "./SellCar";
import CarsList from "./CarsList";

import Home from "../routes/Home";
import About from "../routes/About";

import Favourites from "./Favourites";
import NewCars from "../routes/NewCars";
import UsedCars from "../routes/UsedCars";

const Layout = () => {
  return (
    <>
      <TopNav />

      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarsList />} />
          <Route path="/new-cars" element={<NewCars />} />
          <Route path="/used-cars" element={<UsedCars />} />
          <Route path="/about" element={<About />} />
          <Route path="/sell-car" element={<SellCar />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/for-companies" element={<ForCompanies />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
