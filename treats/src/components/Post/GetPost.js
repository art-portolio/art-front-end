import React, { Component } from "react";
import axios from "axios";

class GetPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.getPosts();
  }
  getPosts() {
    axios
      .get("https://backend-art.herokuapp.com/api/posts")
      .then(res => {
        console.log(res.data);
        this.setState({ posts: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return <h1>Welcome to our posts</h1>;
  }
}
export default GetPost;
