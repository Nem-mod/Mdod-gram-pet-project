import React from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';

export default function LoginModal ({open, handleClickOpen, handleClose}){
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors}
    } = useForm({
    defaultValues: {
      email: 'neam@zgmail.com',
      password: 'GYItsarMAsM2yceQdEX'
    },
    mode: 'onChange'
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if(data.payload){
      if('token' in data.payload){
        window.localStorage.setItem('token', data.payload.token)
      }
    }
    
  }
  return (
    <Box>
      <Button className="button" onClick={handleClickOpen}>Log in</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-log-in">
        <form onSubmit={handleSubmit(onSubmit)} action="GET">
            <DialogTitle id="form-dialog-log-in">Log in</DialogTitle>
            <DialogContent>
              <DialogContentText>
                  {handleClose}
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email adress"
                type="email"
                error={Boolean(errors.email?.message)}
                helperText={errors.email?.message}
                {...register('email', {required: 'Enter the email address '})}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="pass"
                label="Password"
                type="password"
                error={Boolean(errors.email?.message)}
                helperText={errors.password?.message}
                {...register('password', {required: 'Enter the password', minLength: { value: 5 } }, )}

                fullWidth
              />
              <DialogActions>
                <Button onClick={handleClose} className="button">Close</Button>
                <Button type='submit'  onClick={() => {if(isAuth) handleClose()}} className="button">Log in</Button>
              </DialogActions>
            </DialogContent>
          </form>
      </Dialog>
    </Box>
  )
}
