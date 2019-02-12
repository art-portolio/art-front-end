import React from "react";
import "../Photo/Photo.css";

const Photo = props => {
    return (
        <div className= "photo-card">
            <h1 className="main-header">Welcome to trEATs, take a look around!</h1> 
        <div className= "img-container">
                <img className= "photo" src= "http://thenaughtyfork.com/wp-content/uploads/2018/10IMG_1037.jpg" alt= "pasta" />
        </div>
        </div>
    )
}

export default Photo;