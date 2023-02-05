
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';

let initaialState = {
    posts: [
        { message: 'This is my first post', likeCount: 5, id: 1 },
        { message: 'This is my second post', likeCount: 24, id: 2 },
        { message: 'This is my third post', likeCount: 15, id: 3 },
    ],
    newTextPost: 'write your post',
}

const profileReducer = (state = initaialState, action) => {



    switch (action.type) {
        case ADD_POST:
            {
                return {
                    ...state,
                    posts: [...state.posts, {
                        message: state.newTextPost,
                        likeCount: 0,
                        id: 4,}],
                    newTextPost: ''
                };
            }
        case UPDATE_NEW_TEXT_POST:
            return {
                ...state,
                newTextPost: action.newText
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_TEXT_POST,
        newText: text,
    }
}

export default profileReducer;