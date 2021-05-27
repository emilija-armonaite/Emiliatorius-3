import React from 'react'
import { useHistory } from "react-router-dom";

export default function Logout() {
    const history = useHistory();
    const logout = () => {
        localStorage.clear();
        history.push("/")
    }
    return (
        <div>
            <p onClick={logout} className="text-center">LOG OUT <i className="material-icons">exit_to_app</i></p>
        </div>
    )
}
