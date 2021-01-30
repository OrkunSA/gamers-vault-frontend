import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/neonartvisual.mp4" autoPlay loop muted />
      <h1>IT'S GAME TIME</h1>
      <p>Get Ready!</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          <Link to="/browse" className="btn" color={{ color: "#242424" }}>
            BROWSE GAMES
          </Link>
          <i className="fas fa-search"></i>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
