import React from "react";
import axios from "axios";

class LogIn extends React.Component {
  state = {
    username: " ",
    password: " "
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  logIn = event => {
    event.preventDefault();
    axios
      .post("https://backend-art.herokuapp.com/api/login", this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/api/users");
      })
      .catch(err => {
        console.error("Axios Error", err);
      });
  };
  render() {
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.logIn}>
          <div>
            <label>Username</label>
            <input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              type="text"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="text"
            />
          </div>
          <div>
            <button type="submit">Sign In</button>
          </div>
        </form>
        <h3> Not a registered artist? Sign Up!</h3>
      </div>
    );
  }
}

export default LogIn;
