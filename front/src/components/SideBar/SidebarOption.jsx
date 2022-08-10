import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss'

export default function SidebarOption({text, Icon}) {
  const navOptionLink = `/${text}`.toLocaleLowerCase();
  if(Icon){
    return (
    <div className={styles.sidebarOption}>
      <Link  to={navOptionLink}>
          <Icon/>
          <h2 >{text}</h2>
        </Link>
    </div>
  )}
}
