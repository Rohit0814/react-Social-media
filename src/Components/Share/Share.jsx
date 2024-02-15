import React from 'react'
import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className='Share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="Assets/image1.jpeg" alt="" className="shareImg" />
                <input placeholder='What is in your Mind Steve' className="shareText" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <ul className="shareList">
                    <li className="shareListItem">
                        <PermMediaIcon htmlColor='tomato'/>
                        <span className="shareItem">Photos or Videos</span>                        
                    </li>

                    <li className="shareListItem">
                        <LabelIcon htmlColor='blue'/>
                        <span className="shareItem">Tags</span>                        
                    </li>

                    <li className="shareListItem">
                        <LocationOnIcon htmlColor='green'/>
                        <span className="shareItem">Location</span>                        
                    </li>

                    <li className="shareListItem">
                        <EmojiEmotionsIcon htmlColor='goldenrod'/>
                        <span className="shareItem">Feelings</span>                        
                    </li>
                </ul>
                <button className="shareBtn">Share</button>
            </div>
            
        </div>
    </div>
  )
}
