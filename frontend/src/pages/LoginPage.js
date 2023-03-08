
import {Button, FormControl} from "@mui/material";
import LandingPageLogo from "../component/LandingPageLogo";
import Input from "../component/Input";


const LoginPage = () => {

    return (
        <div className={['center', 'proba'].join(" ")}>
            <LandingPageLogo style={"position:fixed"}/>
            <h1>Login</h1>
            <FormControl>
                <Input header={"E-mail"} placeholderText={"E-mail"} />
                <Input header={"Password"} placeholderText={"Password"} inputType={"password"}/>
                <br/>
                <Button variant="contained" size="large" type="submit">Login</Button>
            </FormControl>
        </div>
    );
};

export default LoginPage;