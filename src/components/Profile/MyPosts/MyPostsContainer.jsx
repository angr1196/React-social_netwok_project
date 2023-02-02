import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/reducer-profile";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newTextPost: state.profilePage.newTextPost
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addPost : () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) =>{
            let action = onPostChangeActionCreator(text);
            dispatch(action);
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;