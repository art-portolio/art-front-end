import React from "react";
import { Button, Form, Input } from "reactstrap";
import axios from "axios";
class SignUp extends React.Component {
  state = {
    user: {
      username: " ",
      password: " ",
      fullName: " ",
      email: " "
    }
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  signUp = event => {
    event.preventDefault();

    axios
      .post("https://backend-art.herokuapp.com/api/register", this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/users");
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
            value={this.state.username}
            onChange={this.handleChange}
          />
          <Input
            required
            type="text"
            name="password"
            placeholder="Enter a password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Input
            required
            type="text"
            name="email"
            placeholder="Enter your email please?"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <Button color="info" type="submit" onSubmit={this.signUp}>
            Sign Me Up!
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
