import React, { useState} from 'react';
import {Box, Button, InputAdornment, TextField} from "@mui/material";
import BasicFriendList from "./BasicFriendList";
import {useUser} from "../context/userProvider";
import {over} from "stompjs"
import SockJS from "sockjs-client"

let stompClient = null

const PageContent = ({friends}) => {
    const [privateChat, setPrivateChat] = useState(new Map());
    const [tab, setTab] = useState(null);
    const [friendName, setFriendName] = useState("");
    const [sockets, setSockets] = useState([]);
    // Init userContextProvider
    const {user} = useUser();
    const [messageData, setMessageData] = useState({
        userId:user.id,                                             //Maybe it won't work
        receiverId:"",
        connected:false,
        message:""
    });

    const connect = () => {
        sockets.forEach((s) => {
            s.close()
        })
        let Sock = new SockJS("/ws")
        stompClient = over(Sock);
        stompClient.connect({},onConnected,onError)
        sockets.push(Sock)
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
            let chatMessage = {
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
    },[tab])


        return (
        <div className={'main-content'}>
            <div className={'friends-list'}>
                <BasicFriendList friends={friends} setTab={setTab} setFriendName={setFriendName}/>
            </div>
            <div className={'chat-panel'}>
                <div className={'message-panel'}>
                    {privateChat.get(tab) !== undefined ?
                    <div className="chat-messages">
                        {[...privateChat.get(tab)].map((chat,index)=>(
                        <div className={chat.senderId === user.id ? "sender" : "receiver"} key={index} >
                            
                            {
                                chat.senderId === user.id ? <div><p>{user.chatUserName}</p><p className="message-data">{chat.message}</p></div> : <div><p>{friendName}</p><p className="message-data">{chat.message}</p></div>
                            }
                        </div>
                    ))}
                    </div>: <div></div>}
                </div>
                <div className="sending-panel">
                <TextField fullWidth InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button  variant="contained" onClick={sendPrivateValue}>Send</Button>
                        </InputAdornment>
                    ),
                }} sx={{backgroundColor: '#FFFFFF'}} id="fullWidth"
                           onChange={handleMessage} value={messageData.message}
                           />
                </div>
            </div>
        </div>
    );
};

export default PageContent;
