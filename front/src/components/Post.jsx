import { Avatar, Box, IconButton, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import Userinfo from './Userinfo'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import "../style/Post.scss"
import { Link } from 'react-router-dom';

export default function Post({
    _id,
    text,
    createdAt,
    imgUrls,
    userName,
    imageAvatarUrl,
    viewsCount,
    commentsCount,
    likesCount,
    tags
  }) 
  {

  return (
    <div className='post post-box '>
      <div className="post__avatar">
        <Avatar src={imageAvatarUrl}/>
      </div>
        <Box className='post__body'>
            <div className="post__header">
              <Userinfo name={userName} ></Userinfo>
             
              <div className="post__description">
                {text}
              </div>
            </div>
            {imgUrls && (
              <div className="">
                <ImageList cols={3}>
                  {imgUrls.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`http://localhost:3001${item}`}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            )}


            <div className="post__footer">
              { tags && <ul className='post__tags'>
                {tags.map((name) => (
                  <li key={name}>
                    <Link to={`tags/#${name}`}>#{name}</Link>
                  </li>
              ))}
                </ul>}
              <ul className="post__activity">
                <li className='post__activity_v'>
                    <RemoveRedEyeOutlinedIcon />
                    <span>{viewsCount}</span>
                </li>
                <li className='post__activity_c'>
                  <IconButton className='icon'>
                    <ChatBubbleOutlineOutlinedIcon/>                      
                  </IconButton> 
                  <span>{commentsCount}</span>
                </li>
                <li className='post__activity_l'>
                    <IconButton className='icon'>
                      <FavoriteBorderOutlinedIcon />
                    </IconButton>
                    <span>{likesCount}</span>
                  </li>
                </ul>
            </div>
        </Box>
    </div>
  )
}
