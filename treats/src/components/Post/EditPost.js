import React from "react";

const EditPost = props => {
  const { id } = props;

  return (
    <div>
      <button onClick={() => props.editPost(id)} className="delete-button">
        {" "}
        Update{" "}
      </button>
    </div>
  );
};

export default EditPost;
