import React from 'react'
import PostBox from '../../components/PostBox/index'
import Post from '../../components/Post/index'
import { useDispatch, useSelector } from 'react-redux'
import {fetchPosts, fetchTags} from "../../redux/slices/posts"
import { selectIsAuth } from '../../redux/slices/auth'
import styles from './Feed.module.scss'



export default function Feed() {
  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.posts);
  const isPostLoading = posts.status === 'loading';
  const isAuth = useSelector(selectIsAuth);
  React.useEffect(() => {
    dispatch(fetchPosts());
      
  }, [])

  return (
    <div >
      
      {/* Header */}
      <div className={styles.header}>
       Latest Tweets
      </div>
      {/* PostBox */}
      {
        isAuth && <PostBox/>
      }
      

      {/* Posts */}
      {Array.isArray(posts.items) &&  (
        (isPostLoading ? [...Array(5)] : posts.items).slice(0).reverse().map((obj, index) => 
        isPostLoading ? (<div key={index}></div>) : (
          <Post
            text={obj.text}
            id={obj._id}
            key={index}
            createdAt={obj.createdAt}
            imgUrls={obj.imgUrls}
            userName={obj.user.userName}
            imageAvatarUrl={obj.user.imageAvatarUrl}
            viewsCount={obj.viewsCount}
            commentsCount={1}
            likesCount={3}
            tags={obj.tags}
          />
        ))
      )
         
      }
    </div>
  )
}