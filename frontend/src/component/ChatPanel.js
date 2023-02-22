import React from 'react';
import {Box, Button, InputAdornment, TextField} from "@mui/material";



const ChatPanel = () => {
    return (
        <div className={'chat-panel'}>
            <Box sx={{width:'100%',height:'90%',  backgroundColor:'primary.dark'}}/>
            <TextField fullWidth InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Button variant="contained">Send</Button>
                    </InputAdornment>
                ),
            }} sx={{backgroundColor: '#FFFFFF'}} id="fullWidth" />
        </div>
    );
};

export default ChatPanel;
