import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Abouts from "./pages/Abouts";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/Home" element={<Home />} />
        <Route path="/about" element={<Abouts />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
