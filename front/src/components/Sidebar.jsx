import React, { useState } from 'react'
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import MessageIcon from '@mui/icons-material/Message';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import '../style/Sidebar.scss'
import PostModal from './modal/PostModal';

function Sidebar(props) {
  const [openPost, setOpenPost] = useState(false);
  return (
    <nav className={props.class}>
      {/* {SedebarOptions} */}
      <SidebarOption text='Home' Icon={HomeIcon}/>
      <SidebarOption text='Explore' Icon={TagIcon}/>
      {/* <SidebarOption text='Notifications' Icon={NotificationsNoneIcon}/> */}
      {/* <SidebarOption text='Messages' Icon={MessageIcon}/> */}
      {/* <SidebarOption text='Bookmarks' Icon={BookmarkIcon}/> */}
      {/* <SidebarOption text='Lists ' Icon={ListAltIcon}/> */}
      <SidebarOption text='Profile'Icon={AccountBoxIcon}/>
      <PostModal
        open={openPost}
        handleClickOpen={()=> {setOpenPost(true);}}
        handleClose={() => setOpenPost(false)}
            
      />
    </nav>
  )
}

export default Sidebar