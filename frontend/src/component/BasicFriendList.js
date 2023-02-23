import React from 'react';
import {Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Brightness1RoundedIcon  from '@mui/icons-material/Brightness1Rounded';

const BasicFriendList = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <nav aria-label="Friend List">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Tom Holland" className={'friends-list-text'}/>
                            <ListItemIcon>
                                <Brightness1RoundedIcon sx={{ color:'#06FD00'}}/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <Divider/>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#">
                            <ListItemText primary="Dwayne The Rock Johnson"  className={'friends-list-text'}/>
                            <ListItemIcon>
                                <Brightness1RoundedIcon sx={{ color:'red'}}/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <Divider/>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Tom Cruise"  className={'friends-list-text'}/>
                            <ListItemIcon>
                                <Brightness1RoundedIcon sx={{ color:'red'}}/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <Divider/>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list" >
                            <ListItemText primary="Tomi"  className={'friends-list-text'}/>
                            <ListItemIcon>
                                <Brightness1RoundedIcon sx={{ color:'red'}}/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <Divider/>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list" >
                            <ListItemText primary="Nem Jövőbeli Zoty"  className={'friends-list-text'}/>
                            <ListItemIcon>
                                <Brightness1RoundedIcon sx={{ color:'red'}}/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <Divider/>
                </List>
            </nav>
        </Box>
    );
};

export default BasicFriendList;
