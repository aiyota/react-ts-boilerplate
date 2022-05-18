import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About/About";
import ContactUs from "./ContactUs/ContactUs";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
);

export default App;
