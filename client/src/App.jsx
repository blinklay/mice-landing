import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartModal from "./components/CartModal";

export default function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="container mx-auto px-4">
      {showCart && <CartModal />}
      <BrowserRouter>
        <Header setShowCart={setShowCart} />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
