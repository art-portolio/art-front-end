import React from "react";

const DeletePost = props => {
  const { id } = props;
  return (
    <div>
      <button onClick={() => props.deletePost(id)} className="delete-button">
        Delete Post
      </button>
    </div>
  );
};

export default DeletePost;
