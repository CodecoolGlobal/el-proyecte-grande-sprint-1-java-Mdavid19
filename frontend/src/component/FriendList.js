import React from 'react';
import '../styles/MainPage.css'
import BasicFriendList from "./BasicFriendList";

const FriendList = () => {
    return (
        <div className={'friends-list'}>
            <BasicFriendList/>
        </div>
    );
};

export default FriendList;
