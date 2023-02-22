import React from 'react';
import BigNavBar from "./component/BigNavBar";
import './App.css'
import FriendList from "./component/FriendList";
import ChatPanel from "./component/ChatPanel";
import PageContent from "./component/PageContent";

const MainPage = () => {
    const style = {
        display: 'flex',
        flexDirection:'column'
    }
    return (
        <div style={style}>
            <BigNavBar/>
            <PageContent/>
        </div>
    );
};

export default MainPage;
