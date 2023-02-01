
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/736x/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg" />
            <a>
                {props.message}
            </a>
            <div>
                <span>Likes</span>
                <span>{' ' + props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;