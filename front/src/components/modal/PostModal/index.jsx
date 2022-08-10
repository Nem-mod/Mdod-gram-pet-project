import React from 'react'
import styles from './PostModal.module.scss'
import { Button, Dialog, DialogTitle } from '@mui/material'
import PostBox from '../../PostBox/index'

export default function PostModal({open, handleClickOpen, handleClose}) {
  return (
    <div>
        <Button className="button post-button" sx={{ width: "100%"}} onClick={handleClickOpen}>Post</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby={styles.dialog}>
                <div className={styles.modal}>
                    <DialogTitle id="form-dialog-log-in">Post</DialogTitle>
                   <PostBox></PostBox>
                </div>
            </Dialog>
    </div>
  )
}
