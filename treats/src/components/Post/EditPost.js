import React from "react";
import { Button, Form, Input } from "reactstrap";
import axios from "axios";

class EditPost extends React.Component {
  constructor() {
    super();
    this.state = {
      postName: " ",
      imageUrl: " ",
      description: " "
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  editPost = event => {
    const auth = { headers: { authorization: localStorage.getItem("jwt") } };
    const editPost = {
      postName: this.state.postName,
      fullName: this.state.imageUrl,
      description: this.state.description
    };
    event.preventDefault();
    axios
      .put("https://backend-art.herokuapp.com/api/posts/:id", editPost, auth)
      .then(res => {
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

        <Form>
          <Input
            name="postName"
            value={this.state.postName}
            placeholder="Enter a post name!"
            onChange={this.handleChange}
            type="text"
          />
          <Input
            name="imageUrl"
            placeholder="Please upload your image"
            value={this.state.imageUrl}
            onChange={this.handleChange}
            type="text"
          />
          <Input
            name="description"
            placeholder="item description"
            value={this.state.description}
            onChange={this.handleChange}
            type="text"
          />

          <Button color="danger " type="submit" onClick={this.editPost}>
            Edit your Post!
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditPost;
