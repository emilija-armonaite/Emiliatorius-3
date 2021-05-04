import React, { useState } from 'react';
import Popup from './Popup';
import swal from 'sweetalert';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import AddProject from './AddProject';



function PrjectFrom() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
   
      <AddProject/>

      <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


export default PrjectFrom;