import React, { Component } from "react";
import { Route, withRouter, NavLink, Link } from "react-router-dom";
import "./App.css";
import LogIn from "./components/Login/Login";
import SignUp from "./components/SignUpForm/SignUp";
import PostForm from "./components/Post/PostForm";
import ArtistsView from "./components/ArtistsView/ArtistsView";
import styled, { css } from "styled-components";

const NavWrapper = styled.section`
  color: palevioletred;
  background: papayawhip;
  height: 30px;
  display: flex;
  justify-content: space-around;
  .nav: active {
    border-bottom: 1px solid blue;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper>
          <li>
            <NavLink className="app-link" to="/artists" exact>
              Artists
            </NavLink>
          </li>
          <li>
            <NavLink className="app-link" to="/login" exact>
              Login
            </NavLink>
          </li>
        </NavWrapper>
        <Route path="/" component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/posts" component={PostForm} />
        <Route path="/artists" component={ArtistsView} />
      </div>
    );
  }
}
function Home() {
  return (
    <div>
      <h1>Welcome to trEATs</h1>
      <h4>Please Login Below: </h4>
      <Link to="/login">Login</Link>
    </div>
  );
}
/*
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/post" component={Post} />
      <Route exact path="/artists" component={ArtistsView} />
*/

export default withRouter(App);
/*
<Route exact path="/login" component={LogIn} />
  <Route exact path="/signup" component={SignUp} />
  <Route exact path="/post" component={Post} />
  <Route exact path="/artists" component={ArtistsView} />
  
*/

/*
Logout function for later use
onClick={this.logout}
              className="app-link"
              to="/login"
              exact
            >
              Log Out


*/
