import styles from './PostBox.module.scss'
export default function PostInput(props) {
  return (
    <textarea 
            placeholder="What's happening" 
            maxLength = "300"
            className={styles.inputField}
            onChange={props.onChange}>
    </textarea>
  )
}