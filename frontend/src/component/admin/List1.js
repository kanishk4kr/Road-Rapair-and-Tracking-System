import React, { useEffect, useState } from 'react'
import { getList } from '../../utils/listController';
import AdminStatsCard from './AdminStatsCard';
import { getAllDetails } from '../../utils/labourController';
import Admin from '../Admin';
function List() {
  const [list,setList] = useState([]);
  const [labour,setLabour] = useState([]);
  useEffect(()=>{
    getList(setList);
    getAllDetails(setLabour);
  },[])
  let merged = [];

  for(let i=0; i<list.length; i++) {
    merged.push({
    ...list[i], 
    ...(labour.find((itmInner) => itmInner._id === list[i].labourID)),
        id1: list[i]._id
    });
  }
  console.log("merged",merged);
  return (
    <>  
    <Admin />
    <div className="max-w-4xl mx-auto py-8">
      <div className=" flex justify-center items-center bg-gray-700 mb-6 py-2 px-4 rounded">
        <h1 className=" text-xl font-bold text-white">Repair Schedule</h1>
      </div>
      <div className="flex justify-between items-center bg-gray-500 shadow-md rounded-lg p-4 mb-2">
        <span className="text-sm font-semibold">Sl. NO</span>
        <span className="text-sm font-semibold">ComplaintID</span>
        <span className="text-sm font-semibold">labour Assigned</span>
        <span className="text-sm font-semibold">Resource Allocated</span>
        <span className="text-sm font-semibold">Status</span>
      </div>
      <div>
        {merged && merged.filter((data) => data.isCompleted === false).map((data, index) => (
          <AdminStatsCard slNO={index+1} id={data.id} location={data.name} type={data.materials.slice(0,15)} iid={data.id1} setList={setList} key={index} />
        ))}
        {!merged && <p>Loading..</p>}
      </div>
    </div>
  </>
  )
}

export default List
