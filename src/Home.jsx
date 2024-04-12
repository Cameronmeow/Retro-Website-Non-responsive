import React, { useState } from "react";
import "./Home.css";
import NavBar from "./NavBar";
import Dropdown from "./Dropdown";
import homeBgImage from '../src/home_bg2.jpg';
function Home() {
  const [openMenu, setOpenMenu] = useState(false);

    const backgroundStyle = {
      backgroundImage: `url(${homeBgImage})`, // Use backticks for string interpolation
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
  return (
    <>
      <NavBar />
      <div className="container" >
        <div className="white">
          {openMenu && <Dropdown />}
          <div className="red" style={backgroundStyle}>
          <div className="home_text">
            <h1 >HELLO THERE</h1>
            <br/>
            <h2>"Retro vibes and pixel dreams await<br/>step into the neon glow of yesteryears!"</h2>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
