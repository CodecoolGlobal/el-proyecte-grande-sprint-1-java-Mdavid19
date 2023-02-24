import {Form, Formik, useFormik} from "formik";
import axios from "../AxiosInstance";
import '../styles/Registration.css';
import LandingPageLogo from "../component/LandingPageLogo";
import Input from "../component/Input";
import {Button} from "@mui/material";

export function Registration() {
    const url = 'http://localhost:8080/register';
    const buttonStyle = {
        margin: '30px 0'
    }
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const fetchSendUser = async (url, body, config) => {
        try {
            await axios.post(url, body, config)
        } catch (error) {
            console.warn('Some error', error)
        }
    }

    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            userId: '',
            statusMessage: '',
        },
        onSubmit: async (values, actions) => {
            const dataJson = JSON.stringify(values)
            await fetchSendUser(url, dataJson, config)
            actions.resetForm()
            alert("Registration complete")
        }
    });

    return (
        <div className={'proba'}>
            <LandingPageLogo style={"position:fixed"}/>
            <Formik initialValues={formik.initialValues} onSubmit={formik.handleSubmit}>
                <Form className="form_container">
                    <h1>Registration</h1>
                    <Input
                        placeholderText="User Name"
                        name="userName"
                        type="text"
                        value={formik.values.userName}
                        onChange={formik.handleChange}/>
                    <Input
                        placeholderText="E-mail"
                        name="email"
                        type="text"
                        value={formik.values.email}
                        onChange={formik.handleChange}/>
                    <Input
                        placeholderText="Password"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}/>
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        style={buttonStyle}>
                        Submit</Button>
                </Form>
            </Formik>
        </div>
    )
}