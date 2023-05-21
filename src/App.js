import React from "react"
import About from "./About"
import Vans from "./Vans"
import Home from "./Home"


import { BrowserRouter, Routes, Route, Link} from "react-router-dom"


export default function App() {
  return (
    <BrowserRouter >
    <header>
      <Link className="header--bar" to="/">#VANLIFE</Link>
        <nav>
      <Link className="nav--bar" to ="/about">About</Link>
      <Link className="nav--bar" to="/vans">Vans</Link>
      </nav>
      </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
    </Routes>
  </BrowserRouter>
  );
}


