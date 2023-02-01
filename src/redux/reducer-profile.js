
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
            let obj = {
                message: state.newTextPost,
                likeCount: 0,
                id: 4,
            }
            state.posts.push(obj);
            state.newTextPost = ''
            return state;
        case UPDATE_NEW_TEXT_POST:
            state.newTextPost = action.newText;
            return state;
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