import React from "react";
import { Navbar } from "./Components";
import {
  About,
  Footer,
  Header,
  Skill,
  Testimonial,
  Work,
} from "./Container/index";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skill />
      <Testimonial />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
