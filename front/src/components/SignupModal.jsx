import React from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
export default function SinginModal ({open, handleClickOpen, handleClose}) {
  return (
    <Box>
          <Button className="button" onClick={handleClickOpen}>Sign up</Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-sign-in">
            <DialogTitle id="form-dialog-sign-in">Sign up</DialogTitle>
            <DialogContent>
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
                id="userName"
                label="Username"
                type="text"
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
                <Button onClick={handleClose} className="button">Sign up</Button>
              </DialogActions>
            </DialogContent>

          </Dialog>
        </Box>
  )
}
