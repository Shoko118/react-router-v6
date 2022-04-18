import { Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Id from "../Pages/Id";
import { useState } from "react";

const Views = () => {
  const [cartIsEmpty] = useState(true);
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Contact/:id" element={<Id />} />
        <Route path="/Contact/:id/*" element={<Id />} />
        <Route path="/checkout" element={cartIsEmpty ? <Navigate to="/Contact" /> : <p>This is the checkout</p>} />
        <Route path="*" element={<h1>404 ERROR PAGE!!!!</h1>} />
      </Routes>
    </div>
  );
};

export default Views;
