import React, { Component } from "react";
import { Route, withRouter, NavLink } from "react-router-dom";
import "./App.css";
import LogIn from "./components/Login/Login";
import SignUp from "./components/SignUpForm/SignUp";
import Post from "./components/Post/Post";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <h1>Welcome to trEATs</h1>
          <nav className="main-nav">
            <NavLink className="app-link" to="/" exact>
              Users
            </NavLink>
            <NavLink
              onClick={this.logout}
              className="app-link"
              to="/login"
              exact
            >
              Log Out
            </NavLink>
            <NavLink className="app-link" to="/login" exact>
              Login
            </NavLink>
            <NavLink className="app-link" to="/signup" exact>
              SignUp
            </NavLink>
          </nav>
        </header>
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/post" component={Post} />
      </div>
    );
  }
}

export default withRouter(App);
