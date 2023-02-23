import React, {useState} from 'react';
import './App.css'
import Input from "./component/Input";
import {Button, FormControl} from "@mui/material";


const LoginPage = () => {
    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);
    function onSubmit() {

    }
    return (
        <div className={'center'}>
            <h1 className={'welcome'}>Login</h1>
            <FormControl onSubmit="">
                <Input header={"E-mail"} placeholderText={"E-mail"} />
                <Input header={"Password"} placeholderText={"Password"} inputType={"password"}/>
                <br/>
                <Button variant="contained" size="large" type="submit">Login</Button>
            </FormControl>
        </div>
    );
};

export default LoginPage;