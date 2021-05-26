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
          В низу можно написать текст и отправить и оно все сохраниться до перезагрузки странички
        </div>
      </div> 
    )
}

export default ProfileInfo;