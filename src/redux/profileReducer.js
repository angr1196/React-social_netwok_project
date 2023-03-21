
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initaialState = {
    posts: [
        { message: 'This is my first post', likeCount: 5, id: 1 },
        { message: 'This is my second post', likeCount: 24, id: 2 },
        { message: 'This is my third post', likeCount: 15, id: 3 },
    ],
    userProfile: null,
    userStatus: '',
}

const profileReducer = (state = initaialState, action) => {



    switch (action.type) {

        case ADD_POST:
            {
                return {
                    ...state,
                    posts: [...state.posts, {
                        message: action.newPost,
                        likeCount: 0,
                        id: 4,}],
                    newTextPost: ''
                };
            }

            case DELETE_POST:
                    return {
                        ...state,
                        posts: state.posts.filter(p => p.id != action.postId)
                    };

        case SET_USER_PROFILE:
            return{
                ...state, userProfile: action.userProfile
            };
            
        case SET_USER_STATUS:
            return{
                ...state, userStatus: action.userStatus
            }; 

        default:
            return state;
    }
}

export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost });
export const deletePostActionCreator = (postId) => ({ type: DELETE_POST, postId});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setUserStatus =(userStatus) =>({type: SET_USER_STATUS, userStatus})

export const getUserProfile =(userId)=>{
    return (dispatch)=>{
        profileAPI.getUserProfile(userId).then(data => { dispatch(setUserProfile(data)) })
    }
}
export const getUserStatus =(userId)=>{
    return (dispatch)=>{
        profileAPI.getUserStatus(userId).then(data =>{dispatch(setUserStatus(data))} )
    }
}
export const updateUserStatus =(status)=>{
    return (dispatch)=>{
        profileAPI.updateUserStatus(status).then(response =>{
            if(response.data.resultCode===0){}
            dispatch(setUserStatus(status))} )
    }
}


export default profileReducer;