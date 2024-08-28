import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home_page from "./components/Home_page";

function Landing() {
  return (
    <div className="bg-white">
      <Navbar />
      <Home_page />
      <Footer />
    </div>
  );
}

export default Landing;
