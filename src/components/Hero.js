import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/neonartvisual.mp4" autoPlay loop muted />
      <h1>IT'S GAME TIME</h1>
      <p>Get Ready!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          BROWSE GAMES <i className="fas fa-search"></i>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
