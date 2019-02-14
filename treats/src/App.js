import React, { Component } from "react";
import { Route, withRouter, NavLink } from "react-router-dom";
import "./App.css";
import LogIn from "./components/Login/Login";
import SignUp from "./components/SignUpForm/SignUp";
import Post from "./components/Post/Post";
import ArtistsView from "./components/ArtistsView/ArtistsView";
import styled, { css } from "styled-components";

const Wrapper = styled.section`
  color: palevioletred;
  padding: 4em;
  background: papayawhip;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <header className="App-Header">
            <h1>Welcome to trEATs</h1>
            <nav className="main-nav">
              <NavLink className="app-link" to="/artists" co exact>
                Artists
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
          <Route exact path="/artists" component={ArtistsView} />
        </Wrapper>
      </div>
    );
  }
}

export default withRouter(App);
