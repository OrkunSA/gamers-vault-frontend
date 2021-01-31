import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>New Releases</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="/" text="textexttext" label="Adventure" path="/" />
            <CardItem src="/" text="textexttext" label="Strategy" path="/" />
            <CardItem src="/" text="textexttext" label="Action" path="/" />
          </ul>
        </div>
      </div>
      <h1>Top Rated Games</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="/" text="textexttext" label="Action" path="/" />
            <CardItem src="/" text="textexttext" label="Adventure" path="/" />
            <CardItem src="/" text="textexttext" label="Strategy" path="/" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
