import React from 'react'
import Logout from "../login/Logout"
import Username from "../login/UserName"
import { FaUserAstronaut } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown'
import { ReactComponent as Logo } from './../images/logo_emp.svg';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light justify-content-between" style={{ backgroundColor: "#e1e5ea" }}>
                <Logo style={{ height: "70px", marginLeft: "15px" }} />
                <Dropdown>
                    <Dropdown.Toggle variant="info mr-2">
                        <FaUserAstronaut />
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: "#faf3f3" }}>
                        <Dropdown.Item> <Username /> </Dropdown.Item>
                        <Dropdown.Item> <Logout /> </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
        </div>
    )
}
