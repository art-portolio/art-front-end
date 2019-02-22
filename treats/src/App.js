import React, { Component } from "react";
import { Route, withRouter, NavLink, Link } from "react-router-dom";

import HomeView from "./components/Views/GuestView/HomeView";
import ArtistView from "./components/Views/ArtistView/ArtistView";
import HopePage from "./HopePage";
import LogIn from "./components/Views/LoginView/LoginView";
import SignUp from "./components/Views/SignUpView/SignUp";

import EditPost from "./components/Post/EditPost";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomeView} />
        <Route exact path="/home/:id" component={ArtistView} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={HopePage} />
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
