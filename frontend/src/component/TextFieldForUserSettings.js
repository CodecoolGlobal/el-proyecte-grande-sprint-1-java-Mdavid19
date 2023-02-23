import React from "react";
import {Button, createTheme, TextField, ThemeProvider} from "@mui/material";
import SaveIcon from '@material-ui/icons/Save';
import '../styles/UserPage.css'

function SetUserInfo({labelForTextArea}) {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#212121',
            },
        },
    });

    return (<div>
            <ThemeProvider theme={theme}>
                <TextField id="outlined-basic" label={labelForTextArea} variant="outlined" color='primary'/>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </ThemeProvider>
            </div>)
}

export default SetUserInfo;