import React from 'react';
import ProfilePicture from "../component/ProfilePicture";
import SetUserInfo from '../component/TextFieldForUserSettings'
import ImageUploader from '../component/ImageUploader'
import '../styles/UserPage.css'
import HeaderForUserName from "../component/HeaderForUserName";
import {useUser} from "../context/userProvider";
import {useNavigate} from "react-router-dom";


const UserProfile = () => {
    const {user} = useUser()

    return user ? (
        <div className='proba'>
            <HeaderForUserName />
            <div className='container-for-picture' >
                <ProfilePicture cssClassForPicture='user-page-profile-picture' cssClassForFrame='user-page-profile-picture-frame' />
                <ImageUploader  pictureText="profile"/>
                <br/>
                <ImageUploader pictureText="cover"/>
            </div>
            <div className='position-for-inputs'>
                <SetUserInfo labelForTextArea="Change your username" inputName="userName"/>
                <SetUserInfo labelForTextArea="Change your email" inputName="email"/>
                <SetUserInfo labelForTextArea="Change your password" inputName="password"/>
                <SetUserInfo labelForTextArea="Change your status message" inputName="statusMessage"/>
            </div>
        </div>

) : (<div><h1>You have to login first</h1><button><a href={"/"}>Back</a></button></div>)

};

export default UserProfile;
