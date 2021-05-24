import React from 'react';
import './../Dialogs.css';
import {NavLink} from "react-router-dom";


const DialogsItems = (props) => {
    return(
        <div className="dialog">
            <NavLink to={"/dialogs/" + "" + props.id }>{props.name}</NavLink>
        </div>
    )
}



export default DialogsItems;