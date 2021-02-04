import React from "react";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { connect } from "react-redux";
import "./Collection.css";

class CollectionCard extends React.Component {
  // state = {
  //   collection: this.props.gameCollection,
  // };
  // handleOnClick = (id) => {
  //   fetch(`http://localhost:3001/user/collections/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json(res))
  //     .then((data) => {
  //       Swal.fire({
  //         title: "Deleted!",
  //         text: "Game has been deleted",
  //         icon: "success",
  //         confirmationButtonText: "Back",
  //       });
  //       let remainingGames = this.state.collection.filter(
  //         (game) => game.id !== data.id
  //       );
  //       this.setState({ collection: remainingGames });
  //       this.render();
  //     });
  // };

  render() {
    let { id, name, picture } = this.props.gameObj;

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
          <button onClick={() => this.props.deleteFromCollection(id)}>
            Delete from Collection
          </button>
        </div>
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     gameCollection: state.collection,
//   };
// };

export default CollectionCard;
