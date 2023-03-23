import {Form, Formik, useFormik} from "formik";
import axios from "../AxiosInstance";
import '../styles/Registration.css';
import LandingPageLogo from "../component/LandingPageLogo";
import {Button, TextField} from "@mui/material";

export function Registration() {
    const url = '/register';
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
            chatUserName: '',
            chatUserEmail: '',
            chatUserPassword: '',
            id: '',
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
                    <TextField
                        label="User Name"
                        name="chatUserName"
                        type="text"
                        value={formik.values.chatUserName}
                        onChange={formik.handleChange}/>
                    <br/>
                    <TextField
                        label="E-mail"
                        name="chatUserEmail"
                        type="text"
                        value={formik.values.chatUserEmail}
                        onChange={formik.handleChange}/>
                    <br/>
                    <TextField
                        label="Password"
                        name="chatUserPassword"
                        type="password"
                        value={formik.values.chatUserPassword}
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