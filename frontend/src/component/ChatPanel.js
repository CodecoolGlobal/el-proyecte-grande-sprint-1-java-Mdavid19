import React, {useState} from 'react';
import {Box, Button, InputAdornment, TextField, Typography} from "@mui/material";
import axios from "axios";


const ChatPanel = () => {
    const [content, setContent] = useState("")


    const sendDataToBackendApi = (url,body,config) =>{
        try{
            axios.post(url,body,config)
        }catch (error){
            console.warn('Error in fetching',error)
        }
    }

    const configForAxios = {
        headers:{'Content-Type':'application/json'}
    }

    const messageData = {
        content : content,
        senderId: "1",   // Have to change later the ID-s
        receiverId: "2"
    }

    const sendMessage = () =>{
        sendDataToBackendApi('/api/message',messageData,configForAxios)
        setContent("")
    }

    async function getAllMessageFromBackend(){
        let response = await fetch("/api/message", {
            method:'GET'
        })
        let data = await response.json();
        return data
    }

    setTimeout(displayMessages,1000)

    async function displayMessages() {
        let messages = await getAllMessageFromBackend();
        let box = document.getElementById("chatBox");
        if (box.children.length < messages.length) {
            for (let i = box.children.length; i <= messages.length; i++) {
                let p = document.createElement("p")
                p.innerText = messages[i].content
                box.appendChild(p)
            }
        }
    }

    return (
        <div className={'chat-panel'}>
            <Box id="chatBox" sx={{width: '100%', height: '90%', backgroundColor: 'primary.dark'}}/>

            <TextField fullWidth InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Button onClick={sendMessage} variant="contained">Send</Button>
                    </InputAdornment>
                ),
            }} sx={{backgroundColor: '#FFFFFF'}} id="fullWidth"
            onChange={(e)=>{setContent(e.target.value)}}
            value={content}/>
        </div>
    );
};

export default ChatPanel;
