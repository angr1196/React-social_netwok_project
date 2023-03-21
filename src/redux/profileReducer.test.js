import { addPostActionCreator, deletePostActionCreator } from "./profileReducer";
import profileReducer from './profileReducer';




let state = {
    posts: [
        { message: 'This is my first post', likeCount: 5, id: 1 },
        { message: 'This is my second post', likeCount: 24, id: 2 },
        { message: 'This is my third post', likeCount: 15, id: 3 },
    ],
}


it('Length of posts should be incremented', ()=>{

    let action = addPostActionCreator("hello!");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4)

})

it('After deleting length of posts should be decremented', ()=>{

    let action = deletePostActionCreator(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2)

})
