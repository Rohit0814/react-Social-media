import React from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="Assets/image1.jpeg" alt="" className="postProfile" />
                    <span className="postAuthor">Steve Jobs</span>
                    <span className="postTime">5 Min Ago</span>
                </div>

                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postContent">This is my First Post</span>
                <img src="Assets/image1.jpeg" alt="" className="postImg" /><br/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpIcon htmlColor='blue' className='postThumb'/>
                    <FavoriteIcon htmlColor='red' className='postLike'/>
                    <span className="postLikeText">32 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 Comments</span>
                </div>
            </div>
            
        </div>

        
    </div>
  )
}
