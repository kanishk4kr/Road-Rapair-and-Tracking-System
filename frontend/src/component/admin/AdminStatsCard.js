import React, {useState} from 'react';
import { updateList } from '../../utils/listController';
import { useNavigate } from 'react-router-dom';
const AdminStatsCard = ({slNO, id,location,type, iid,setList}) => {
  const [status, setStatus] = useState(type); // Initialize status state with the provided type
  const navigate = useNavigate();
  const handleStatusChange = async (newStatus,id) => {
    setStatus(newStatus); // Update the local state with the new status
    console.log(newStatus,id);
    // Implement logic to update the status in the backend
    updateList(id,{isCompleted: newStatus === 'Done' ? true : false},setList);
    alert("Status Updated Successfully");
    navigate("/list1");
  };

  const bgColorClass = slNO % 2 === 0 ? 'bg-gray-400' : 'bg-gray-200';
  
  return (
    <div className={`flex justify-between items-center ${bgColorClass} hover:bg-gray-500 shadow-md rounded-lg p-4 mb-2`}>
      <span className="text-sm font-semibold">{slNO}</span>
      <span className="text-sm font-semibold">{id}</span>
      <span className="text-sm font-semibold">{location}</span>
      <span className="text-sm font-semibold">{type}</span>
      <select
        value={status}
        onChange={(e) => handleStatusChange(e.target.value, iid)}
        className="text-sm font-semibold px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      >
        <option value="Pending">Pending</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default AdminStatsCard;
