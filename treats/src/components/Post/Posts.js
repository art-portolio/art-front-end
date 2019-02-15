import React, { Component } from "react";
import { Link } from "react-router-dom";

function Posts(props) {
  return (
    <div className="posts-wrapper">
      {props.posts.map(post => (
        <div className="post-card" key={post.id}>
          <img src={post.imageUrl} alt={post.postName} />
          <p>{post.upvotes}</p>
          <p>{post.postName}</p>
          <p>{post.description}</p>
          <Link to={`/posts/${post.id}`}>{post.postName}</Link>
        </div>
      ))}
    </div>
  );
}
export default Posts;
