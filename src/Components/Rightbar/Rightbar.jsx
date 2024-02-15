import React from 'react'
import './rightbar.css'
import CakeIcon from '@mui/icons-material/Cake';

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdaycontainer">
          <CakeIcon className='birthdayImg'/>
          <span className="birthdayText">
            <b>Google CEO</b> and <b>3 more Friends</b> have birthday Today
          </span>
        </div>
        <img src="Assets/ads.jpeg" alt="no ads found" className="rightbarAds"/><br/><br/>

        <h4 className="onlineFriends">Online Friends</h4>

        <ul className="rightbarFriendsList">
          <li className="rightbarFriend">
            <div className="rightbarFriendsContainer">
              <img src="Assets/google.jpeg" alt="" className="onlinefriendImg" />
              <span className="onlineIcon"></span>
            </div>
            <span className="FriendsName">Google CEO</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarFriendsContainer">
              <img src="Assets/Linda.jpeg" alt="" className="onlinefriendImg" />
              <span className="onlineIcon"></span>
            </div>
            <span className="FriendsName">Linda</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarFriendsContainer">
              <img src="Assets/satya.jpeg" alt="" className="onlinefriendImg" />
              <span className="onlineIcon"></span>
            </div>
            <span className="FriendsName">Mircosoft CEO</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarFriendsContainer">
              <img src="Assets/shantanu.jpeg" alt="" className="onlinefriendImg" />
              <span className="onlineIcon"></span>
            </div>
            <span className="FriendsName">Shantanu</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
