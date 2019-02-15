import React from "react";
import { Button, Form, Input } from "reactstrap";
import axios from "axios";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      fullName: "",
      email: "",
      password: "",
      loggedIn: false,
      userImgUrl: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  signUp = event => {
    const user = {
      username: this.state.username,
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
      userImgUrl: this.state.userImgUrl
    };
    event.preventDefault();

    axios
      .post("https://backend-art.herokuapp.com/api/register", user)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.setState({ loggedIn: true });
        this.props.history.push("/artists");
      })
      .catch(err => {
        console.error("Axios Error: ", err);
      });
  };

  render() {
    return (
      <div className="Login Form">
        <Form>
          <Input
            required
            type="text"
            name="fullName"
            placeholder="Enter your full name...."
            value={this.state.fullName}
            onChange={this.handleChange}
          />
          <Input
            required
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <Input
            required
            type="text"
            name="password"
            placeholder="Enter a password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <Input
            required
            type="text"
            name="email"
            placeholder="Enter your email please?"
            onChange={this.handleChange}
            value={this.state.email}
          />

          <Button color="info" type="submit" onClick={this.signUp}>
            Sign Me Up!
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
