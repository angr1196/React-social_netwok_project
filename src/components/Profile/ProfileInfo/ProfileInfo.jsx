
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    
    return (
        <div>
            <div>
                <img src='https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg' />
            </div>
            <div className ={s.description}>
                <img src={props.userProfile.photos.small}  /> 
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;