import {Button, FormControl, TextField} from "@mui/material";
import LandingPageLogo from "../component/LandingPageLogo";
import {useState} from "react";
import axios from "../AxiosInstance";


const LoginPage = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const url = "/login"
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const data = {
        userEmail: email,
        userPassword: password
    }
    const handleChange = () => {
        sendUserInfoChanges(url, data, config)
    }
    const sendUserInfoChanges = (url, body, config) => {
        try {
            axios.post(url, body, config)
        } catch (error) {
            console.warn('Some error', error)
        }
    }


    return (
        <div className={['center', 'proba'].join(" ")}>
            <LandingPageLogo style={"position:fixed"}/>
            <h1>Login</h1>
            <FormControl>
                <TextField label={"E-mail"} onChange={(event) => {
                    setEmail(event.target.value)
                }}/>
                <br/>
                <TextField label={"Password"} type={"password"} onChange={(event) => {
                    setPassword(event.target.value)
                }}/>
                <br/>
                <Button variant="contained" size="large" type="submit" onClick={handleChange}>Login</Button>
            </FormControl>
        </div>
    );
};

export default LoginPage;