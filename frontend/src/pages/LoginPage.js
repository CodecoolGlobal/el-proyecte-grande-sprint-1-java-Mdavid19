import {Button, FormControl, TextField} from "@mui/material";
import LandingPageLogo from "../component/LandingPageLogo";
import {useState} from "react";
import axios from "../AxiosInstance";
import {useNavigate} from 'react-router-dom';


const LoginPage = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [state, setState] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

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
        if (state) {
            navigate('/main', {replace: true})
        }
    }
    const sendUserInfoChanges = (url, body, config) => {
        try {
            axios.post(url, body, config).then((response) => {
                const data = response.data
                setState(data)
            })
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
                <Button
                    variant="contained" size="large" type="submit"
                    onClick={handleChange}>Login</Button>
            </FormControl>
        </div>
    );
};

export default LoginPage;