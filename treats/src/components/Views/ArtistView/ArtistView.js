import React, { Component, Fragment } from "react";
import axios from "axios";

import HomePage from "../../../HopePage";
import ArtistHeader from "./ArtistHeader";
import ArtistProfile from "./ArtistProfile";

class ArtistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 0,
      fullName: " ",
      userData: []
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("jwt");
    const reqOptions = {
      headers: {
        Authorization: token
      }
    };
    axios
      .get(
        `https://backend-art-herokuapp.com/api/users/posts/${
          this.props.match.params.id
        }`,
        reqOptions
      )
      .then(res => {
        console.log(res);
        this.setState({
          userID: this.props.match.params.id,
          fullName: res.data[0].fullName,
          userData: res.data[0].posts
        });
      })
      .catch(err => console.log("Axios Error:", err));
  }
  logoutHandler = ev => {
    localStorage.removeItem("jwt");
    this.props.history.push("/login");
  };
  render() {
    if (!localStorage.getItem("jwt")) return <h2>Log In to view your page!</h2>;
    return (
      <Fragment>
        <ArtistHeader
          logoutHandler={this.logoutHandler}
          userId={this.state.userID}
        />
        <HomePage />
        <ArtistProfile fullName={this.state.fullName} />
      </Fragment>
    );
  }
}

export default ArtistView;
