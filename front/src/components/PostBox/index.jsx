import { Avatar, Button, IconButton, ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import styles from './PostBox.module.scss'
import PostInput from './PostInput';
import axios from '../../axios'
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import inputResize from '../../API/inputResize.js'
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostCreate, fetchPosts } from '../../redux/slices/posts';

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
    } catch (error) {
      console.log(error)
    }
    
    
  };
  return (
    <div className={styles.postBox}>
      
      <div className={styles.avatar}> <Avatar/> </div>
      <form action="POST" onSubmit={handleSubmitPost} >
        <div>
          <div className={styles.input}>
            <PostInput
              onChange={(e) => { 
                setPostext(e.target.value)
                inputResize(e, '60px')
                }}
            />
          </div>
          {isImgLoaded && (
            <div className={styles.uploadedImg}>
              <ImageList cols={3}>
                {imgUrls.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`http://localhost:3001${item}`}
                    />
                    <IconButton aria-label="delete" className={styles.removeImgButton} color="primary" onMouseDown={ () => handleClickRemoveImage(item)}>
                      <CancelTwoToneIcon color="action" fontSize="large" />
                    </IconButton>
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          )}
          <div className={styles.buttons}>
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
            <Button className={`button ${styles.button}`}  type='submmit' >Post</Button>
          </div>
        </div>
      </form> 
    </div>
  )
}
