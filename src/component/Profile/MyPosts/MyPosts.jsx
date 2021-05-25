import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  // перенесет инфу в index.js и теперь через пропсы posts сюда приходит
  // let posts = [
  //   {id: 1, message: 'I am first'},
  //   {id: 2, message: 'hello'},
  // ]
  

  let postsElements = props.posts.map ( p => <Post message = {p.message} /> )

    return (
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        {postsElements}
        {/* <Post message={posts[0].message}/>
        <Post message={posts[1].message}/> 
        Этот код был до MAP */}
      </div>
    )
}

export default MyPosts;