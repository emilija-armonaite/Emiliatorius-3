// import React, { useState } from 'react'
// import Button from "react-bootstrap/Button";
// import Popup from './Popup';
// import { BiMessageAdd } from "react-icons/bi";
// import { IoAddOutline } from "react-icons/io5";
// import PopupUpdate from "./PopupUpdate"
// export default function UpdateProject(id) {


//     const [isOpen, setIsOpen] = useState(false);
//     const togglePopup = () => {
//         setIsOpen(!isOpen);
//     }
//     const [modalShow, setModalShow] = React.useState(false);

//     return (
//         <div >
//             <button type="button" onClick={() => setModalShow(true)} className="btn btn-primary m-2 p-2" data-toggle="modal" data-target="#exampleModal" >
//                 Update
//   </button>
//             <PopupUpdate
//                 id={id}
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />
//         </div>
//     )
// }