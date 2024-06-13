import React from 'react'
import "./content.css"
import Share from "../share/Share";
import Post from "../post/Post";

export default function Content() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>

      </div>
    </div>
  )
}
