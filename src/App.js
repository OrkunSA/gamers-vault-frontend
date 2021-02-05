import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Collection from "./components/Collection/Collection";
import Signup from "./components/Signup_Login/Signup";
import Login from "./components/Signup_Login/Login";
import Navbar from "./components/Home/Navbar";
import { checkLoggedIn } from "./redux/actions/authActions";
import { connect } from "react-redux";
import "./App.css";
import BrowseGames from "./components/BrowseGames/BrowseGames";

class App extends React.Component {
  state = {
    loading: true,
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  componentDidMount() {
    this.props.checkLoggedIn(this.toggleLoading);
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/collection" component={Collection}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/browse" component={BrowseGames}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

export default connect(mapStateToProps, { checkLoggedIn })(App);
