import React from 'react';
import ProfilePicture from "../component/ProfilePicture";
import SetUserInfo from '../component/TextFieldForUserSettings'
import '../styles/UserPage.css'



const UserProfile = () => {
    return (
        <div className='proba'>
            <div className='user-name'>
                <h1>Próba Bence</h1>
            </div>
            <div className='container-for-picture' >
                <ProfilePicture cssClassForPicture='user-page-profile-picture' cssClassForFrame='user-page-profile-picture-frame' />
                <button className='button-for-picture'>Upload profile picture</button>
                <br/>
                <button className='button-for-picture'>Upload cover picture</button>
            </div>
            <div className='position-for-inputs'>
                <SetUserInfo labelForTextArea="Change your username"/>
                <SetUserInfo labelForTextArea="Change your email"/>
                <SetUserInfo labelForTextArea="Change your password"/>
                <SetUserInfo labelForTextArea="Change your status message"/>
            </div>
        </div>

);
};

export default UserProfile;