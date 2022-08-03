import React from 'react'
import '../style/SidebarOption.scss'

export default function SidebarOption({text, Icon}) {
  if(Icon){
    return (
    <div className='sidebar-option '>
      <a href="http://localhost:3000/">
        <Icon/>
        <h2 >{text}</h2>
      </a>
    </div>
  )}
}
