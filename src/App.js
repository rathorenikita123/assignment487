import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import London from "./pages/londonDry";
import Aperitif from "./pages/aperitif";
import Spiced from "./pages/spicedBlend";
import Trio from "./pages/trio";

const App = () => {
  return (
    <div className="App" data-theme="light">
      <Header />
      <Routes>
        <Route path="/" element={<London />} />
        <Route path="/aperitif" element={<Aperitif />} />
        <Route path="/spiced" element={<Spiced />} />
        <Route path="/trio" element={<Trio />} />
      </Routes>
    </div>
  );
};

export default App;
