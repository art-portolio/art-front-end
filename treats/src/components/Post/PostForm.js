import React from "react";
import { Button, Form, Input } from "reactstrap";
import axios from "axios";

class PostForm extends React.Component {
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
  postUp = event => {
    const post = {
      postName: this.state.postName,
      fullName: this.state.imageUrl,
      description: this.state.description
    };
    event.preventDefault();
    axios
      .post("https://backend-art.herokuapp.com/api/posts", post)
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
        <h1 className="main-header">Please upload your photos!</h1>

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

          <Button color="danger " type="submit" onClick={this.postUp}>
            Submit Post!
          </Button>
        </Form>
      </div>
    );
  }
}

export default PostForm;
