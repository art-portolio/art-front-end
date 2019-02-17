import React, { Component } from "react";
import axios from "axios";

import LogInForm from "./LogInForm";

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userToken: ""
    };
  }

  inputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("https://backend-art.herokuapp.com/api/login", user)
      .then(response => {
        console.log(response);
        localStorage.setItem("jwt", response.data.token);
        this.setState({ userToken: response.data.token });
        this.props.history.push(`/home/${response.data.id}`);
      })
      .catch(error => console.log(error));

    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <LogInForm
          inputHandler={this.inputHandler}
          submitHandler={this.submitHandler}
          usernameVal={this.state.username}
          passwordVal={this.state.password}
        />
      </div>
    );
  }
}

export default LoginView;
