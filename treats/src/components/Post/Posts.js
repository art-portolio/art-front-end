import React from "react";

function Posts(props) {
  return (
    <div className="posts-card">
      {props.posts.map(post => (
        <div className="post-card" key={post.id}>
          <img src={post.imageUrl} alt={post.postName} />
          <p>{post.postName}</p>
        </div>
      ))}
    </div>
  );
}
export default Posts;
