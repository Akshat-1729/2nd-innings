import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar";
import Content from "../../components/content/Content";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Profile() {
  const [user,setUser]=useState({})
  useEffect(()=>{
    const fetchUser=async()=>{
    
      const res=await axios.get(`http://localhost:8000/api/users?username=Akshra`)
      setUser(res.data)
    
    }
    fetchUser()
  },[])
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/cover.png"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/profile.png"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Content username='Akshra'/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}