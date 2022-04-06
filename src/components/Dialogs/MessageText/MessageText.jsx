import React from 'react';
import s from './MessageText.module.css';

const MessageText = (props) => {
    return(
        <div>
           <div className={s.message}>{props.messageText}</div> 
        </div>
         
        
    )
}

export default MessageText;