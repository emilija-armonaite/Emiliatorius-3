import React from 'react'
import Logout from "../login/Logout"
import Username from "../login/UserName"
import ProjectFrom from "../Projects/ProjectFrom"
import { BiSearchAlt } from "react-icons/bi";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Project Management System</a>
                <form className="form">
                    <div className="row">
                        <input type="text" className="form-control m-2" placeholder="Search projects" />
                        <button className="btn btn-outline-success my-2 my-sm-0 text-center" type="submit">Search <BiSearchAlt /> </button>
                    </div>
                </form>
                <Username />
                <Logout />
            </nav>
            {/* <div className="row">
                <div className="col">
                    <ProjectFrom />
                </div>
            </div> */}
        </div>
    )
}
