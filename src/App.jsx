import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Home from './Home';
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
