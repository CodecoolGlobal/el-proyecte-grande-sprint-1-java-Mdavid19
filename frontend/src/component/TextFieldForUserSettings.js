import React, {useState} from "react";
import {Button, createTheme, TextField, ThemeProvider} from "@mui/material";
import '../styles/UserPage.css'
import SaveIcon from '@mui/icons-material/Save';
import axios from "../AxiosInstance";


function SetUserInfo({labelForTextArea}) {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#212121',
            },
        },
    });

    const url = "/user-profile"

    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const [content, setContent] = useState("");

    const handleChange = () => {
        const data = JSON.stringify(content)
        fetchSendUser(url, data, config)
    }

    const fetchSendUser = (url, body, config) => {
        try {
            axios.post(url, body, config)
        } catch (error) {
            console.warn('Some error', error)
        }
    }

    return (<div>
            <ThemeProvider theme={theme}>
                <TextField id="outlined-basic" label={labelForTextArea} variant="outlined" color='primary' onChange={(e)=> {setContent(e.target.value)}}/>
                <br/>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{margin: '7px'}}
                    startIcon={<SaveIcon sx={{color: 'blue'}}/>}
                    type="submit"
                    onClick={handleChange}
                >
                    Save
                </Button>
            </ThemeProvider>
            </div>)
}

export default SetUserInfo;