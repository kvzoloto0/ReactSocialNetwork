import React from 'react';
import './Friends.css'
import dialogsAvatarGirls from "./../img/dialogsAvatarGirls.png";



const Friends = (props) => {
    return (
        <div className="Friends">
            <div className="heading">Friends</div>
            <div className="blockdialogsAvatar">
                <img className="dialogsAvatar" src={dialogsAvatarGirls} />
                <img className="dialogsAvatar" src={dialogsAvatarGirls} />
                <img className="dialogsAvatar" src={dialogsAvatarGirls} />
            </div>
        </div>  
    )
}



export default Friends;