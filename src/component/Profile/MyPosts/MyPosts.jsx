import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'I am first'},
    {id: 2, message: 'hello'},
  ]

  let postsElements = posts.map ( p => <Post message = {p.message} /> )

    return (
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        {postsElements}
        {/* <Post message={posts[0].message}/>
        <Post message={posts[1].message}/> */}
      </div>
    )
}

export default MyPosts;