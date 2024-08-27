import axios from "axios";

const baseurl = process.env.machine_url || "https://swe-project-2lyq.onrender.com/list";

const getList = (setList) => {
    axios.get(baseurl)
    .then(({data})=>{
        console.log(data);
        setList(data);
    })
    .catch((err)=>console.log(err));
}
const addList = (data,setData,setList) => {
    axios.post(baseurl,data,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((ele)=>{
        console.log(ele);
        setData("");
        getList(setList);
    })
    .catch((err)=> {console.log(err);return false})
}

const deleteList = (id,setList) =>{
    axios.delete(`${baseurl}/${id}`)
    .then(() => {
        getList(setList);
    })
    .catch((err) => console.log(err));
}

const updateList = (id,data,setList) => {
    axios.patch(`${baseurl}/${id}`,data)
    .then(() => {
        getList(setList);
    })
    .catch((err) => console.log(err));
}

export {
    getList,
    addList,
    deleteList,
    updateList
}