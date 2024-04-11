import React from 'react'

const PostItem = (props) => {

  return (
    <>
      <div>
        <strong>{props.number}. {props.post.title}</strong>
        <h2>{props.post.body}</h2>
        <button>Delete</button>
      </div>

    </>

  )
}

export default PostItem
