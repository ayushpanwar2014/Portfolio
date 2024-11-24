import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Test from "./Test.jsx"
import React from "react";


const App = () => {
  return <>
  <div>
    <Cursor/> 
    <section id="Homepage">
      <Navbar/>
      <Hero/>
      </section>
      <section id="Portfolio">
        <Parallax/>
      </section>
      <Portfolio/>
    <section id="Contact" >
      <Contact/>
    </section>
   

  </div>
    </>
};

export default App;
