// import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./compontents/MainPage/MainPage";
import CustomerForm from "./compontents/CustomerForm/CustomerForm";
import OfferInfo from "./compontents/OfferInfo/OfferInfo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/about" element={<CustomerForm />} />
        <Route path="/dashboard" element={<OfferInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
