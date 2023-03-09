import React, {useState} from "react";
import axios from "../AxiosInstance";

export default function ImageUploader({pictureText}) {
    const [file, setFile] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('file', file)

        try {
            await axios.post('/upload', formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange}/>
            <button type="submit">Upload {pictureText} picture
            </button>
            <label className="custom-file-upload">
            </label>
        </form>
    )
}

