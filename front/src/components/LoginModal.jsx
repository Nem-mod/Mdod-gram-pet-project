import React from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
export default function LoginModal ({open, handleClickOpen, handleClose}){

  return (
    <Box>
    <Button className="button" onClick={handleClickOpen}>Log in</Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-log-in">
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
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="pass"
          label="Password"
          type="password"
          fullWidth
        />
        <DialogActions>
          <Button onClick={handleClose} className="button">Close</Button>
          <Button onClick={handleClose} className="button">Log in</Button>
        </DialogActions>
      </DialogContent>

    </Dialog>
    </Box>
  )
}
