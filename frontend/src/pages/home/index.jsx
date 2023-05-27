import React from "react";
import NavBar from "./NavBar";
import Select from "./Select";
import Footer from "./Footer";
import Hero from "./Hero";

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Select />
      <Footer />
    </div>
  );
}

export default Home;
