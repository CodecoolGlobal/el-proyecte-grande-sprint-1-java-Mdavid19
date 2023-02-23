import React from 'react';
import '../styles/index.css'
import ProfilePicture from "./ProfilePicture";
import TextField from "./TextField";
import Button from "./Button";

const BigNavBar = () => {
    return (
        <div id='big-nav-bar'>
            <ProfilePicture/>
            <TextField name={'Próba Bence'} className={'user-field'}/>
            <Button img_src={''} url={'#'} className={'add-user-button'}/>
            <Button img_src={''} url={'#'} className={'edit-user-btn'}/>
        </div>
    );
};

export default BigNavBar;

//rsc az arrow function
// msn színkód rgb(38,152,211)  vagy #2698D3