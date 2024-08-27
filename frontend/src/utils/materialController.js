import axios from "axios";

const baseurl = process.env.machine_url || "https://swe-project-2lyq.onrender.com/resource/material";

const getAllMaterial = (setMaterials) => {
    axios.get(baseurl)
    .then(({data})=>{
        console.log(data);
        setMaterials(data);
    })
    .catch((err)=>console.log(err));
}
const addMaterial = (data,setMaterials) =>{
    axios.post(baseurl,data)
    .then(({data1})=>{
        setMaterials(data1);
    })
    .catch((err)=>console.log(err));
}
const updateAll = (data,setMaterials) => {
    axios.patch(baseurl,data)
    .then(({data1})=>{
        console.log(data1);
        setMaterials(data1)
    })
    .catch((err)=>console.log(err));
}
export {
    getAllMaterial,
    addMaterial,
    updateAll
}