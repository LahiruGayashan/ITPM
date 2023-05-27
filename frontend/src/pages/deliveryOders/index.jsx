import React from "react";
import Hero from "./Hero";
import All from "./All";
import NavBar from "../home/NavBar";

function Oder() {
  return (
    <div>
      <div className="bg-yellow-400"></div>
      <NavBar />
      <h1 className="text-4xl font-medium text-center mt-10">Harvest Post</h1>
      <Hero />
      <All />
    </div>
  );
}

export default Oder;
