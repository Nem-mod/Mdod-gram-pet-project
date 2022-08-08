import React from 'react'
import PostInput from '../PostInput'
import '../../style/PostBox.scss'
import { Button, Dialog, Avatar, DialogTitle } from '@mui/material'
import PostBox from '../PostBox'

export default function PostModal({open, handleClickOpen, handleClose}) {
  return (
    <div>
        <Button className="button post-button" sx={{ width: "100%"}} onClick={handleClickOpen}>Post</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="post-dialog">
                <div className='post-modal'>
                    <DialogTitle id="form-dialog-log-in">Post</DialogTitle>
                   <PostBox></PostBox>
                </div>
            </Dialog>
    </div>
  )
}
