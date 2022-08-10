import React from 'react'
import { Avatar, Button, TextField } from '@mui/material'
import styles from './Settings.module.scss'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from '../../axios'
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
export default function Form() {
  const dispatch = useDispatch();
  const myAccount = useSelector(state => state.auth.data);
  const [avatarUrl, setAvatar] = useState(''); 

  const handleUploadFile = async (event) => {
    try {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image', file );
        const { data } = await axios.post('/upload', formData);
        setAvatar(file.name);
        console.log(avatarUrl)
        }
      catch (error) {
        console.warn(error)
      }  
  } 
  console.log(myAccount);
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors}
    } = useForm({
    defaultValues: {
      userName: myAccount.userName,
      email: myAccount.email,
      password: ''
    },
    mode: 'onChange'
  });
  
  
  return (
    <form action='PATCH' className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.avatarBox}>
            <Avatar  src={`http://localhost:3001/uploads/${avatarUrl}`}  sx={{ width: "100%", height: "100%" }}/>
            <Button className={styles.avatarButton}variant="contained" component="label">
              <input  
                //ref={inputFileRef} 
                accept="image/*" 
                multiple 
                hidden
                type="file"
                name="avatarImg"
                onChange={handleUploadFile} 
              />
              <AddAPhotoIcon/>
            </Button>
        </div>
        <div className={styles.inputsBox}> 
          <TextField
            autoFocus
            margin="dense"
            id="email"
            type="email"
            label="email"
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            {...register('email', {required: 'Enter the email address '})}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="userName"
            type="text"
            label="Username"
            error={Boolean(errors.userName?.message)}
            helperText={errors.userName?.message}
            {...register(
              'userName', {
              required: 'Enter the username ',
              minLength: { 
                value: 3,
                message: 'Username cannot be shorter than 3 characters'
              }
            })}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="pass"
            type="password"
            label="New password"
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            {...register('password', {
              required: 'Enter the password ',
              minLength: {
                value: 5, 
                message: 'Use 5 characters or more for your password'
              }
            })}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="submit password"
            type="password"
            error={Boolean(errors.password?.message)}
            label="Submit password"
            helperText={errors.password?.message}
            {...register('password', {
              required: 'Submit the password',
              minLength: {
                value: 5, 
                message: 'Use 5 characters or more for your password'
              }
            })}
            fullWidth
          />
        </div>
        <Button class={`button ${styles.submitButton}`} type='submit'>Submit</Button>
      </form>
  )
}
