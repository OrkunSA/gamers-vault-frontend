import React from "react";
import CollectionCard from "./CollectionCard";
import { connect } from "react-redux";
import { gettingCollection } from "../redux/actions/gameActions";

class Collection extends React.Component {
  componentDidMount() {
    this.props.gettingCollection();
  }

  render() {
    return (
      <div className="results-game-section">
        {this.props.gameCollection.map((game) => {
          return <CollectionCard key={game.id} gameObj={game} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gameCollection: state.collection,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     gettingCollection: () => {
//       dispatch(gettingCollection);
//     },
//   };
// };

export default connect(mapStateToProps, { gettingCollection })(Collection);

// const Collection = ({ user }) => {
//   console.log(user);
//   return <h1>Welcome {user.email}</h1>;
// };

// const mapStateToProps = (state) => {
//   return {
//     user: state.auth.currentUser,
//   };
// };

// export default connect(mapStateToProps)(Collection);
