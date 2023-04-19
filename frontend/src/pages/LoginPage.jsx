import LandingPageLogo from "../component/LandingPageLogo";
import {Button, FormControl, TextField} from "@mui/material";
import {useUser} from "../context/userProvider";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginPage =()=> {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const data = {
        "email": email,
        "password": password
    }

    const{login,user} = useUser();
    const navigate = useNavigate();


    function handleLogin(){
        login(data)
    }

    useEffect(()=>{
        if(user){
            navigate('/main')
        }
    },[user])

    return(
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
                    onClick={handleLogin}>Login</Button>
            </FormControl>
        </div>
    );
}
export default LoginPage
