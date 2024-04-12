import React, { useState } from "react";
import "./About.css"
import NavBar from "./NavBar";

function About(){
    return (
        <>
        <NavBar />
        <div className="about_container">

        <div className="about_1">
        <img src="../src/avatar.png"/>
        <h1>Retro Revive</h1>
        <p>Nam purus erat, tempor at ornare sed, bibendum vel ipsum. Sed vel justo a lacus posuere commodo vel quis nunc. Pellentesque vel odio vel sem efficitur cursus. Nulla vitae ex eu odio convallis accumsan. Sed feugiat placerat orci non tincidunt. Nullam dapibus mi ut erat mattis laoreet. Vivamus eu augue lacus. Curabitur hendrerit pellentesque bibendum. Nunc tincidunt ipsum odio, eget faucibus ante volutpat quis. Aliquam vitae hendrerit metus. Sed elit ante, rhoncus nec nulla nec, vulputate tempor massa. Vivamus sit amet lectus gravida, vehicula ligula at, efficitur mi. Nam a porta justo.</p>
        </div>
        </div>
        </>
      );
}

export default About; 