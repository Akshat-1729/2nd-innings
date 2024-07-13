import React, { useEffect, useState } from 'react'
import "./content.css"
import Share from "../share/Share";
import Post from "../post/Post";
import axios from 'axios'

export default function Content({username}) {
  const [posts,setPost]=useState([])
  useEffect(()=>{
    const fetchPosts=async()=>{
    
      const res=username
      ?await axios.get('http://localhost:8000/api/posts/profile/'+username)
      :await axios.get('http://localhost:8000/api/posts/timeline/666ff7d612846319425986ba')

      setPost(res.data)
      
    }
    fetchPosts()
  },[])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p)=>(
          <Post key={p._id} post={p}/>
        ))}

      </div>
    </div>
  )
}
