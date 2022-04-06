import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import MessageText from './MessageText/MessageText';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer';

import s from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData.map( d => <DialogItem name={d.name} id={d.id} avatarSrc={d.avatarSrc}/> );
    let messageElements = props.state.messagesData.map( m => <MessageText messageText={m.messageText} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        //props.addMessage();
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () =>{
        let text = newMessageElement.current.value;
        //props.updateNewMessageText(text);
        props.dispatch(onMessageChangeActionCreator(text));
    };

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div>Dialogs</div>
                { dialogElements }
            </div>
            <div className={s.messages}>
                { messageElements }
                <div className={s.send_message}>
                   <textarea onChange={ onMessageChange } ref={ newMessageElement } value={ props.newMessageText } cols="40" rows="5"></textarea>
                   <div>
                        <button onClick={ addMessage }>Send message</button> 
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Dialogs;