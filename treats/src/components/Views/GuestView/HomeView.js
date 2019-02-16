import React, { Component } from "react";
import { Link } from "react-router-dom";

const ArtistsView = props => {
  return (
    <div>
      <h2>Welcome to trEATs!</h2>
      <p>
        Register for a free account: <Link to="/signup">Sign Up! </Link>
      </p>
      <p>
        Already have an account> <Link to="/login">Log In!</Link>
      </p>
    </div>
  );
};

export default ArtistsView;
