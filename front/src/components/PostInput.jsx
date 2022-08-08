
export default function PostInput(props) {
  return (
    <textarea 
            placeholder="What's happening" 
            maxLength = "300"
            className="post-box__input-field" 
            onChange={props.onChange}>
    </textarea>
  )
}
