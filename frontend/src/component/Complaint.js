import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { addComplaint} from '../utils/complainController';
export default function Complaint() {
   // State variable for form data
   const {user} = useAuth0();
   const [formData, setFormData] = useState({
    location: '',
    type: '',
    comment: '',
    email : user.email,
  });
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
      console.log('Form submitted:', formData);
      addComplaint(formData, setFormData, setComplaints);
      console.log(complaints);
      alert('Complaint submitted successfully');
      navigate('/');
  };
  // Function to handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className=" mt-9 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-[#5a697c] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Enter location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="type">
            Type
          </label>
          <select
            className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Busy Area">Busy Area</option>
            <option value="Commercial Area">Commercial Area</option>
            <option value="Deserted Area">Deserted Area</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="comment">
            Comment
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            placeholder="Enter comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
