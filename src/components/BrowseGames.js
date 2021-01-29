import React from "react";
import { connect } from "react-redux";
import { getGames } from "../redux/actions/gameActions";

class BrowseGames extends React.Component {
  componentDidMount() {
    this.props.getGames();
  }
  render() {
    return <div>Working</div>;
  }
}

export default connect(null, { getGames })(BrowseGames);
