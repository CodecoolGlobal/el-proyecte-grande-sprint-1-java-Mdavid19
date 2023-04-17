import {createContext, useState} from "react";
import Cookies from "js-cookie"

const userContext = createContext({})
const getToken = () => Cookies.get('token')
const setToken = (token) => Cookies.set('token', token, {expires: 1, path: '/'})

const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(null)

    const getMe = useCallback((token) => {
        fetch("/api/get-me", {
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
            .then((user) => {
                setUsername(user)
            })
            .finally(() => {setLoading(false)})
        }, []

    );
    console.log()

}