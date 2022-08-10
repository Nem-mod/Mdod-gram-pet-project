import React from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import {useDispatch, useSelector} from 'react-redux'
import { fetchRegister, selectIsAuth, } from '../../redux/slices/auth';
import {useForm} from 'react-hook-form'


export default function SinginModal ({open, handleClickOpen, handleClose}) {

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors}
    } = useForm({
    defaultValues: {
      userName: "Nemam",
      email: 'neam@zgmail.com',
      password: 'GYItsarMAsM2yceQdEX'
    },
    mode: 'onChange'
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
  }

  return (
    <Box>
          <Button className="button" onClick={handleClickOpen}>Sign up</Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-sign-in">
            <form action="POST" onSubmit={handleSubmit(onSubmit)} >
              <DialogTitle id="form-dialog-sign-in">Sign up</DialogTitle>
              <DialogContent>
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
                    id="userName"
                    label="Username"
                    type="text"
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
                    label="Password"
                    type="password"
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
                  <DialogActions>
                    <Button onClick={handleClose} className="button">Close</Button>
                    <Button onClick={() => {if(isAuth) handleClose()}} className="button" type='submit'>Sign up</Button>
                  </DialogActions>
                </DialogContent>
            </form>
          </Dialog>
        </Box>
  )
}