const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id:5,
                messageText: state.newMessageText,
            };
            state.newMessageText = '';
            state.messagesData.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE}); //можно записывать без return

export const onMessageChangeActionCreator = (text) => {
    return{
        type: UPDATE_NEW_MESSAGE_TEXT, 
        newText: text
    }
}

export default dialogsReducer;