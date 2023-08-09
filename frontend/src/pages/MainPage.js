import React, {useEffect} from 'react';
import BigNavBar from "../component/BigNavBar";
import '../styles/MainPage.css'
import PageContent from "../component/PageContent";
import {useUser} from "../context/userProvider";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

const MainPage = () => {
    const style = {
        display: 'flex',
        flexDirection:'column',
        height: '100%'
    }
    const [friends, setFriends] = React.useState([]);
    const navigate = useNavigate();
    const {user} = useUser()

    function getFriends(){
        fetch(`/api/get-friends?id=${user.id}`,
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`
                }
            }).then((res) => res.json())
            .then((res) => {
                setFriends(res)
            })
    }

    useEffect(()=>{
        if(!user){
            navigate("/")
        }
        getFriends()
    },[])

    return user ? (
        <div style={style}>
            <BigNavBar onFriendAdded={() => getFriends()}/>
            <PageContent friends={friends}/>
        </div>
    ) : alert("You have to log in first!");
};

export default MainPage;
