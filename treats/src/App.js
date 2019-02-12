import React, { Component } from 'react';
import './App.css';
import Photo from "./components/Photo/Photo";
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import SignUp from './components/SignUpForm/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <Photo/>
          <Login/>
          <SignUp />
        
      </div>
    );
  }
}

export default App;
