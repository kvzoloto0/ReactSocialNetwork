import React from 'react';
import './Friends.css'
import dialogsAvatarGirls from "./../img/dialogsAvatarGirls.png";
import FriendItems from "./FriendItems/FriendItems";



const Friends = (props) => {

    let sidebar = [
        {id: 1, name: 'NATAWA'},
        {id: 2, name: 'DAWA'},
        {id: 3, name: 'PAWA'},
    ]


  let FriendsName = sidebar.map( d => <FriendItems name={d.name} /> ); 

    return (
        <div>
            <div className="Friends">
                <div className="heading">Friends</div>
                <div className="blockdialogsAvatar">
                    <img className="dialogsAvatar" src={dialogsAvatarGirls} />
                    <img className="dialogsAvatar" src={dialogsAvatarGirls} />
                    <img className="dialogsAvatar" src={dialogsAvatarGirls} />
                </div>
            </div>
            {FriendsName}
        </div>
    )
}



export default Friends;