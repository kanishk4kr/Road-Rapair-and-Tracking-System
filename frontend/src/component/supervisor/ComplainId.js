import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getAllDetails, updateLabour } from '../../utils/labourController';
import { useNavigate } from 'react-router-dom';
import { deleteComplaint } from '../../utils/complainController';
import { addList } from '../../utils/listController';
export default function ComplainId({setComplaint}) {
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        getAllDetails(setLabours);
    }, []);
    const [labours, setLabours] = useState([]);
    const [formData, setFromData] = useState({
        id : id,
        labourID : '',
        materials : "",
        quantity : 0
    });
    const [list,setList] = useState([]);
    const handleSubmit = async (event) => {
      event.preventDefault();
      deleteComplaint(id);
      updateLabour(formData.labourID,{isAssigned:true},setLabours);
      addList(formData,setFromData,setList);
      console.log('Form submitted:', formData);
      setFromData({
        id : id,
        labourID : '',
        materials : "",
        quantity : 0
      });
      navigate('/allocate');
    };
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFromData({
        ...formData,
        [name]: value
      });
    };
    return (
      <div className="max-w-xl mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">Complaint ID</label>
            <input
              type="text"
              id="id"
              name='id'
              value={formData.id}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="labourID" className="block text-sm font-medium text-gray-700">Allocate Labour</label>
            <select
              id="labourID"
              name='labourID'
              value={formData.labourID}
              onChange={handleInputChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              required
            >
              <option value="">Select Labour</option>
              {labours.filter((ele)=> ele.isAssigned === false).map((labour) => (
                <>
                  <option key={labour._id} value={labour._id}>{labour.name}{" "}|{" "}{labour.expertise}</option>
                </>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="materials" className="block text-sm font-medium text-gray-700">Allocate Material</label>
            <div className="flex mt-1">
              <select
                id="materials"
                name='materials'
                value={formData.materials}
                onChange={handleInputChange}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                required
              >
                <option value="">Select Material</option>
                <option value="Axe,Hook,Shovel,Spade,Fork,Hoe,Pickaxe,Hammer">Axe Hook Shovel Spade Fork Hoe Pickaxe Hammer</option>
              </select>
              <input
                type="number"
                placeholder="Qty"
                name='quantity'
                value={formData.quantity}
                onChange={handleInputChange}
                className="ml-2 block w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
        </form>
      </div>
    );
}
