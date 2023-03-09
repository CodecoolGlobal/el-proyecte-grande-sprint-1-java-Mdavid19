import {useEffect, useState} from "react";
import axios from "axios";

export default function HeaderForUserName() {

    const url = '/chat-user-profile'

    const [userName, setUserName] = useState("")

    const getUserName = async () => {
       try {
           const response = await axios.get(url)
           setUserName(response.data)
       } catch (error) {
           console.log(error)
       }
    }

    useEffect(() => {
        getUserName()
    }, [])

    return (
        <div className="user-name">
            <h1>{userName}</h1>
        </div>
    )
}