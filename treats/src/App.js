import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from "./components/Photo/Photo";
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <NavBar/>
          <Photo/>
          <Login/>
        
      </div>
    );
  }
}

export default App;
