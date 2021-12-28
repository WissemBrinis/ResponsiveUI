import React from "react";

// Git Credentials win11

import {
  Footer,
  Header,
  Blog,
  Possibility,
  Features,
  Middle,
} from "./containers";
import { Navbar, Brand, CTA } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Middle />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
