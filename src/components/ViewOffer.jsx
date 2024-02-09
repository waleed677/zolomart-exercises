import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ViewOffer = ({ offers }) => {
  const { id } = useParams(); // Get the unique ID from the URL
  const offer = offers.find((offer) => offer.id === parseInt(id)); // Find the offer by ID

  // State for handling the question form
  const [question, setQuestion] = useState('');

  // Function to handle question submission
  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    alert(`Question submitted: ${question}`);
    // Here you would typically send the question to the backend or store it with the offer
    setQuestion(''); // Reset the question input
  };

  if (!offer) {
    return <p className="text-center">Offer not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Offer Details</h2>
      <p className="mb-2"><strong>Position:</strong> {offer.position}</p>
      <p className="mb-2"><strong>Salary:</strong> {offer.salary}</p>
      <p className="mb-2"><strong>Equity:</strong> {offer.equity}%</p>
      <p className="mb-2"><strong>Bonus:</strong> {offer.bonus}</p>
      <p className="mb-2"><strong>Culture:</strong> {offer.culture}</p>
      <p className="mb-2"><strong>Learning Opportunities:</strong> {offer.learningOpportunities}</p>
      
      
      {/* Stretch goal: Question form */}
      <form onSubmit={handleSubmitQuestion} className="mt-4">
        <label htmlFor="question" className="block mb-2">Ask a question about the offer:</label>
        <textarea
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border rounded p-2 w-full mb-4"
          rows="3"
        ></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit Question
        </button>
      </form>
      <Link to="/offers" className="inline-block mt-4 text-blue-500 hover:text-blue-700">Back to Offers List</Link>
    </div>
  );
};

export default ViewOffer;
