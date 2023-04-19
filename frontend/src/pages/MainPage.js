import React, {useEffect} from 'react';
import BigNavBar from "../component/BigNavBar";
import '../styles/MainPage.css'
import PageContent from "../component/PageContent";
import {useUser} from "../context/userProvider";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const style = {
        display: 'flex',
        flexDirection:'column',
        height: '100%'
    }

    const navigate = useNavigate();
    const {user} = useUser()

    useEffect(()=>{
        if(!user){
            navigate("/")
        }
    },[])

    return user ? (
        <div style={style}>
            <BigNavBar/>
            <PageContent/>
        </div>
    ) : alert("You have to log in first!");
};

export default MainPage;
