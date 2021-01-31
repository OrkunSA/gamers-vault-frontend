import React from "react";
import "./BrowseGames.css";
import Footer from "../components/Footer";
import "../components/Footer.css";
import SearchBar from "./containers/SearchContainer";
import ResultsContainer from "./containers/ResultsContainer";

class BrowseGames extends React.Component {
  render() {
    return (
      <div className="search-page">
        <SearchBar />
        <ResultsContainer />
        <Footer />
      </div>
    );
  }
}

export default BrowseGames;
