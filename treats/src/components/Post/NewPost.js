import React from "react";
import { Button, Form, Input } from "reactstrap";

const NewPost = props => {
  return (
    <div className="new-post-wrapper">
      <Form>
        <h2> New Post</h2>
        <Input
          onChange={props.handleChanges}
          type="text"
          name="postName"
          value={props.post.postName}
          placeholder="Enter a post name!"
        />
        <Input
          onChange={props.handleChanges}
          type="text"
          name="imageUrl"
          value={props.post.imageUrl}
          placeholder="Enter a post name!"
        />
        <Input
          onChange={props.handleChanges}
          type="text"
          name="description"
          value={props.post.description}
          placeholder="Description"
        />
      </Form>
      <Button
        className="create"
        onClick={ev =>
          props.isUpdating ? props.updatePost(ev) : props.newPost(ev)
        }
      >
        Submit
      </Button>
    </div>
  );
};

export default NewPost;
