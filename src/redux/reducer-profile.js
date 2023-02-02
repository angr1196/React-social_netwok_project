
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

    let stateCopy = {...state}
    stateCopy.posts = [...state.posts];

    switch (action.type) {
        case ADD_POST:

            let obj = {
                message: stateCopy.newTextPost,
                likeCount: 0,
                id: 4,
            }
            stateCopy.posts.push(obj);
            stateCopy.newTextPost = ''
            return stateCopy;
        case UPDATE_NEW_TEXT_POST:
            stateCopy.newTextPost = action.newText;
            return stateCopy;
        default:
            return stateCopy;
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