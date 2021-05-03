import React, { useState } from 'react';
import Popup from './Popup';
import swal from 'sweetalert';
function PrjectFrom() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <>
      
    <input
    className="btn btn-outline-danger my-2 my-sm-0 m-2"
      type="button"
      value="Create "
      onClick={togglePopup}
    />
  
    
    {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscin</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
  </>
}

export default PrjectFrom;