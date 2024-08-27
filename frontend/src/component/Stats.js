import React, { useEffect } from 'react'
import StatsCard from './StatsCard'
import { getAllComplaint } from '../utils/complainController';
import { Link } from 'react-router-dom';
import Supervisor from './Supervisor';
export default function Stats() {
  const [complaintInfo, setComplaint] = React.useState([]);
  useEffect(() => {
    getAllComplaint(setComplaint);
    console.log(complaintInfo);
  }, []);
  return (

    <>  
      <Supervisor />
      <div className="max-w-4xl mx-auto py-8">
        <div className=" flex justify-center items-center bg-gray-700 mb-6 py-2 px-4 rounded">
          <h1 className=" text-xl font-bold text-white">Complaint Details</h1>
        </div>
        <div className="flex justify-between items-center bg-gray-500 shadow-md rounded-lg p-4 mb-2">
          <span className="text-sm font-semibold">Sl. NO</span>
          <span className="text-sm font-semibold">ComplaintID</span>
          <span className="text-sm font-semibold">Location</span>
          <span className="text-sm font-semibold">TYPE</span>
          <span className="text-sm font-semibold">NAME</span>
        </div>
        <div>
          {complaintInfo && complaintInfo.map((data, index) => (
            <Link to={`/complaint/${data._id}`}>
            <StatsCard slNO={index+1} id={data._id} location={data.location} type={data.type} name ={data.email.slice(0,6)} key={index} />
            </Link>
          ))}
          {!complaintInfo && <p>Loading..</p>}
        </div>
      </div>
    </>
  )
}
