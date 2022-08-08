import React from 'react'
import { Link } from 'react-router-dom'
import '../style/SidebarOption.scss'

export default function SidebarOption({text, Icon}) {
  const navOptionLink = `/${text}`.toLocaleLowerCase();
  if(Icon){
    return (
    <div className='sidebar-option '>
      <Link  to={navOptionLink}>
          <Icon/>
          <h2 >{text}</h2>
        </Link>
    </div>
  )}
}
