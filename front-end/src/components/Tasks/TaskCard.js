import React from 'react'
import { RiEdit2Line } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import DeleteTask from './DeleteTask';
import swal from 'sweetalert';
import EditTask from './EditTask'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup"
export default function TaskCard({ id, name, userStory, priority, status, creationDate, updateDate }) {

    const getDeleteAlert = () => {
        window.onpopstate = e => {
            e.preventDefault();
            window.history.forward();
            swal.close();
            console.log("you clicked back button");
        }
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this task!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    DeleteTask({ id });
                    swal("Poof! Your task has been deleted!", {
                        icon: "success",
                    });
                    setTimeout(() => window.location.reload(), 1500);
                }
                else {
                    swal("Your task is safe!");
                    window.onpopstate = e => {
                        e.stopPropagation();
                    }
                }
            });
    }

    return (
        <div>
            <div className="card text-left h-100">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted">{userStory}</p>
                    <p className="card-text">{priority}</p>
                    <div className="buttons m-3" style={{ display: "flex", float: "right" }}>
                        <EditTask id={id} name={name} userStory={userStory} priority={priority} />
                        <button onClick={() => getDeleteAlert()} className="btn btn-outline-danger btn-sm my-2 my-sm-0 m-2" type="submit"><FaTrash /></button>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-dark btn-sm" id="dropdown-basic">More</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {/* <Dropdown.Item> */}
                                <Card style={{ width: '18rem' }}>

                                    <ListGroup.Item>Creation Date {creationDate}</ListGroup.Item>
                                    <ListGroup.Item>Update Date {updateDate} </ListGroup.Item>
                                    <ListGroup.Item>Task ID {id}</ListGroup.Item>

                                </Card>
                                {/* </Dropdown.Item> */}
                                {/* <Dropdown.Item href="#/action-2">
                                    <EditTask id={id} name={name} userStory={userStory} priority={priority} />
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    <button onClick={() => getDeleteAlert()} className="btn btn-outline-danger btn-sm my-2 my-sm-0 m-2" type="submit">Delete <FaTrash /></button>
                                </Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div >
    )
}
