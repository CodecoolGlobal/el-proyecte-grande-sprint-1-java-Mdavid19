import React from 'react';
import '../styles/index.css'
import ProfilePicture from "./ProfilePicture";
import TextField from "./TextField";
import Button from "./Button";
import gearPicture from "../images/setting.png"
import addUserIcon from "../images/add-user-icon.png"
import logoutIcon from "../images/logoutIcon.png"
import HeaderForUserName from "./HeaderForUserName";

const BigNavBar = () => {

    return (
        <div id='big-nav-bar'>
            <ProfilePicture/>
            <HeaderForUserName/>
            <Button img_src={addUserIcon} url={'#'} className={'add-user-button'}/>
            <Button img_src={gearPicture} url={'http://localhost:3000/chat-user-profile'} className={'edit-user-btn'}/>
            <Button img_src={logoutIcon} url={''} className={'logout-btn'}/>


        </div>
    );
};

export default BigNavBar;

//rsc az arrow function
// msn színkód rgb(38,152,211)  vagy #2698D3