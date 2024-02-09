import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import CreateOffer from './components/CreateOffer'
import { useState } from 'react';

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
        <Routes>
          <Route path="/" element={<CreateOffer addOffer={addOffer} />} />
           
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
