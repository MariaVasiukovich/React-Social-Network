import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            postData : [
                {id:1, message: 'Hello, it\'s my social network by React', likesCount: 99},
                {id:2, message: 'Hello world, this is my first project', likesCount: 26},
            ],
            newPostText : 'hi',
        },
        
        dialogPage:{
            messagesData : [
                { id: 1, messageText: 'Hello'},
                { id: 2, messageText: 'How r u?'},
                { id: 3, messageText: 'When we will go to the party?'},
            ],
            newMessageText : '',  /* !!!! text doesn't remove from textarea after it has been added to the dialog */
            
            dialogsData : [
                { id: 1, name: 'Maria', avatarSrc: 'mary.jpg' }, 
                { id: 2, name: 'Aleksandr', avatarSrc: 'sasha.jpg' }, 
                { id: 3, name: 'Milena', avatarSrc: 'milena.jpg' }, 
                { id: 4, name: 'Roxi', avatarSrc: 'roxi.jpg' },
                { id: 5, name: 'Kris', avatarSrc: 'kris.jpg' },
            ],
        },     
    },
    _callSubscriber() {
        console.log('it')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);

        this._callSubscriber(this._state);
    }
};


window.store = store;
export default store;