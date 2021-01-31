import React from "react";
// import SearchBar from "./containers/SearchBarContainer";
import ResultsContainer from "./containers/ResultsContainer";

class BrowseGames extends React.Component {
  render() {
    return (
      <div className="search-page">
        {/* <SearchBar /> */}
        <ResultsContainer />
      </div>
    );
  }
}

export default BrowseGames;
