import {Field, Form, Formik, useFormik} from "formik";
import axios from "../AxiosInstance";

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
        }
    });

    return (
        <div className={"form_container"}>
            <Formik initialValues={formik.initialValues} onSubmit={formik.handleSubmit}>
                <Form>
                    <Field name="userName" type="text" value={formik.values.userName} onChange={formik.handleChange}/>
                    <Field name="email" type="email" value={formik.values.email} onChange={formik.handleChange}/>
                    <Field name="password" type="password" value={formik.values.password}
                           onChange={formik.handleChange}/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}