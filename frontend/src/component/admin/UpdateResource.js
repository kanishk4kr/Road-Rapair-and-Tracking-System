import React , { useState } from 'react'
import Admin from '../Admin'
import { addLabour } from '../../utils/labourController';
import { addMaterial } from '../../utils/materialController';
export default function UpdateResource() {
  // State variables for labour form
  const [labour, setLabour] = useState({
    name: '',
    expertise: '',
    phone: '',
    accountno: '',
    isAssigned: false,
  });
  // State variables for material form
  const [materials, setMaterials] = useState({
    name : '',
    quantity : 0
  });
  // Function to handle labour form submission
  const handleLabourSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle labour form submission (e.g., send data to backend)
    if(labour?.name && labour?.expertise && labour?.phone && labour?.accountno){
      console.log("Labour form submitted:", labour);
      addLabour(labour, setLabour,{});
      alert("Labour Added Successfully");
    }
    setLabour({
      name: '',
      expertise: '',
      phone: '',
      accountno: '',
      isAssigned: false,
    })
  };

  // Function to handle material form submission
  const handleMaterialSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle material form submission (e.g., send data to backend)

    if(materials?.name && materials?.quantity){
      console.log("Material form submitted:", materials);
      addMaterial(materials,{});
      alert("Material Added Successfully");
    }
    setMaterials({
      name : '',
      quantity : 0
    })
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLabour({
      ...labour,
      [name]: value
    });
  };
  const handleInputChange1 = (event) => {
    const { name, value } = event.target;
    setMaterials({
      ...materials,
      [name]: value
    });
  };
  return (
    <>
      <Admin />
      <div className="flex justify-center  p-4">
      {/* Labour Form */}
      <form className="m-4 border w-[300px] bg-gray-400 border-gray-500 rounded-md p-4" onSubmit={handleLabourSubmit}>
        <h2 className="text-lg font-semibold mb-2">Add Labour</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium ">Name</label>
          <input type="text" id="name" name="name" value={labour.name} onChange={handleInputChange} className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="expertise" className="block text-sm font-medium ">Expertise</label>
          <input type="text" id="expertise" name="expertise" value={labour.expertise} onChange={handleInputChange} className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium ">Phone</label>
          <input type="number" id="phone" name="phone" value={labour.phone} onChange={handleInputChange} className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="accountno" className="block text-sm font-medium ">Account No</label>
          <input type="number" id="accountno" name="accountno" value={labour.accountno} onChange={handleInputChange} className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <button type="submit" className="hover:bg-blue-500 text-white px-4 py-2 rounded-md bg-blue-600">Submit</button>
      </form>

      {/* Material Form */}
      <form className="m-4 border w-[300px] h-auto bg-gray-400 border-gray-500 rounded-md p-4" onSubmit={handleMaterialSubmit}>
        <h2 className="text-lg font-semibold mb-2">Add Material</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium ">Name</label>
          <input type="text" id="name" name="name" value={materials.name} onChange={handleInputChange1} className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium ">Quantity</label>
          <input type="number" id="quantity" name="quantity" value={materials.quantity} onChange={handleInputChange1} className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <button type="submit" className="hover:bg-blue-500 text-white px-4 py-2 rounded-md bg-blue-600">Submit</button>
      </form>
      </div>
    </>
    
  );
}
