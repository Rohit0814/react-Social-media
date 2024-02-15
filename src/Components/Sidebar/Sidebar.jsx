import React from 'react'
import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
  return (
    <>
        <div className='sidebar'>
            <div className="sidebarWrapper">
              <ul className="sidebarList">
                <li className="sidebarListItems">
                  <RssFeedIcon/>
                  <span className="sidebarListItem">Feed</span>
                </li>

                <li className="sidebarListItems">
                  <ChatIcon/>
                  <span className="sidebarListItem">Chat</span>
                </li>

                <li className="sidebarListItems">
                  <VideoChatIcon/>
                  <span className="sidebarListItem">Vedio</span>
                </li>

                <li className="sidebarListItems">
                  <GroupIcon/>
                  <span className="sidebarListItem">Groups</span>
                </li>

                <li className="sidebarListItems">
                  <BookmarkIcon/>
                  <span className="sidebarListItem">BookMarks</span>
                </li>

                <li className="sidebarListItems">
                  <HelpOutlineIcon/>
                  <span className="sidebarListItem">Questions</span>
                </li>

                <li className="sidebarListItems">
                  <WorkIcon/>
                  <span className="sidebarListItem">Jobs</span>
                </li>

                <li className="sidebarListItems">
                  <EmojiEventsIcon/>
                  <span className="sidebarListItem">Events</span>
                </li>

                <li className="sidebarListItems">
                  <SchoolIcon/>
                  <span className="sidebarListItem">Courses</span>
                </li>
              </ul>

              <button className="sidebarbtn">Show More</button>
              <hr className="sidebarhr" />

              <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                  <img src="Assets\google.jpeg" alt="" className="FriendsImg" />
                  <span className="friends">Google CEO</span>
                </li>

                <li className="sidebarFriend">
                  <img src="Assets\Linda.jpeg" alt="" className="FriendsImg" />
                  <span className="friends">Linda</span>
                </li>

                <li className="sidebarFriend">
                  <img src="Assets\ravi.jpeg" alt="" className="FriendsImg" />
                  <span className="friends">Ravi</span>
                </li>

                <li className="sidebarFriend">
                  <img src="Assets\sasan.jpeg" alt="" className="FriendsImg" />
                  <span className="friends">Sasan</span>
                </li>

                <li className="sidebarFriend">
                  <img src="Assets\satya.jpeg" alt="" className="FriendsImg" />
                  <span className="friends">Microsoft CEO</span>
                </li>

                <li className="sidebarFriend">
                  <img src="Assets\shantanu.jpeg" alt="" className="FriendsImg" />
                  <span className="friends">Shantanu</span>
                </li>
              </ul>
            </div>
        </div>
    </>
  )
}
