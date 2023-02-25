
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import React from 'react';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.userProfile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                {/* <img src='https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg' /> */}
            </div>
            <div className={s.description}>
                <img src={props.userProfile.photos.small} />
                <div>
                    {props.userProfile.fullName}
                </div>
                <div>
                    {props.userProfile.aboutMe}
                </div>
                <div>
                    <ProfileStatus status={'Here is my status'} />
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo;