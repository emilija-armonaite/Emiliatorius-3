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


  
//   return <>
      
      
//     <input
//     className="btn btn-outline-danger my-2 my-sm-0 m-2"
//       type="button"
//       value="Create"
//       onClick={togglePopup}
//     />
  
    
//     {isOpen && <Popup
//       content={<>
//         <b>Design your Popup</b>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscin</p>
//         <button>Test button</button>
//       </>}
//       handleClose={togglePopup}
//     />}
//   </>
// }

export default PrjectFrom;