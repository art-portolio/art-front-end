import React, { Component } from "react";

import GetPost from "./GetPost";
import Post from "./Post";

class PostsContainer extends Component {
  render() {
    return (
      <div className="posts">
        <h1>Your Posts</h1>
        <ul>
          {this.props.posts.map(post => {
            return (
              <Post
                name={post.postName}
                image={post.imageUrl}
                description={post.description}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default PostsContainer;
