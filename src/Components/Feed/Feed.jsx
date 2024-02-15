import React from 'react'
import './feed.css'
import Share from '../Share/Share'
import Post from '../Posts/Post'
export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}
