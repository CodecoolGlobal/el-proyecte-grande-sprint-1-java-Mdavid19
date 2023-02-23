import React from 'react';
import ProfilePicture from "../component/ProfilePicture";
import SetUserInfo from '../component/TextFieldForUserSettings'



const UserProfile = () => {
    return (
        <div>
            <ProfilePicture />
            <button>Upload profile picture</button>
            <br/>
            <button>Upload cover picture</button>
            <SetUserInfo labelForTextArea="Change your username"/>
            <SetUserInfo labelForTextArea="Change your email"/>
            <SetUserInfo labelForTextArea="Change your password"/>
            <SetUserInfo labelForTextArea="Change your status message"/>
        </div>

);
};

export default UserProfile;