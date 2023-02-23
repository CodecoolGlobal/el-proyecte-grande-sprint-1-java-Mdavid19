import React from 'react';
import BigNavBar from "../component/BigNavBar";
import '../styles/MainPage.css'
import PageContent from "../component/PageContent";

const MainPage = () => {
    const style = {
        display: 'flex',
        flexDirection:'column',
        height: '100%'
    }
    return (
        <div style={style}>
            <BigNavBar/>
            <PageContent/>
        </div>
    );
};

export default MainPage;
