import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Home from "./home/Home"
import Order from "./order/Order"
import Designers from "./designers/Designers";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";
import Stages from "./stages/Stages";
import "./styles/_layout.scss"

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <div className="wrap">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/stages" element={<Stages/>} />
            <Route path="/designers" element={<Designers/>} />
            <Route path="/order" element={<Order/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
