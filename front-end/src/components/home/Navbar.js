import React from 'react'
import Logout from "../login/Logout"
import Username from "../login/UserName"
import Dropdown from 'react-bootstrap/Dropdown'
// import { IconName } from "react-icons/bs";


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Emiliatorius'3</a>

                {/* <form className="form">
                    <div className="row">
                        <input type="email" className="form-control m-2" placeholder="Enter email" />
                        <button className="btn btn-outline-success my-2 my-sm-0 text-center" type="submit">Search<i class="material-icons">search</i></button>
                    </div>
                </form> */}


                <Dropdown>
                    <Dropdown.Toggle  >

                      cia turi buti icona
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
            <div className="row">
                <div className="col">

                </div>
            </div>
        </div>
    )
}
