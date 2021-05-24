import React from 'react';
import './Post.css';
import imgPost from './../../../img/FotoN.png';

const Post = (props) => {
    return (
          <div>
            <img src={imgPost} className="imgPost"></img>
            {props.message}
          </div>        
    )
}

export default Post;