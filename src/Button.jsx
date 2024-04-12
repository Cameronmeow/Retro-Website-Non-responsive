import React from "react";

function Button(props){
    return(
        <div className="btn">
            <a href={props.link}>{props.text}</a>
        </div>
    );
}


export default Button;