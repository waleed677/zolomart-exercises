import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OfferItem = ({ offer }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border p-4 mb-4 rounded shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Offer for {offer.position || "Position"}</h3>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      {showDetails && (
        <div className="mt-4">
          <p>Salary: {offer.salary}</p>
          <p>Equity: {offer.equity}%</p>
          <p>Bonus: {offer.bonus}</p>
          <p>Culture: {offer.culture}</p>
          <p>Learning Opportunities: {offer.learningOpportunities}</p>
          <Link to={`/offer/${offer.id}`} className="inline-block mt-2 text-blue-500 hover:text-blue-700">Share Offer</Link>
        </div>
      )}
    </div>
  );
};

const OffersList = ({ offers }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl underline font-semibold mb-4">Offers List</h2>
      {offers.length > 0 ? (
        offers.map((offer, index) => <OfferItem key={index} offer={offer} />)
      ) : (
        <p className="text-center text-gray-500">No offers available.</p>
      )}
    </div>
  );
};

export default OffersList;
