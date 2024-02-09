import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const OfferItem = ({ offer }) => {
  const [showDetails, setShowDetails] = useState(false);

  const copyOfferLinkToClipboard = async (offerId) => {
    try {
      const offerLink = `${window.location.origin}/offer/${offerId}`;
      await navigator.clipboard.writeText(offerLink);
      toast.success("Offer link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Failed to copy link.");
    }
  };

  return (
    <>
    <div className="mx-auto">
    <ToastContainer />
  </div>
    <div className="border p-4 mb-4 rounded shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">
          Offer for {offer.position || "Position"}
        </h3>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {showDetails && (
        <div className="mt-4 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-2 sm:p-6">
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                <span className="font-semibold">Salary:</span> {offer.salary}
              </p>
              <p>
                <span className="font-semibold">Equity:</span> {offer.equity}%
              </p>
              <p>
                <span className="font-semibold">Bonus:</span> {offer.bonus}
              </p>
              <p>
                <span className="font-semibold">Culture:</span> {offer.culture}
              </p>
              <p>
                <span className="font-semibold">Learning Opportunities:</span>{" "}
                {offer.learningOpportunities}
              </p>
            </div>
            <div className="mt-5">
              <button
                onClick={() => copyOfferLinkToClipboard(offer.id)}
                className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Share Offer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default OfferItem;
