import React from "react";

const ArtistProfile = props => {
  return (
    <div>
      <div>Welcome, {props.fullName}!</div>
      <h3>Your Posts: </h3>
    </div>
  );
};
export default ArtistProfile;
