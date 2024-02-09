import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { ToastContainer, toast } from "react-toastify";

const ViewOffer = () => {
  const { offerId } = useParams();
  const [offer, setOffer] = useState(null);

  // State for handling the question form
  const [question, setQuestion] = useState("");

  // Function to handle question submission
  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    toast.success(`Your Concerns has been sent to the Hiring Manager`);
    setQuestion(""); // Reset the question input
  };

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const docRef = doc(db, "offers", offerId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setOffer({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
      }
    };

    fetchOffer();
  }, [offerId]);

  return (
    <>
      <div className="mx-auto">
        <ToastContainer />
      </div>
      {offer ? (
        <div className="max-w-3xl mx-auto p-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Congratulation You have got an Awesome Offer.
          </h2>

          <div className="mt-10 space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="mb-2">
                <strong>Position:</strong> {offer.position}
              </p>
              <p className="mb-2">
                <strong>Salary:</strong> {offer.salary}
              </p>
              <p className="mb-2">
                <strong>Equity:</strong> {offer.equity}%
              </p>
              <p className="mb-2">
                <strong>Bonus:</strong> {offer.bonus}
              </p>
              <p className="mb-2">
                <strong>Culture:</strong> {offer.culture}
              </p>
              <p className="mb-2">
                <strong>Learning Opportunities:</strong>{" "}
                {offer.learningOpportunities}
              </p>
            </div>

            <form onSubmit={handleSubmitQuestion} className="space-y-4">
              <label
                htmlFor="question"
                className="block text-sm font-medium text-gray-700"
              >
                Ask a question about the offer:
              </label>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                rows="3"
                required
              ></textarea>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Question
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="max-w-lg mx-auto text-center p-6 bg-red-100 border border-red-400 text-red-700 rounded-md mt-10">
          <h2 className="font-semibold text-lg mb-4">No Data Available</h2>
          <p className="mb-4">
            We couldn't find the details for this offer. It might have been
            removed or the link you used is incorrect.
          </p>
        </div>
      )}
    </>
  );
};

export default ViewOffer;
