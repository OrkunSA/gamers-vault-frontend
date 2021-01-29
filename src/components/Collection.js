import React from "react";
import { connect } from "react-redux";

const Collection = ({ user }) => {
  console.log(user);
  return <h1>Welcome {user.email}</h1>;
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.currentUser,
  };
};

export default connect(mapStateToProps)(Collection);
