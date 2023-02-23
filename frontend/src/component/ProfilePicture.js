import React from 'react';
import photo from '../images/default.png'


const ProfilePicture = ({img_src, cssClassForPicture, cssClassForFrame}) => {
    return (
        <div className={cssClassForFrame}>
            <img src={img_src} alt="profile picture" className={cssClassForPicture}/>
        </div>
    );
};

ProfilePicture.defaultProps = {
    img_src:photo,
    cssClassForPicture: 'profile-picture',
    cssClassForFrame: 'profile-picture-frame'
}

export default ProfilePicture;

