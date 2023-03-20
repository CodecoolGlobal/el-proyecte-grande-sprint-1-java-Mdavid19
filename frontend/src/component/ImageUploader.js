import React, {useState} from "react";
import axios from "../AxiosInstance";

export default function ImageUploader({pictureText}) {

    const [file, setFile] = useState();

    function handleChange(e) {
        setFile(e.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = '/chat-user-profile/upload';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('pictureType', new Blob([JSON.stringify({
            "pictureType": pictureText
        })], {
            type: "application/json"
        }))
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
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

