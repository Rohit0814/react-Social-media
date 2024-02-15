import './Topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';

export default function Topbar() {
  return (
    <div className='TopbarContainer'>
      <div className="TopbarLeft">
        <span className="logo">SocialApp</span>
      </div>
      <div className="TopbarCenter">
        <div className="searchBar">
          <SearchIcon className='SearchIcon'/>
        </div>
        <input placeholder='Search For Friends' className="searchBox" />
      </div>
      <div className="TopbarRight">
        <div className="TopbarLinks">
          <span className="TopbarLink">Home</span>
          <span className="TopbarLink">TimeLine</span>
        </div>
        <div className="TopbarItems">
          <div className="TopbarItem">
            <PeopleIcon className='TopbarItemIcon'/>
            <span className="TopbarItemBatch">1</span>
          </div>
          
          <div className="TopbarItem">
            <NotificationsIcon className='TopbarItemIcon'/>
            <span className="TopbarItemBatch">1</span>
          </div>

          <div className="TopbarItem">
            <MessageIcon className='TopbarItemIcon'/>
            <span className="TopbarItemBatch">1</span>
          </div>
        </div>
        <img src="Assets/image1.jpeg" alt="pic Not Found" className="TopbarImg" />
      </div>
    </div>
  )
}
