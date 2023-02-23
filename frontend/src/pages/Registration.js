import {Field, Form, Formik, useFormik} from "formik";
import axios from "../AxiosInstance";
import '../styles/Registration.css';
import LandingPageLogo from "../component/LandingPageLogo";
import SimpleCustomButton from "../component/SimpleCustomButton";

export function Registration() {
    const url = 'http://localhost:8080/register';

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
                    <label id='userName'>User Name: </label>
                    <Field name="userName" type="text" value={formik.values.userName} onChange={formik.handleChange}/>
                    <label id='email'>Email: </label>
                    <Field name="email" type="email" value={formik.values.email} onChange={formik.handleChange}/>
                    <label id='password'>Password: </label>
                    <Field name="password" type="password" value={formik.values.password}
                           onChange={formik.handleChange}/>
                    <SimpleCustomButton type={"submit"} text={"Submit"}>Submit</SimpleCustomButton>
                </Form>
            </Formik>
        </div>
    )
}