
import React, { useState } from 'react'

import axios from "axios";
import swal from 'sweetalert';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";


export default function EditProject(id) {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log(id);
  }




  const API_URL = 'http://localhost:8081';
  const nameIsEmpty = "inline";
  // const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("fdf");
  const [description, setDesc] = useState("");
  const user = JSON.parse(localStorage.getItem("token"));


  const removeText = () => {
    setName("");
    setDesc("");

  }



  const restart = () => {
    { window.location.reload(true) }
  }


  const submitProject = (e) => {
    e.preventDefault();
    // console.log(id);
    return axios.put(API_URL + `/api/projects/${id}`, {
      description,
      name
    },
      {
        headers: {

          'Authorization': 'Bearer ' + user.token
        }
      }
    )
      .then((response) => {

        window.location.reload(true);
        return response;

      },
        (error) => {
          console.log("wrong");
          swal({
            text: "No project name or description!",
            icon: "warning",
            button: "Try again",
          });
        }
      );
  }

  return (
    <div>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={submitProject}>
            <div class="form-group">
              <label for="exampleInputEmail1">Project name</label>
              <input type="text" onChange={(e) => setName(e.target.value)} className="form-control m-2" placeholder="Project name" defaultValue={id.name} />

            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">About project</label>
              <input type="text" onChange={(e) => setDesc(e.target.value)} className="form-control m-2" placeholder="Project is..." defaultValue={id.description} />
            </div>

          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitProject}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



      {/* 
render(<EditProject />); */}

    </div>
  )
}
