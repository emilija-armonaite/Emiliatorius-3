import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Popup from './Popup';
import { BiMessageAdd } from "react-icons/bi";
import { IoAddOutline } from "react-icons/io5";

export default function AddProject() {


    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }


    const [modalShow, setModalShow] = React.useState(false);


    return (


        <div className="card text-center h-100" onClick={() => setModalShow(true)} style={{ cursor: "pointer" }}>
            <div className="card-body">


                <IoAddOutline style={{ fontSize: 100 }} />
                <p>Create new project</p>
                <Popup
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />


            </div>
        </div>


    )
}
