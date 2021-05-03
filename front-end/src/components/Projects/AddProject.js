import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Popup from './Popup';
import { BiMessageAdd } from "react-icons/bi";

export default function AddProject() {


    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }


    const [modalShow, setModalShow] = React.useState(false);


    return (
       

            <div className="card mt-3 h-100" onClick={() => setModalShow(true)} style={{cursor:"pointer"}}>
                <div className="card-body">

                    {/* <Button variant="primary"
                        onClick={() => setModalShow(true)}
                    >

                        New Project
               </Button> */}
               <BiMessageAdd />
                    <Popup
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />


                </div>
            </div>


    )
}
