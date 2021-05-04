// import React, { useState } from 'react';
// import axios from "axios";
// import swal from 'sweetalert';
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";



// export default function Popup(props) {

//   const API_URL = 'http://localhost:8081';
//   const nameIsEmpty = "inline";
//   const [open, setOpen] = React.useState(props.show);
//   const [name, setName] = useState("");
//   const [description, setDesc] = useState("");
//   const user = JSON.parse(localStorage.getItem("token"));


//   const removeText = () => {
//     setName("");
//     setDesc("");

//   }
//   const restart =() =>{
//     {window.location.reload(true)}
//   }
//   const submitProject = (e) => {
//     e.preventDefault();
//     return axios.put(API_URL + "/api/projects/" + props.id.id, {
//       description,
//       name
//     },
//       {
//         headers: {

//           'Authorization': 'Bearer ' + user.token
//         }
//       }
//     )
//       .then((response) => {
        
//         // window.location.reload(true);
//         return response;
//       },
//         (error) => {
         
//           swal({
//             text: "No project name or description!",
//             icon: "warning",
//             button: "Try again",
//           });
//         }
//       );
//   }
//   return (
//     <div>
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Update project
//         </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={submitProject}>
//             <div class="form-group">
//               <label for="exampleInputEmail1">Project name</label>
//               <input type="text" onChange={(e) => setName(e.target.value)} className="form-control m-2" placeholder="Project name" />

//             </div>
//             <div class="form-group">
//               <label for="exampleInputPassword1">About project</label>
//               <input type="text" onChange={(e) => setDesc(e.target.value)} className="form-control m-2" placeholder="Project is..." />
//             </div>

//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="outline-dark" onClick={restart}>Close</Button>
//           <button type="submit" onClick={submitProject} class="btn btn-outline-info">Submit</button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
