import React, {useState} from "react";
import Button from "./Button";
import "./NavBar.css";
import Dropdown from "./Dropdown";
function NavBar() {

    const [openMenu, setOpenMenu] = useState(false);

    function handleClick(){
      setOpenMenu(prevValue=>!prevValue)
    }
    return (

        <div className="Nav_container">
        <div className="navBar">
        <img className="logo" src="../src/Debashish.png" />
        <img className="Drop"
          src="../src/Dropdown.png"
          onClick={handleClick}
        />
            <Button link="/home" text="Home" />
            <Button link="/contact" text="Contact" />
            <Button link="/about" text="About Us" />
            <Button link="/services" text="Services" />
            {openMenu && <Dropdown />}
        </div>
        </div>
    );
}


export default NavBar;