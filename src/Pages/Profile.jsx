import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

const Profile = () => {
    const {user}=useAuth();
    const [userInfo,setUserInfo]=useState();
    console.log(user);
    // const {displayName,email,photoURL}= user;
    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res)=>res.json())
      .then((data)=>setUserInfo(data));
    },[user])
    console.log(userInfo);
    return (
        <div className="flex flex-col items-center">
        <h1 className="text-5xl text-center font-bold">{userInfo?.name}</h1>
        <h3 className="text-xl font-semibold">Email: {userInfo?.email}</h3>
        
        <div className="avatar">
          <div className=" rounded-full border-2 border-black">
            <img src={userInfo?.photoURL || "/public/placeholder.jpg"} />
          </div>
        </div>
  
        <Link to={`profile-edit/${userInfo?._id}`} className="btn btn-active mt-4">Edit Profile</Link>
      </div>
    );
};

export default Profile;