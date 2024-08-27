import React, { useEffect } from 'react'
import img from "../images/profile.jpg"
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { getUser } from '../utils/userController';
import Card from './Card'
export default function LandingPage() {
  const { isAuthenticated,loginWithRedirect, user } = useAuth0();
  const [user1, setUser] = React.useState([]);
  const navigate = useNavigate();
  const authClick = () => {
    loginWithRedirect("/");
  }
  useEffect(() => {
    getUser(setUser);
  },[]);
  const handleSuper = () => {
    const us = user1.filter((ele)=> ele.isSupervisor === true && ele.email === user.email);
    if(us.length === 0){
      alert("You are not authorized to access this page");
      navigate("/");
    }
    else{
      alert("Successfull Login");
      navigate("/supervisor");
    }
  }
  const dummyHandle = () => {}
  const handleAdmin = () => {
    const us = user1.filter((ele)=> ele.isAdmin === true && ele.email === user.email);
    if(us.length === 0){
      alert("You are not authorized to access this page");
      navigate("/");
    }
    else{
      alert("Successfull Login");
      navigate("/admin");
    }
  }

  const cardata = [
    {
      id : '1',
      imageSrc :img,
      buttonText: "Register Complaint",
      path: "/complaint",
      handle: dummyHandle
    },
    {
      id : '2',
      imageSrc :img,
      buttonText: "Supervisor Login",
      path: "/supervisor",
      handle: handleSuper
    },
    {
      id : '3',
      imageSrc :img,
      buttonText: "Admin Login",
      path: "/admin",
      handle: handleAdmin
    }

  ]
  return (!isAuthenticated) ? (
    <div className='flex justify-center align-middle gap-8 mt-9'>
        <Card key="1" imageSrc={img} buttonText="Login" path="/" handle={authClick} />
    </div>
  ) : (
    <div className='flex justify-center align-middle gap-8 mt-9'>
      {cardata.map((ele)=>{
        return <Card  key={ele.id} imageSrc={ele.imageSrc} buttonText={ele.buttonText} path={ele.path} handle={ele.handle}/>
      })}
    </div>
  ) 
}
