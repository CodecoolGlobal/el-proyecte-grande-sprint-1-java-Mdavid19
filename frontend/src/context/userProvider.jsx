import {createContext, useCallback, useContext, useEffect, useState} from "react";
import Cookies from "js-cookie"

const UserContext = createContext({})
const getToken = () => Cookies.get('token')
const setToken = (token) => Cookies.set('token', token, {path: '/'})
const clearToken = () => Cookies.remove('token',{path:'/'})

const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    const getMe = (token) => {
         fetch("/api/get-me", {
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
            .then((user) =>
                user.json()
            )
             .then((user) =>{
                 setUser(user)
         })
            .finally(() => {setLoading(false)})
        };

    useEffect(()=>{
        const token = getToken();

        if(!token){
            setLoading(false)
            return;
        }

        getMe(token)
    }, [])

    const login = (creds) => {
        fetch("/login",{
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(creds)
        })
            .then(res => res.json())
            .then(res => {
                const { token } = res;
                if(token){
                    setToken(token);
                    getMe(token);

                }
            })
    };

    const logout = () => {
        setUser(null);
        clearToken();

    }
    return (
        <UserContext.Provider value={{user, login, logout}}>
            {!loading && children}
        </UserContext.Provider>

        )

};

export const useUser = () => useContext(UserContext);
export default UserProvider;
