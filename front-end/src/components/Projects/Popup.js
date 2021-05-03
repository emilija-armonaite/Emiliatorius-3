import React, { useState } from 'react';
import axios from "axios";





export default function Popup() {

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
        <form onSubmit={submitProject}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control m-2" placeholder="Enter email" />
            
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="text" onChange={(e) => setDesc(e.target.value)} className="form-control m-2" placeholder="Enter email" />
          </div>
          <button type="submit" onClick={submitProject}  class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
