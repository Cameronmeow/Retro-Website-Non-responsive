import React, { useState } from "react";
import "./Services.css"
import NavBar from "./NavBar";

function Services(){
    return (
        <>
        <NavBar />
        <div className="services_container">
        <div className="services_1">
        <h1>What?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare pharetra elit, sed aliquam risus interdum ut. Aenean sodales luctus tellus faucibus sollicitudin. Integer eu tellus faucibus, viverra urna ac, malesuada quam. Vivamus tristique nisi ac rhoncus finibus. Aenean ex nunc, congue vitae vulputate et, varius nec massa. Maecenas at lorem at enim accumsan finibus. Maecenas vulputate lectus ut nisl faucibus pellentesque at a sapien. Etiam congue laoreet nisi, ut rutrum odio semper vitae. Curabitur id efficitur sem, quis faucibus urna.</p>
        </div>
        <div className="services_2">
        <h1>How?</h1>
            <p>Nam eu consequat arcu, ac vestibulum massa. Curabitur odio urna, convallis sit amet cursus quis, molestie quis ex. Donec volutpat id enim vitae ultrices. In tincidunt nisl vitae metus iaculis blandit. Sed id euismod felis, quis iaculis neque. Nulla pharetra elit ut urna ultrices, vitae sodales nisi volutpat. Ut sed erat a ligula pellentesque sollicitudin. Nulla facilisis, est non varius viverra, tellus eros lacinia elit, in congue enim purus non est.</p>
        </div>
        </div>
        </>
      );
}

export default Services;