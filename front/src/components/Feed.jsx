import React from 'react'
import PostBox from './PostBox'
import '../style/feed.scss'
export default function Feed() {
  return (
    <div className='feed'>
      
      {/* Header */}
      <div className='feed-header'>
       Latest Tweets
      </div>
      {/* PostBox */}
      <PostBox/>

      {/* Posts */}
    </div>
  )
}
