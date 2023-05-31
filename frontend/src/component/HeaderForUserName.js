import {useUser} from "../context/userProvider";

export default function HeaderForUserName() {
    const {user} = useUser()

    return (
        <div className="user-name">
            <h1>{user.chatUserName}</h1>
        </div>
    )
}
