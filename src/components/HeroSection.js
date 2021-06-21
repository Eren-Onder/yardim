import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import DataSearch from "../Datatable/datasearch";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>HIER IST DIE HILFE, DIE SIE BRAUCHEN</h1>
      <p>IN WELCHEM BEREICH BENÖTIGEN SIE HILFE?</p>

      <div className="hero-btns">
        <DataSearch
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        />
      </div>
    </div>
  );
}

export default HeroSection;
