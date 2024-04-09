import React from 'react'

const PostItem = ({post}) => {
  return (
    <div className='post'>
        <strong>{post.title}</strong>
      <div>{post.body}</div>
    </div>
  )
}

export default PostItem
