import React from 'react';
import ProfilePicture from "./component/ProfilePicture";

const UserProfile = () => {
    return (
        <div>
            <ProfilePicture />
            <button>Upload profile picture</button>
            <br/>
            <button>Upload cover picture</button>
        </div>
    );
};

export default UserProfile;