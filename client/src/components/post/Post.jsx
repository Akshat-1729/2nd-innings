import "./post.css";
import { Bookmark, BookmarkAddOutlined, MoreVert,ThumbUp } from "@mui/icons-material";
import axios from "axios";
import profile from '../../assets/profile.png'
import {format} from 'timeago.js'
import { useState,useEffect } from "react";
import {Link} from 'react-router-dom'

export default function Post({post}) {
  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false)
  const [user,setUser]=useState({})
  const likeHandler=()=>{
    setLike(isLiked ? like-1: like+1)
    setIsLiked(!isLiked)
  }
  useEffect(()=>{
    const fetchUser=async()=>{
    
      const res=await axios.get(`http://localhost:8000/api/users/${post.userId}`)
      setUser(res.data)
    
    }
    fetchUser()
  },[post.userId])
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
            <img
              className="postProfileImg"
              src={user.profilePicture?user.profilePicture:profile}
              alt="profile"
            />
            
            </Link>
            <span className="postUsername">
             
              {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <div className="likeIcon" onClick={likeHandler}>
              <ThumbUp/>
            </div>
            
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <BookmarkAddOutlined/>
          </div>
          
        </div>
      </div>
    </div>
  );
}