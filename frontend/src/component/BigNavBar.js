import React, {useCallback, useEffect} from 'react';
import '../styles/index.css'
import ProfilePicture from "./ProfilePicture";
import CustomButton from "./Button";
import gearPicture from "../images/setting.png"
import addUserIcon from "../images/add-user-icon.png"
import logoutIcon from "../images/logoutIcon.png"
import HeaderForUserName from "./HeaderForUserName";
import {useUser} from "../context/userProvider";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const BigNavBar = () => {
    const {logout,user} = useUser();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [friendEmail, setFriendEmail] = React.useState(null);
    const token = Cookies.get('token')

    const handleLogout = useCallback(()=>{
        logout()
        navigate('/')
    },[])

    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false)
    }

    const data = {
        userEmail:user.email,
        email:friendEmail
    }

    function sendData(){
        fetch("/api/add-friend",{
            method:"POST",
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-type":"application/json"
            },
            body: JSON.stringify(data)
        }).then((res)=>{
            console.log(res.status)
        })
    }

    const addFriend = ()=>{
        sendData()
        handleClose()
    }


    return (
        <div id='big-nav-bar'>
            <ProfilePicture/>
            <HeaderForUserName/>
            <CustomButton img_src={addUserIcon} className={'add-user-button'} onClick={handleOpen} />
            <CustomButton img_src={gearPicture} url={'/chat-user-profile'} className={'edit-user-btn'}/>
            <CustomButton img_src={logoutIcon} url={'/'} className={'logout-btn'} onClick={handleLogout}/>
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>ADD YOUR FRIEND</DialogTitle>
                    <DialogContent>
                        <TextField
                            aria-label={'Friends'}
                            name={'Friends'}
                            placeholder={'Friends'}
                            variant={"filled"}
                            fullWidth onChange={(e)=>{setFriendEmail(e.target.value)}}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>
                            Close
                        </Button>
                        <Button onClick={addFriend}>
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};

export default BigNavBar;

//rsc az arrow function
// msn színkód rgb(38,152,211)  vagy #2698D3
