import React, { useState } from 'react';
import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";



export default function Popup(props) {

  const API_URL = 'http://localhost:8081';
  const nameIsEmpty = "inline";
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const user = JSON.parse(localStorage.getItem("token"));


  const handleClickOpen = () => {
    setOpen(true);


  };
  const handleClose = () => {
    setOpen(false);
    removeText();
  };
  const removeText = () => {
    setName("");
    setDesc("");

  }




  const writeName = e => {
    setName(e.target.value);

  }

  const writeDesc = e => {
    // console.log(`Typed => ${e.target.value}`);
    setDesc(e.target.value);
  }

  const submitB = () => {
    console.log({ name });
    console.log({ description });
    setOpen(false);

    //window.location.reload(true);
  }

  const submitProject = (e) => {
    e.preventDefault();
    return axios.post(API_URL + "/api/projects", {
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
        }
      );
  }
  return (



    <div>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create project
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitProject}>
            <div class="form-group">
              <label for="exampleInputEmail1">Project name</label>
              <input type="text" onChange={(e) => setName(e.target.value)} className="form-control m-2" placeholder="Project name" />

            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">About project</label>
              <input type="text" onChange={(e) => setDesc(e.target.value)} className="form-control m-2" placeholder="Project is..." />
            </div>
        
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <button type="submit" onClick={submitProject} class="btn btn-primary">Submit</button>
        </Modal.Footer>
      </Modal>



    </div>
  );
}
