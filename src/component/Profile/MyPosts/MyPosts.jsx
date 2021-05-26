import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  // перенесет инфу в index.js и теперь через пропсы posts сюда приходит
  // let posts = [
  //   {id: 1, message: 'I am first'},
  //   {id: 2, message: 'hello'},
  // ]
  
  let newPostElement = React.createRef ();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  let postsElements = props.posts.map ( p => <Post message = {p.message} /> )

    return (
      <div>
        <div>
          <textarea ref={ newPostElement }></textarea>
          <button onClick={ addPost }>Add post</button>
        </div>
        {postsElements}
        {/* <Post message={posts[0].message}/>
        <Post message={posts[1].message}/> 
        Этот код был до MAP */}
      </div>
    )
}

export default MyPosts;