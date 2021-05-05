import React from 'react'
import Logout from "../login/Logout"
import Username from "../login/UserName"
import { FaUserAstronaut } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown'



export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Emiliatorius'3</a>

                <Dropdown>
                    <Dropdown.Toggle variant="outline-info">
                        <FaUserAstronaut />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item> <Username /> </Dropdown.Item>
                        <Dropdown.Item> <Logout /> </Dropdown.Item>
                        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
        </div>
    )
}
