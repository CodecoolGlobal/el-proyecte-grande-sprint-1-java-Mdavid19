import React from 'react';
import photo from '../images/default.png'


const ProfilePicture = ({img_src}) => {
    return (
        <div className={'profile-picture-frame'}>
            <img src={img_src} alt="profile picture" className={'profile-picture'}/>
        </div>
    );
};

ProfilePicture.defaultProps = {
    img_src:photo
}

export default ProfilePicture;

