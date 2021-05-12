import React, { useState } from 'react'
import axios from "axios";
import swal from 'sweetalert';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiEdit2Line } from "react-icons/ri";


export default function EditTask(id) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const maxSymbolsName = 50;
    const maxSymbolsStory = 250;
    const API_URL = 'http://localhost:8081';
    const [name, setName] = useState(id.name);
    const [userStory, setUserStory] = useState(id.userStory);
    const [priority, setPriority] = useState(id.priority);
    const user = JSON.parse(localStorage.getItem("token"));


    const submitProject = (e) => {
        e.preventDefault();
        console.log(id);
        return axios.put(API_URL + "/api/tasks/" + id.id, {
            name,
            priority,
            userStory
        },
            {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            }
        ).then((response) => {
            window.location.reload(true);
            return response;
        },
            (error) => {
                swal({
                    text: "No task name!",
                    icon: "warning",
                    button: "Try again",
                });
            }
        );
    }

    return (
        <div>
            <Button variant="outline-info" onClick={handleShow} className="my-2 my-sm-0 btn-sm" type="submit">
                <RiEdit2Line />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={submitProject}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">task name</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control m-2" placeholder="Task name" defaultValue={id.name} maxlength={maxSymbolsName} />
                            <text className="text-muted float-right"> {name.length} / {maxSymbolsName}</text>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">User story</label>
                            <input type="text" onChange={(e) => setUserStory(e.target.value)} className="form-control m-2" placeholder="User story" defaultValue={id.userStory} maxLength={maxSymbolsStory} />
                            <text className="text-muted float-right"> {userStory.length} / {maxSymbolsStory}</text>
                        </div>
                        <div class="form-group">
                            <label for="priority">priority</label>
                            <select onChange={(e) => setPriority(e.target.value)} defaultValue={id.priority} class="custom-select" >
                                <option value="LOW">Low</option>
                                <option selected value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                            </select>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={submitProject}>
                        Save changes
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}