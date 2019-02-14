import React, { Component } from "react";
import "./App.css";
import LogIn from "./components/Login/Login";
import SignUp from "./components/SignUpForm/SignUp";
import Post from "./components/Post/Post";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogIn />
        <SignUp />
        <Post />
      </div>
    );
  }
}

export default App;
