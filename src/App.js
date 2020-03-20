import React from "react";
import "./App.css";

import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <section className="mainContainer">
        <Home href="/" />
        <About href="#about" />
        <Skills href="#skills" />
        <Contact />
        <Footer />
      </section>
    </React.Fragment>
  );
}

export default App;
