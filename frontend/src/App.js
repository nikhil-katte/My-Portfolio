// import { Route, useLocation } from "react-router";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Footer,
  Header,
  Skill,
  Testimonial,
  Work,
} from "./Container/index";
import styled from "styled-components";
import { Navbar } from "./Components";
import { AnimatePresence } from "framer-motion";
import "./App.scss";
const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  // display: flex;
  padding: 5rem;
  // justify-content: center;
  // align-items: center;
  // position: absolute;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const App = () => {
  // const location = useLocation();
  return (
    <>
      <Navbar />

      <Pages>
        {/* <Header />
        <About />
        <Skill />
        <Testimonial /> */}
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route exact path="/" element={<Header />} />
            <Route exact path="/team" element={<About />} />
            <Route exact path="/calender" element={<Skill />} />
            <Route exact path="/documents" element={<Testimonial />} />
            <Route exact path="/projects" element={<Work />} />
          </Routes>
        </AnimatePresence>
      </Pages>
    </>
  );
};

export default App;
// function App() {
//   const location = useLocation();
//   return (
//     <>
//       <h1>HEllp</h1> Hello
//       <Navbar />
//       <Pages>
//         <AnimatePresence exitBeforeEnter>
//           <Routes location={location} key={location.pathname}>
//             <Route exact path="/" component={About} />
//             <Route path="/team" component={Footer} />
//             <Route path="/calender" component={Header} />
//             <Route path="/documents" component={Testimonial} />
//             <Route path="/projects" component={Work} />
//           </Routes>
//         </AnimatePresence>
//       </Pages>
//     </>
//   );
// }

// import React from "react";
// import { Navbar } from "./Components";
// import {
//   About,
//   Footer,
//   Header,
//   Skill,
//   Testimonial,
//   Work,
// } from "./Container/index";
// import "./App.scss";
// const App = () => {
//   return (
//     <div className="app">
//       <Navbar />
//       <Header />
//       <About />
//       <Work />
//       <Skill />
//       <Testimonial />
//       <Work />
//       <Footer />
//     </div>
//   );
// };

// export default App;
