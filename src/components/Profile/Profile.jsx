
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';




const Profile = (props) => {
    
    return (
        
        <div className={s.content}>
            <ProfileInfo userProfile= {props.userProfile}/>
            <MyPostsContainer  />
        </div>
    )
   
}

export default Profile;