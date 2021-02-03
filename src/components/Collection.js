import React from "react";
import CollectionCard from "./CollectionCard";
import { connect } from "react-redux";
import { gettingCollection } from "../redux/actions/gameActions";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Collection.css";

class Collection extends React.Component {
  componentDidMount() {
    this.props.gettingCollection();
  }

  render() {
    return (
      <>
        {this.props.gameCollection.length === 0 ? (
          <>
            <div className="browser-container">
              <h1>
                Opps! Looks like you don't have any games in your collection.
                Click below to add some games!
              </h1>
              <div className="browse-button">
                <button className="btn">
                  <Link
                    to="/browse"
                    className="btn"
                    color={{ color: "#242424" }}
                  >
                    BROWSE GAMES
                  </Link>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="results-game-section">
              {this.props.gameCollection.map((game) => {
                return <CollectionCard key={game.id} gameObj={game} />;
              })}
            </div>
            <Footer />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gameCollection: state.collection,
  };
};

export default connect(mapStateToProps, { gettingCollection })(Collection);
