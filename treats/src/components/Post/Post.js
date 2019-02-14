import React from "react";
import axios from "axios";

class Post extends React.Component {
  state = {
    postName: " ",
    imageUrl: " ",
    description: " "
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  postUp = event => {
    event.preventDefault();
    axios
      .post("https://backend-art.herokuapp.com/api/posts", this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/api/posts");
      })
      .catch(err => {
        console.error("Axios Error", err);
      });
  };
  render() {
    return (
      <div className="post-header">
        <h1 className="main-header">Please upload your photos!</h1>

        <form className="form" onSubmit={this.postUp}>
          <div>
            <label>Post Name</label>
            <input
              name="postName"
              value={this.state.postName}
              onChange={this.handleChange}
              type="text"
            />
          </div>
          <div>
            <label>Image!</label>
            <input
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={this.handleChange}
              type="text"
            />
          </div>
          <div>
            <label>Description</label>
            <input
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              type="text"
            />
          </div>
          <button type="submit">Submit Post!</button>
        </form>
      </div>
    );
  }
}

export default Post;
