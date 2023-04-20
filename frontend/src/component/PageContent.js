import React, {useState} from 'react';
import {Box, Button, InputAdornment, TextField} from "@mui/material";
import BasicFriendList from "./BasicFriendList";
import {useUser} from "../context/userProvider";
import {over} from "stompjs"
import SockJS from "sockjs-client"

var stompClient = null

const PageContent = () => {
    const [privateChat, setPrivateChat] = useState(new Map());
    const [tab, setTab] = useState("");
    // Init userContextProvider
    const {user} = useUser();
    const [messageData, setMessageData] = useState({
        userId:user.id,                                             //Maybe it won't work
        receiverId:"",
        connected:false,
        message:""
    });



    const connect = () => {
        let Sock = new SockJS("http://localhost:3000/ws")
        stompClient = over(Sock);
        stompClient.connect({},onConnected,onError)
    }

    const onConnected = ()=>{
        setMessageData({...messageData, "connected":true})
        stompClient.subscribe('/user/' + messageData.userId + '/private', onPrivateMessageRecieved);
    }

    const onPrivateMessageRecieved = (payload)=>{
        let payloadData = JSON.parse(payload.body);
        if(privateChat.get(payloadData.senderId)){
            privateChat.get(payloadData.senderId).push(payloadData)
            setPrivateChat(new Map(privateChat))
        }else{
            let list = [];
            list.push(payloadData);
            privateChat.set(payloadData.senderId,list)
            setPrivateChat(new Map(privateChat))
        }
    }

    const onError = (err)=>{
        console.log(err)
    }

    const handleMessage = (event)=>{
        setMessageData({...messageData,"message":event.target})
    }

    const sendPrivateValue = ()=>{
        if(stompClient){
            var chatMessage = {
                senderId:messageData.userId,
                receiverId: tab,
                message: messageData.message,
            };
        if(messageData.userId !== tab){
            privateChat.get(tab).push(chatMessage)
            setPrivateChat(new Map(privateChat));

            }
        stompClient.send("/app/private-message",{}, JSON.stringify(chatMessage));
        setMessageData({...messageData, "message":""});
        }
    }



    return (
        <div className={'main-content'}>
            <div className={'friends-list'}>
                <BasicFriendList/>
            </div>
            <div className={'chat-panel'}>
                <Box id="chatBox" sx={{width: '100%', height: '90%', backgroundColor: 'primary.dark'}}/>

                <TextField fullWidth InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button  variant="contained" onClick={sendPrivateValue}>Send</Button>
                        </InputAdornment>
                    ),
                }} sx={{backgroundColor: '#FFFFFF'}} id="fullWidth"
                           onChange={handleMessage}
                           />
            </div>
        </div>
    );
};

export default PageContent;
