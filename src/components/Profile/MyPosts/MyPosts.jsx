import React from 'react';
//import style
import p from './MyPosts.css';
//import componenta
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

const MyPosts = (props) => {

    let postElements = props.postData.map( p => <Post message={p.message} likesCount={p.likesCount}/> );

    let newPostElement = React.createRef();

    let addPost = () => {
       // props.addPost();    //  call addPost function from the state.js 
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return(
        <div className={p.content}>
            <div>
                <div><textarea onChange={ onPostChange } ref={ newPostElement } value={props.newPostText} name="" id="" cols="50" rows="5" placeholder='Write something new'></textarea></div>
                <div><button onClick={ addPost }>Add post</button></div>
            </div>
            <div><h3>My posts</h3></div>
            { postElements }
        </div>
    )
}

export default MyPosts;