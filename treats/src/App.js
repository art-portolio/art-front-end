import React, { Component } from "react";
import { Route, withRouter, NavLink, Link } from "react-router-dom";
import "./App.css";
import LogIn from "./components/Views/LoginView/Login";
import SignUp from "./components/Views/SignUpView/SignUp";
import PostForm from "./components/Post/PostForm";
import ArtistsView from "./components/ArtistsView/ArtistsView";
import styled, { css } from "styled-components";
import EditPost from "./components/Post/EditPost";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ArtistsView} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/posts" component={PostForm} />
        <Route path="/artists" component={ArtistsView} />
        <Route path="/editpost" component={EditPost} />
      </div>
    );
  }
}

/*
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/post" component={Post} />
      <Route exact path="/artists" component={ArtistsView} />
*/

export default App;
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
