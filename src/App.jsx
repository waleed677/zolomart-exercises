import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { db } from "./firebase.config";
import CreateOffer from "./components/CreateOffer";
import { useState } from "react";
import OffersList from "./components/OffersList";

function App() {
  const [offers, setOffers] = useState([]);

  const addOffer = (offer) => {
    const newOffer = { ...offer, id: offers.length + 1, questions: [] };
    setOffers([...offers, newOffer]);
  };

  return (
    <>
      <Router>
        <div className="container mx-auto p-4">
          <nav className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex gap-4">
                <Link
                  to="/"
                  className="hover:text-blue-200 transition duration-300"
                >
                  Create Offer
                </Link>
                <Link
                  to="/offers"
                  className="hover:text-blue-200 transition duration-300"
                >
                  Offers List
                </Link>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<CreateOffer addOffer={addOffer} />} />
            <Route path="/offers" element={<OffersList offers={offers} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
