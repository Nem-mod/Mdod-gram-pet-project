import { Avatar, Box, IconButton, ImageList, ImageListItem, stepLabelClasses } from '@mui/material'
import React from 'react'
import Userinfo from './Userinfo'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import styles from "./Post.module.scss"
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
    <div className={styles.post}>
      <div className={styles.avatar}>
        <Avatar src={imageAvatarUrl}/>
      </div>
        <Box className={styles.body}>
            <div className={styles.header}>
              <Userinfo name={userName} ></Userinfo>
              <div className={styles.description}>
                {text}
              </div>
            </div>
            {imgUrls && (
              <div className={styles.img}>
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
            <div className={styles.footer}>
              { tags && <ul className={styles.footer}>
                {tags.map((name) => (
                  <li key={name}>
                    <Link to={`tags/#${name}`}>#{name}</Link>
                  </li>
              ))}
                </ul>}
              <ul className={styles.activity}>
                <li className={styles.activity_v}>
                    {/* <RemoveRedEyeOutlinedIcon />
                    <span>{viewsCount}</span> */}
                </li>
                <li className={styles.activity_c}>
                  <IconButton className={styles.icon}>
                    <ChatBubbleOutlineOutlinedIcon/>                      
                  </IconButton> 
                  <span>{commentsCount}</span>
                </li>
                <li className={styles.activity_l}>
                    <IconButton className={styles.icon}>
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
