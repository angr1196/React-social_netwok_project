

const ADD_MESSAGE = 'ADD-MESSAGE';

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

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newTextMessage: '',
                messages: [...state.messages, {
                    message: action.newMessage,
                    id: 5
                }]
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessage) => { return { type: ADD_MESSAGE, newMessage} };


export default dialogsReducer;
