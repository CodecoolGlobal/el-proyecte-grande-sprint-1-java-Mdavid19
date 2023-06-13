import React, {useState} from 'react';
import {Box, Button, InputAdornment, TextField} from "@mui/material";
import BasicFriendList from "./BasicFriendList";
import {useUser} from "../context/userProvider";
import {over} from "stompjs"
import SockJS from "sockjs-client"

var stompClient = null

const PageContent = ({friends}) => {
    const [privateChat, setPrivateChat] = useState(new Map());
    const [tab, setTab] = useState(null);
    // Init userContextProvider
    const {user} = useUser();
    const [messageData, setMessageData] = useState({
        userId:user.id,                                             //Maybe it won't work
        receiverId:"",
        connected:false,
        message:""
    });



    const connect = () => {
        let Sock = new SockJS("/ws")
        stompClient = over(Sock);
        stompClient.connect({},onConnected,onError)
    }

    const onConnected = ()=>{
        setMessageData({...messageData, "connected":true})
        stompClient.subscribe('/user/' + messageData.userId + '/private', onPrivateMessageReceived);
    }

    const onPrivateMessageReceived = (payload)=>{
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
        setMessageData({...messageData,"message":event.target.value})

    }

    const sendPrivateValue = ()=>{
        if(stompClient){
            var chatMessage = {
                senderId:messageData.userId,
                receiverId: tab,
                message: messageData.message,
            };
        if(messageData.userId !== tab){
            if(!privateChat.get(tab)){
                let messages = []
                messages.push(chatMessage)
                privateChat.set(tab,messages)
                setPrivateChat(new Map(privateChat));

            }else{
                let messages = privateChat.get(tab)
                    messages.push(chatMessage)
                privateChat.set(tab,messages)
                setPrivateChat(new Map(privateChat));
            }

            }
        stompClient.send("/app/private-message",{}, JSON.stringify(chatMessage));
        setMessageData({...messageData, "message":""});
        }
    }

    React.useEffect(()=>{
        connect();
        console.log(tab);
        showMessages();
    },[tab])

    const showMessages = () => {
        console.log(privateChat.get(tab))
        return privateChat.get(tab) !== undefined ? (
        <ul className="chat-messages">
            ({[...privateChat.get(tab)].map((chat,index)=>(
            <li  key={index}>
                <div className="message-data">{chat.message}</div>
            </li>
        ))})
    </ul>): <div></div>
    }


        return (
        <div className={'main-content'}>
            <div className={'friends-list'}>
                <BasicFriendList friends={friends} setTab={setTab}/>
            </div>
            <div className={'chat-panel'}>
                <div className={'message-panel'}>
                    {privateChat.get(tab) !== undefined ?
                    <ul className="chat-messages">
                        {[...privateChat.get(tab)].map((chat,index)=>(
                        <li  key={index}>
                            <div className="message-data">{chat.message}</div>
                        </li>
                    ))}
                    </ul>: <div></div>}
                </div>
                <div className="sending-panel">
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
        </div>
    );
};

export default PageContent;
