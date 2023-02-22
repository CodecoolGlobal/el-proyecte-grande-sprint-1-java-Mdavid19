import {useState} from "react";

export function Registration() {
    const [users, setUsers] = useState([])

    const url = 'http://localhost:8080/register';

    const fetchUsers = async () => {
        const response = await fetch(url);
        return await response.json();
    }

    return (
        <div></div>
    )
}