import React, { Component } from "react";
import { Route, withRouter, NavLink } from "react-router-dom";
import Post from "../Post/PostForm";
import EditPost from "../Post/EditPost";
import GetPost from "../Post/GetPost";

class Artists extends Component {
  render() {
    return (
      <div>
        <h2>Welcome Artist!!</h2>
        <nav>
          <NavLink to="/post" component={Post}>
            Post{" "}
          </NavLink>
          <NavLink to="/editpost" component={EditPost}>
            EditPost{" "}
          </NavLink>
          <NavLink to="/posts" component={GetPost}>
            All Posts
          </NavLink>
          <GetPost />
        </nav>
      </div>
    );
  }
}

export default withRouter(Artists);
