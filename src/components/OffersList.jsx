import React, { useEffect, useState } from "react";
import OfferItem from "./OfferItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

const OffersList = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      const querySnapshot = await getDocs(collection(db, "offers"));
      const offersArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOffers(offersArray);
    };

    fetchOffers();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-10 text-center">Offers List</h2>
      {offers.length > 0 ? (
        offers.map((offer, index) => <OfferItem key={index} offer={offer} />)
      ) : (
        <p className="text-center text-gray-500">No offers available.</p>
      )}
    </div>
  );
};

export default OffersList;
