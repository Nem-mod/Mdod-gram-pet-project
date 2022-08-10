import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Post.module.scss"

export default function Userinfo({name}) {
  const userPageLink = `/user/${name}`.toLocaleLowerCase();
  return (
    <div className={styles.userinfo}>
      <div className={styles.name}><Link  to={userPageLink} >{name}</Link></div>
      <div> <Link  to={userPageLink} className={styles.link}>@{name}</Link></div>
    </div>
  )
}
