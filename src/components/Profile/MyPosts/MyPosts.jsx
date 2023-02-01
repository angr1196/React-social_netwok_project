import React from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"

const MyPosts = (props) => {

    const postsData = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />);

    let onAddPost = () => {
        props.addPost(); 
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.posts}>
            <h3>
                My Posts
            </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newTextPost} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsData}
            </div>

        </div>
    )
}


export default MyPosts;