import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Intro from "./components/Intro/Intro.js";
import Services from "./components/Services/Services.js";
import Experience from "./components/Experience/Experience.js";
import Works from "./components/Works/Works.js";
import Portfolio from "./components/Portfolio/Portfolio.js";
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
    </div>
  );
}

export default App;
