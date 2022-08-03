import inputResize from '../API/inputResize.js'

export default function PostInput() {
  return (
    <textarea 
            placeholder="What's happening" 
            maxLength = "300"
            className="post-box__input-field" 
            onChange={(event) => inputResize(event, '60px')} >
          </textarea>
  )
}
