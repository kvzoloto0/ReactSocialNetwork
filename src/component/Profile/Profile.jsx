import React from 'react';
import './Profile.css';
import imgProfile from './../img/contentImg.jpg'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = (props) => {
    return (
    <div className="col-9 Profile">
      <ProfileInfo />
      <MyPosts posts = { props.state.posts } addPost = {props.addPost} />
    </div> 
    )
}

export default Profile;

