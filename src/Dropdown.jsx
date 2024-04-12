import React from "react";
import Contact from "./Contact";

function Dropdown(){
    return(
        <div className="Dropdown">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
            </ul>
        </div>
    );
}

export default Dropdown;