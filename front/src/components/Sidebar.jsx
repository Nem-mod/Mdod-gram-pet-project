import React from 'react'
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button } from '@mui/material';
import '../style/Sidebar.scss'

function Sidebar(props) {
  return (
    <nav className={props.class}>
      {/* {SedebarOptions} */}
      <SidebarOption text='Home' Icon={HomeIcon}/>
      <SidebarOption text='Explore' Icon={TagIcon}/>
      <SidebarOption text='Notifications' Icon={NotificationsNoneIcon}/>
      <SidebarOption text='Messages' Icon={MessageIcon}/>
      <SidebarOption text='Bookmarks' Icon={BookmarkIcon}/>
      <SidebarOption text='Lists ' Icon={ListAltIcon}/>
      <SidebarOption text='Profile'Icon={AccountBoxIcon}/>
      <Button className="button post-button">Post</Button>
    </nav>
  )
}

export default Sidebar