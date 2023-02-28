import React from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"
import { Field, reduxForm } from "redux-form"

const MyPosts = (props) => {

    const postsData = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />);

    let sendNewPost =(values)=>{
        props.addPost(values.postBody); 
    }

    return (
        <div className={s.posts}>
            <h3>
                My Posts
            </h3>
            <div>
                <SendPostReduxForm onSubmit ={sendNewPost}/>
            </div>
            <div className={s.posts}>
                {postsData}
            </div>

        </div>
    )
}

const SendPostForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
             <div>
                    <Field placeholder = "Enter your message" name ="postBody" component ="textarea"/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
        </form>
    )
}

const SendPostReduxForm = reduxForm({
    form: "sendPostForm"
})(SendPostForm)


export default MyPosts;