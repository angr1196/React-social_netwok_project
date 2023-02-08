
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../common/Preloader';




const Profile = (props) => {
    
    return (
        <div className={s.content}>
            {props.userProfile ? <ProfileInfo userProfile= {props.userProfile}/> : <Preloader/>}
            <MyPostsContainer  />
        </div>
    )
   
}

export default Profile;