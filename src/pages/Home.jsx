import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Suppliers from "../components/Suppliers";
import Shortcut from "../components/Shortcut";
import Compliance from "../components/Compliance";
import AboutUs from "../components/AboutUs";
import Testimony from "../components/Testimony";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Compliance />
      <AboutUs />
      <Shortcut />
      <Suppliers />
      <Testimony />
      <Footer />
    </>
  );
}

export default Home;
