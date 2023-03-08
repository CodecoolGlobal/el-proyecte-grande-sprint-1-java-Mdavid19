import React, {useState} from "react";
import {Button, createTheme, TextField, ThemeProvider} from "@mui/material";
import '../styles/UserPage.css'
import SaveIcon from '@mui/icons-material/Save';


function SetUserInfo({labelForTextArea}) {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#212121',
            },
        },
    });

    const [content, setContent] = useState("");

    const handleChange = (e) => {
        debugger
        console.log(e)
    }

    return (<div>
            <ThemeProvider theme={theme}>
                <TextField id="outlined-basic" label={labelForTextArea} variant="outlined" color='primary'/>
                <br/>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{margin: '7px'}}
                    startIcon={<SaveIcon sx={{color: 'blue'}}/>}
                    onClick={handleChange}
                >
                    Save
                </Button>
            </ThemeProvider>
            </div>)
}

export default SetUserInfo;