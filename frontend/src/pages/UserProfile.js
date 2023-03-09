import React from 'react';
import ProfilePicture from "../component/ProfilePicture";
import SetUserInfo from '../component/TextFieldForUserSettings'
import '../styles/UserPage.css'



const UserProfile = () => {
    return (
        <div className='proba'>
            <div className='chatUser-name'>
                <h1>Próba Bence</h1>
            </div>
            <div className='container-for-picture' >
                <ProfilePicture cssClassForPicture='chatUser-page-profile-picture' cssClassForFrame='chatUser-page-profile-picture-frame' />
                <button className='button-for-picture'>Upload profile picture</button>
                <br/>
                <button className='button-for-picture'>Upload cover picture</button>
            </div>
            <div className='position-for-inputs'>
                <SetUserInfo labelForTextArea="Change your username" inputName="userName"/>
                <SetUserInfo labelForTextArea="Change your email" inputName="email"/>
                <SetUserInfo labelForTextArea="Change your password" inputName="password"/>
                <SetUserInfo labelForTextArea="Change your status message" inputName="statusMessage"/>
            </div>
        </div>

);
};

export default UserProfile;