import React, { useEffect, useState } from 'react'
import { getAllDetails } from '../../utils/labourController'
import { getAllMaterial } from '../../utils/materialController'
import Supervisor from '../Supervisor';

export default function ResourcesCheck() {
    
    const [labours, setLabours] = useState([]);
    const [materials, setMaterials] = useState([]);
    useEffect(() => {
        getAllDetails(setLabours);
        console.log(labours);
        getAllMaterial(setMaterials);
        console.log(materials);
    }, [])
    
  return (
    <>
        <Supervisor/>
        <div className="flex justify-between px-4 py-2">
            <div className="w-1/2 pr-2">
            <div className=" flex justify-center items-center bg-gray-700 mb-6 py-2 px-4 rounded">
                <h1 className=" text-xl font-bold text-white">Labour List</h1>
            </div>
            <table className="table-auto w-full border border-black">
                <thead>
                <tr className="bg-blue-500">
                    <th className="border border-black px-4 py-2">Name</th>
                    <th className="border border-black px-4 py-2">Expertise</th>
                    <th className="border border-black px-4 py-2">Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {labours.map((labour, index) => (
                    <tr key={index} className="text-center bg-gray-300 hover:bg-gray-400">
                    <td className="border border-black px-4 py-2">{labour.name}</td>
                    <td className="border border-black px-4 py-2">{labour.expertise}</td>
                    <td className="border border-black px-4 py-2">{labour.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <div className="w-1/2 pl-2">
            <div className=" flex justify-center items-center bg-gray-700 mb-6 py-2 px-4 rounded">
                <h1 className=" text-xl font-bold text-white">Material List</h1>
            </div>
            <table className="table-auto w-full border border-black">
                <thead>
                <tr className="bg-blue-500">
                    <th className="border border-black px-4 py-2">Name</th>
                    <th className="border border-black px-4 py-2">Quantity</th>
                </tr>
                </thead>
                <tbody>
                {materials.map((material, index) => (
                    <tr key={index} className="text-center bg-gray-300 hover:bg-gray-400">
                    <td className="border border-black px-4 py-2">{material.name}</td>
                    <td className="border border-black px-4 py-2">{material.quantity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    </>
    
  )
}
