import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import "./Collection.css";

class CollectionCard extends React.Component {
  handleOnClick = (event) => {
    fetch(`http://localhost:3001/user/collections/${event.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json(res))
      .then((data) => {
        switch (data.message) {
          default:
            Swal.fire({
              title: "Deleted!",
              text: "Game has been deleted",
              icon: "success",
              confirmationButtonText: "Back",
            });
        }
      });
    // window.location.reload(false);
  };
  render() {
    let { name, picture } = this.props.gameObj;

    const cardStyle = {
      background: `url(${picture})`,
      backgroundSize: "100% 100%",
      backgroundPosition: "center center",
      width: "auto",
      height: "16vw",
    };
    return (
      <>
        <div>
          <div className="search-game-card animated fadeIn">
            <Link to={`/game/${this.props.gameObj.id}`}>
              <div style={cardStyle} className="search-game-card-image"></div>
            </Link>
            <Link
              className="search-game-text"
              to={`/game/${this.props.gameObj.id}`}
            >
              {name}
            </Link>
          </div>
          <button onClick={() => this.handleOnClick(this.props.gameObj)}>
            Delete from Collection
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gameCollection: state.collection,
  };
};

export default connect(mapStateToProps)(CollectionCard);
