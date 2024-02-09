import React from "react";
import { useState } from "react";
import { db } from "../firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateOffer = () => {
  const [formData, setFormData] = useState({
    position: "",
    salary: "",
    equity: "",
    bonus: "",
    culture: "",
    learningOpportunities: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "offers"), formData);
      toast.success("Offer Created Successfully!!!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setFormData({
        position: "",
        salary: "",
        equity: "",
        bonus: "",
        culture: "",
        learningOpportunities: "",
      });

      // Reset form after successful submission
      setFormData({
        position: "",
        salary: "",
        equity: "",
        bonus: "",
        culture: "",
        learningOpportunities: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Offer Created Failed", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-4xl font-semibold mb-4 text-center">Hiring Manager</h2>
        <h2 className="text-xl font-semibold mb-4 text-center">Create New Offer</h2>

        <div className="mx-auto">
          <ToastContainer />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-10">
          <div>
            <label className="block mb-2 text-gray-700" htmlFor="position">Job Position:</label>
            <input
              type="text"
              name="position"
              id="position"
              value={formData.position}
              onChange={handleChange}
              className="input border rounded p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700" htmlFor="salary">Salary:</label>
            <input
              type="text"
              name="salary"
              id="salary"
              value={formData.salary}
              onChange={handleChange}
              className="input border rounded p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700" htmlFor="equity">Equity</label>
            <input
              type="text"
              name="equity"
              id="equity"
              value={formData.equity}
              onChange={handleChange}
              className="input border rounded p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700" htmlFor="bonus">Bonus:</label>
            <input
              type="text"
              name="bonus"
              id="bonus"
              value={formData.bonus}
              onChange={handleChange}
              className="input border rounded p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700" htmlFor="culture">Culture:</label>
            <textarea
              name="culture"
              value={formData.culture}
              onChange={handleChange}
              id="culture"
              className="textarea border rounded p-2 w-full"
              rows="2"
              required
            ></textarea>
          </div>
          <div>
            <label className="block mb-2 text-gray-700" htmlFor="opportunities">
              Learning Opportunities:
            </label>
            <textarea
              name="learningOpportunities"
              value={formData.learningOpportunities}
              onChange={handleChange}
              className="textarea border rounded p-2 w-full"
              rows="2"
              id="opportunities"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Offer
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateOffer;
