import React from "react";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/reducer-profile";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let updateNewPostText = (text) =>{
        props.store.dispatch(onPostChangeActionCreator(text));
    }
   
    return (
     <MyPosts updateNewPostText = {updateNewPostText} 
     addPost = {addPost} 
     posts ={state.profilePage.posts}
     newTextPost = {state.profilePage.newTextPost}/>
    )
}


export default MyPostsContainer;