import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BookOrder from "./pages/BookOrder/BookOrder";
import OrderComplete from "./pages/OrderComplete/OrderComplete";

const App = () => {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<BookOrder/>} />
          <Route path="/order-complete" element={<OrderComplete/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
