import React from 'react';
import './Dialogs.css';
import {NavLink} from "react-router-dom";
import DialogsItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";

const Dialogs = (props) => {




    let dialogsElements = props.dialogs.map ( d => <DialogsItems name ={d.name} id={d.id} /> );
    let messagesElements = props.messages.map ( m => <Message message ={m.message} /> )



    return (
        <div className="col-9 dialogs">
            <div className="row">
                <div className="col-3 dialogsItems">

                    { dialogsElements }
                    {/* <DialogsItems name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogsItems name={dialogsData[1].name} id={dialogsData[1].id} />
                    <DialogsItems name={dialogsData[2].name
                    } id={dialogsData[2].id} />
                    <DialogsItems name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <DialogsItems name={dialogsData[4].name} id={dialogsData[4].id} />
                    Этот код был до MAP*/}
                </div>
                <div className="col-9 messages">

                    { messagesElements }
                    {/* <Message message={messagesData[0].message} />
                    <Message message={messagesData[1].message} />
                    <Message message={messagesData[2].message} />
                    <Message message={messagesData[3].message} />
                    <Message message={messagesData[4].message} /> 
                    Этот код был до MAP*/}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;