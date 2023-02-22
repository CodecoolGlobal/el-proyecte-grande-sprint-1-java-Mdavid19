import React from 'react';
import ChatPanel from "./ChatPanel";
import FriendList from "./FriendList";

const PageContent = () => {
    return (
        <div className={'main-content'}>
            <FriendList/>
            <ChatPanel/>

        </div>
    );
};

export default PageContent;
