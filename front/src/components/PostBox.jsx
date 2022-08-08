import { Avatar, Button, IconButton, ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import '../style/PostBox.scss'
import PostInput from './PostInput';
import axios from '../axios'
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import inputResize from '../API/inputResize.js'
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostCreate, fetchPosts } from '../redux/slices/posts';
import _ from 'lodash'

export default function PostBox() {
  const [imgUrls, setImgUrl] = useState([]);
  const [text, setPostext] = useState('');
  const [isImgLoaded,  setStatusImgLoading] = useState(false);
  const dispatch = useDispatch();
  const inputFileRef = useRef(null);



  const handleUploadFiles = async (event) => {
    try {
      setStatusImgLoading(false)
      if(event.target.files.length <= 6) {
        const files = event.target.files;
        const formData = new FormData();
        for(let i = 0; i < files.length; i++){
          const element = files[i]; 
          if(imgUrls.length < 6){
            imgUrls.push(`/uploads/${element.name}`);

          }
          formData.append('image', element )
        }
        const { data } = await axios.post('/uploadMultiple', formData);
        setStatusImgLoading(true)
      }

    } catch (error) {
      console.warn(error)
    }  
  };

  const handleClickRemoveImage = (item) => {
    const newArray = imgUrls.filter((e) => e !== item);
    setImgUrl(newArray);
  }; 

  const handleSubmitPost = async (event) => {
    try {
      event.preventDefault();
      const field = {
        text,
        imgUrls,
      }
      const data = await dispatch(fetchPostCreate(field)).then(dispatch(fetchPosts()));
      //window.location.reload();
    } catch (error) {
      console.log(error)
    }
    
    
  };
  return (
    <div className='post-box'>
      
      <div className='post-box__avatar' > <Avatar/> </div>
      <form action="POST" onSubmit={handleSubmitPost} >
      <div>
        <div className='post-box__input'>
          <PostInput 
            onChange={(e) => { 
              setPostext(e.target.value)
              inputResize(e, '60px')
              }}
          />
        </div>
        {isImgLoaded && (
          <div className="post-box__uploaded-img">
            <ImageList cols={3}>
              {imgUrls.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`http://localhost:3001${item}`}
                  />
                  <IconButton aria-label="delete" className="remove-img-button"  color="primary" onMouseDown={ () => handleClickRemoveImage(item)}>
                    <CancelTwoToneIcon color="action" fontSize="large" />
                  </IconButton>
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        )}
          <div className="post-box__buttons">
            <Button className="button" variant="contained" component="label">
              Upload img
              <input  
                ref={inputFileRef} 
                accept="image/*" 
                multiple 
                hidden
                type="file"
                name="postImages"
                onChange={handleUploadFiles} 
              />
            </Button>
            <Button className="button post-box__button" type='submmit' >Post</Button>
          </div>
        </div>
      </form> 
    </div>
  )
}
