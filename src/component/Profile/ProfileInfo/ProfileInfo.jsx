import React from 'react';
import './ProfileInfo.css';
import imgProfile from './../../img/contentImg.jpg';


const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img src={imgProfile} className="imgProfile" />
        </div>
        <div>
          ava + description
        </div>
      </div> 
    )
}

export default ProfileInfo;