import React, {useState} from 'react';
import {Box, Button, InputAdornment, TextField} from "@mui/material";
import BasicFriendList from "./BasicFriendList";
import {useUser} from "../context/userProvider";

const PageContent = () => {
    const [content, setContent] = useState("");
    const {user} = useUser();



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
                            <Button  variant="contained">Send</Button>
                        </InputAdornment>
                    ),
                }} sx={{backgroundColor: '#FFFFFF'}} id="fullWidth"
                           onChange={(e)=>{setContent(e.target.value)}}
                           value={content}/>
            </div>
        </div>
    );
};

export default PageContent;
