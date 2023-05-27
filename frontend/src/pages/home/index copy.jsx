import React from "react";
import NavBar from "../../components/Headder";
import Select from "../../components/Headder";
import Footer from "../../components/Headder";
import Hero from "../..components/Headder";

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
