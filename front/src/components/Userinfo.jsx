import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Userinfo.scss"

export default function Userinfo({name}) {
  const userPageLink = `/user/${name}`.toLocaleLowerCase();
  return (
    <div className='userinfo'>
      <div className="userinfo__name"><Link  to={userPageLink} >{name}</Link></div>
      <div> <Link  to={userPageLink} className="userinfo__link">@{name}</Link></div>
    </div>
  )
}
