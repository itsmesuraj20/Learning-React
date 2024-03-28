import React from 'react'

const PostCard = (porps) => {
  return (
    <div className='post-card'>
        <h3>
            {porps.title}
        </h3>
        <p>{porps.body}</p>
    </div>
  )
}

export default PostCard