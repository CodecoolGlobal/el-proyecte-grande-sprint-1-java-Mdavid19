import React from 'react';
import {Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Brightness1RoundedIcon  from '@mui/icons-material/Brightness1Rounded';
import {useUser} from "../context/userProvider";


const BasicFriendList = ({friends, setTab}) => {

    const {user} = useUser();
    const showFriends = (data) => {
        let friendsElement = []
        for (let friend of data) {
            friendsElement.push(
            <ListItem disablePadding key={friend.id}>
                <ListItemButton onClick={()=>setTab(friend.id)}>
                    <ListItemText primary={friend.name} className={'friends-list-text'}/>
                    <ListItemIcon>
                        <Brightness1RoundedIcon sx={{ color:'#06FD00'}}/>
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
            )
        }
        return friendsElement
    }

    return (
        <Box sx={{ width: '100%' }}>
            <nav aria-label="Friend List">
                <List>
                    {
                        showFriends(friends)
                    }
                    <Divider/>
                </List>
            </nav>
        </Box>
    );
};

export default BasicFriendList;
