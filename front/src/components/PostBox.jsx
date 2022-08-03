import { Avatar, Box, Button } from '@mui/material';
import '../style/PostBox.scss'
import PostInput from './PostInput';
export default function PostBox() {
  //const [postImg, setPostImg] = useState();
    
  return (
    <div className='post-box'>
      <form action="POST">
        <Box className='post-box__input'>
          <Avatar className='post-box__avatar'/>
          <PostInput/>
        </Box>
        <Box className="post-box__buttons">
          <Button className="button" variant="contained" component="label">
            Upload img
            <input hidden accept="image/*" multiple type="file"
              onChange={(event) => {console.log(event.target.files)}} 
             />
          </Button>
          <Button className="button post-box__button" type='submmit' >Post</Button>

        </Box>
      </form> 
    </div>
  )
}
