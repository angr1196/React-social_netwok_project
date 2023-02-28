import React from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"
import SendPostForm from "./SendPostForm";

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
                <SendPostForm onSubmit ={sendNewPost}/>
            </div>
            <div className={s.posts}>
                {postsData}
            </div>

        </div>
    )
}



export default MyPosts;