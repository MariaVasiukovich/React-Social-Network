import React from 'react';
import p from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div>
            <div className={p.content_high_image}>
                <div className={p.high_image_wrapper}>
                    
                </div>
            </div>
            <div className={p.profile_content}>
                <div className={p.content_avatar}>
                    <img src='https://avatars.mds.yandex.net/i?id=d77fe832e8312a580b0131af5d78dcc4-5235548-images-thumbs&n=13' alt='avatar'></img>
                </div>
                <div>Name</div>
            </div>
        </div>
    )
}

export default ProfileInfo;