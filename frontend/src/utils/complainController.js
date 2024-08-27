import axios from "axios";

const baseurl = process.env.machine_url || "https://swe-project-2lyq.onrender.com/complaint";

const getAllComplaint = (setComplaint) => {
    axios.get(baseurl)
    .then(({data})=>{
        console.log(data);
        setComplaint(data);
    })
    .catch((err)=>console.log(err));
}
const addComplaint = (data,setData,setComplaint) => {
    // console.log("machine.js",data);
    axios.post(baseurl,data,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((ele)=>{
        console.log(ele);
        setData("");
        getAllComplaint(setComplaint);
    })
    .catch((err)=> {console.log(err);return false})
}

const deleteComplaint = (id) =>{
    axios.delete(`${baseurl}/${id}`)
    .then(() => {
        console.log("deleted succesfully");
    })
    .catch((err) => console.log(err));
}
export {
    getAllComplaint,
    addComplaint,
    deleteComplaint
}