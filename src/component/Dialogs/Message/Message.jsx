import React from 'react';
import './../Dialogs.css';



const Message = (props) =>{
    return(
        <div>
            <div className="messageKirill">
                {props.messageKirill}
            </div>
            <div className="DialogMessage">{props.message}</div>
        </div>
    )
}


export default Message;