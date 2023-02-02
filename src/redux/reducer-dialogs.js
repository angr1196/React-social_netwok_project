

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';

let initaialState = {
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
}

const dialogsReducer = (state = initaialState, action) => {

    let stateCopy = {...state};
    stateCopy.messages = [...state.messages];

    switch (action.type) {
        case ADD_MESSAGE:
            let obj = {
                message: stateCopy.newTextMessage,
                id: 5,
            }
            stateCopy.messages.push(obj);
            stateCopy.newTextMessage = '';
            return stateCopy;

        case UPDATE_NEW_TEXT_MESSAGE:
            stateCopy.newTextMessage = action.newText;
            return stateCopy;
        default:
            return state;
    }
}

export const addMessageActionCreator = () =>{ return{ type: ADD_MESSAGE }};

export const onMessageChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_TEXT_MESSAGE,
        newText: text,
    }
}

export default dialogsReducer;
