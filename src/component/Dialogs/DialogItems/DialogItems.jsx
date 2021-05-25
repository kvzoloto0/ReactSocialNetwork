import React from 'react';
import './../Dialogs.css';
import {NavLink} from "react-router-dom";

import dialogsAvatarGirls from "./../../img/dialogsAvatarGirls.png";
// import dialogsAvatarMan from "./../../img/dialogsAvatarMan.png"; возможно фотка для мужского пола ( позже мб подключю)


const DialogsItems = (props) => {
    return(
        <div className="dialog">            
            <NavLink to={"/dialogs/" + "" + props.id }>
                <img src={dialogsAvatarGirls} className="dialogsAvatar"/>
                {props.name}       
            </NavLink>
        </div>
    )
}



export default DialogsItems;