import "./post.css";
import { Bookmark, BookmarkAddOutlined, MoreVert,ThumbUp } from "@mui/icons-material";

import { useState } from "react";

export default function Post() {
  const [like,setLike] = useState(0)
  const [isLiked,setIsLiked] = useState(false)
  const likeHandler=()=>{
    setLike(isLiked ? like-1: like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/profile.png"
              alt=""
            />
            <span className="postUsername">
              Old Kumar
            </span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">aarti at my house</span>
          <img className="postImg" src="/assets/aarti.png" alt="" />
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