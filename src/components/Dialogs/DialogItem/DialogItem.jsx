import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';
import image from './john.jpg'

const DialogItem = (props) => {
    let urlDialog = '/dialogs/'+ props.id;
    let urlAvatar = '/images/' + props.avatarSrc;
    return(
    <div className={s.dialog}>
        <div className={s.dialog_avatar}>
           <img src={image} alt='avatar' /> 
        </div>
        <img src={urlAvatar} alt='imgBug' /> 
        <NavLink className = { (navData) => navData.isActive ? s.active : s.item} to={urlDialog} >{props.name}</NavLink>
        
    </div> 
    )
}

export default DialogItem;