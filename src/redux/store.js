
import dialogsReducer from './reducer-dialogs';
import sidebarReducer from './reducer-sideBar';
import profileReducer from './reducer-profile';

let store = {

    _state: {


        profilePage: {
            posts: [
                { message: 'This is my first post', likeCount: 5, id: 1 },
                { message: 'This is my second post', likeCount: 24, id: 2 },
                { message: 'This is my third post', likeCount: 15, id: 3 },
            ],
            newTextPost: 'write your post',
        },

        dialogPage: {
            dialogs: [
                { name: 'Dima', id: 1 },
                { name: 'Kolya', id: 2 },
                { name: 'Galya', id: 3 },
                { name: 'Kostya', id: 4 },
                { name: 'Vikaa', id: 5 },
            ],
            messages: [
                { message: 'Hello!', id: 1 },
                { message: 'How are you!', id: 2 },
                { message: 'Hi!', id: 3 },
                { message: 'Yo!', id: 4 },
            ],
            newTextMessage: 'Write your message',
        },
        sidebar: {

        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("state changed");
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

}


export default store;