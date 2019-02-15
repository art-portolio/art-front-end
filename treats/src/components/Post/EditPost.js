import React from "react";
import axios from "axios";

class EditPost extends React.Component {
  state = {
    postName: " ",
    imageUrl: " ",
    description: " "
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  editPost = event => {
    event.preventDefault();
    axios
      .put("https://backend-art.herokuapp.com/api/posts/:id", this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/posts");
      })
      .catch(err => {
        console.error("Axios Error", err);
      });
  };
  render() {
    return (
      <div className="post-header">
        <h1 className="main-header">Edit you Post!</h1>

        <form className="form" onSubmit={this.editPost}>
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
          <button type="submit">EditPost!</button>
        </form>
      </div>
    );
  }
}

export default EditPost;
