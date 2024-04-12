import React, { useState } from "react";
import "./Contact.css"
import NavBar from "./NavBar";

function Contact(){
    return (
        <>
        <NavBar />
        <div className="contact_container">
        <div className="info">
        <h1>Contact Us</h1>
        <h2>Phone</h2>
        <h3>9999999999</h3>
        <h2>Email</h2>
        <h3>Testemail@iitb.ac.in</h3>
        <h2>Address</h2>
        <h3>somewher,india,mumbai</h3>
        </div>
        <div className="rocket_container">
            <img src="../src/rocket.png" className="rocket" />
        </div>
        </div>
        </>
      );
}

export default Contact;