import axios from "axios";

const baseurl = process.env.machine_url || "https://swe-project-2lyq.onrender.com/resource/labour";

const getAllDetails = (setLabours) => {
    axios.get(baseurl)
    .then(({data})=>{
        console.log(data);
        setLabours(data);
    })
    .catch((err)=>console.log(err));
}
const addLabour = (data,setData,setLabours) => {
    axios.post(baseurl,data,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((ele)=>{
        console.log(ele);
        setData("");
        getAllDetails(setLabours);
    })
    .catch((err)=> {console.log(err);return false})
}
const deleteLabour = (appId,setLabours) => {
    axios.delete(`${baseurl}/${appId}`)
    .then(({data})=>{
        console.log(data);
        setLabours(data);
    })
    .catch((err)=>console.log(err));
}
const updateLabour = (appId,data,setLabours) => {
    axios.patch(`${baseurl}/${appId}`,data)
    .then(({data1})=>{
        console.log(data1);
        setLabours(data1);
    })
    .catch((err)=>console.log(err));
}
export {
    getAllDetails,
    addLabour,
    deleteLabour,
    updateLabour
}