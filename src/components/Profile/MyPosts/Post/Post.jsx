import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return(
        <div className={p.post}>
            <div className={p.avatar}> {/* get avatar image */}
                <img src="https://cdn3.static1-sima-land.com/items/1048384/0/700.jpg?v=1573734844" alt="" />
            </div>
            <div className={p.post_content}>
                <div>{props.message}</div>  {/* get message from My posts */}
                <div className={p.like}>{props.likesCount} Likes</div>
            </div>
        </div>
    )
}

export default Post;