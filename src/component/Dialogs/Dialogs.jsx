import React from 'react';
import './Dialogs.css';
import {NavLink} from "react-router-dom";
import DialogsItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";


const Dialogs = (props) => {


    // перенесет инфу в index.js и теперь через пропсы posts сюда приходит
    // let dialogs = [
    //     {id: 1, name: 'NATAWA'},
    //     {id: 2, name: 'DAWA'},
    //     {id: 3, name: 'PAWA'},
    //     {id: 4, name: 'Viktor'},
    //     {id: 5, name: 'BAC9'},
    // ]
    
    // let messages = [
    //     {id: 1, message: 'Hi'},
    //     {id: 2, message: 'how do you do?'},
    //     {id: 3, message: 'Yo'},
    //     {id: 5, message: 'Yo'},
    //     {id: 4, message: 'Yo'},
    // ]


    let dialogsElements = props.state.dialogs.map ( d => <DialogsItems name = {d.name} id = {d.id} /> );
    let messagesElements = props.state.messages.map ( m => <Message message = {m.message} messageKirill = {m.messageKirill}/> )



    return (
        <div className="col-9 dialogs">
            <div className="row">
                <div className="col-4 dialogsItems">

                    { dialogsElements }
                    {/* <DialogsItems name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogsItems name={dialogsData[1].name} id={dialogsData[1].id} />
                    <DialogsItems name={dialogsData[2].name
                    } id={dialogsData[2].id} />
                    <DialogsItems name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <DialogsItems name={dialogsData[4].name} id={dialogsData[4].id} />
                    Этот код был до MAP*/}
                </div>
                <div className="col-8 messages">

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