import React from "react";
import { NavLink } from "react-router-dom";

const ArtistHeader = props => {
  return (
    <div>
      <h1>trEATs</h1>
      <div>
        <NavLink exact to={`/home/${props.userID}`}>
          Home
        </NavLink>
        <NavLink exact to="/login" onClick={props.logoutHandler}>
          Log Out
        </NavLink>
      </div>
    </div>
  );
};

export default ArtistHeader;
