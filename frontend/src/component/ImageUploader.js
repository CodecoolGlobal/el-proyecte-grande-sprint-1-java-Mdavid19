import React, {useState} from "react";
import axios from "../AxiosInstance";
import Cookies from "js-cookie";
import {useUser} from "../context/userProvider";

export default function ImageUploader({pictureText}) {

    const {user} = useUser()
    const [file, setFile] = useState();
    const token = Cookies.get('token')

    function handleChange(e) {
        setFile(e.target.files[0]);
    }

    function makeFormData() {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('pictureType', pictureText)
        formData.append('userId', user.id)
        return formData
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = '/chat-user-profile/upload';

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            },
        };
        axios.post(url, makeFormData(), config).then((response) => {
            console.log(response);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange}/>
                <button type="submit">Upload {pictureText} picture</button>
            </form>
        </div>
    );
}

