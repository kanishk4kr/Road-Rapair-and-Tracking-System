import axios from "axios";

const baseurl = process.env.machine_url || "https://swe-project-2lyq.onrender.com/user";

const getUser = (setUser) => {
    axios.get(baseurl)
    .then(({data})=>{
        setUser(data);
        console.log(data);
    })
    .catch((err)=>console.log(err));
}

const addUser = (data,setData,setUser) => {
    axios.post(baseurl,data,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((ele)=>{
        console.log(ele);
        setData("");
        getUser(setUser);
    })
    .catch((err)=> {console.log(err);return false})
}
export {
    getUser,
    addUser
}