import React from 'react'
import Logout from "../login/Logout"
import Username from "../login/UserName"
<<<<<<< HEAD
import ProjectFrom from "../Projects/ProjectFrom"
import { BiSearchAlt } from "react-icons/bi";
=======
import Dropdown from 'react-bootstrap/Dropdown'

>>>>>>> BoostrapT

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
<<<<<<< HEAD
                <a className="navbar-brand">Project Management System</a>
                <form className="form">
=======
                <a className="navbar-brand">Emiliatorius'3</a>

                {/* <form className="form">
>>>>>>> BoostrapT
                    <div className="row">
                        <input type="text" className="form-control m-2" placeholder="Search projects" />
                        <button className="btn btn-outline-success my-2 my-sm-0 text-center" type="submit">Search <BiSearchAlt /> </button>
                    </div>
                </form> */}


                <Dropdown>
                    <Dropdown.Toggle  >

                        Dropdown Button
  </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item >       <Username />  </Dropdown.Item>
                        <Dropdown.Item > <Logout /></Dropdown.Item>
                        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
                {/* <Username />
                <Logout /> */}
            </nav>
            {/* <div className="row">
                <div className="col">

                </div>
            </div> */}
        </div>
    )
}
