import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { db } from "./firebase.config";
import CreateOffer from "./components/CreateOffer";
import { useState } from "react";
import OffersList from "./components/OffersList";
import { ToastContainer } from "react-toastify";
import ViewOffer from "./components/ViewOffer";
import Navigation from "./components/Navigations";

function App() {

  return (
    <>
      <Router>
        <div className="container mx-auto p-4">
          <Navigation/>
          <Routes>
            <Route path="/" element={<CreateOffer  />} />
            <Route path="/offers" element={<OffersList />} />
            <Route path="/offer/:offerId" element={<ViewOffer />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
