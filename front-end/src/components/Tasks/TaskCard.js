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


    const getStatusText = (statusBack) => {

        switch (statusBack) {
            case "TO_DO":
                return "TO DO";


            default:
                return "status error";
        }

    }


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
            <div className="card text-left" style={{ backgroundColor: "#faf3f3", borderRadius: "15px" }}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted">{userStory}</p>
                    <p className="card-text">{priority}</p>
                    <p className="card-text">{getStatusText(status)}</p>
                    <div className="buttons" style={{ display: "flex", float: "right" }}>
                        <EditTask id={id} name={name} userStory={userStory} priority={priority} />
                        <button onClick={() => getDeleteAlert()} className="btn btn-outline-danger btn-sm my-2 my-sm-0 m-2" type="submit"><FaTrash /></button>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-dark btn-sm" id="dropdown-basic">More</Dropdown.Toggle>
                            <Dropdown.Menu style={{ backgroundColor: "#faf3f3"}}>
                                {/* <Dropdown.Item> */}
                                <Card style={{ width: '18rem', backgroundColor: "#faf3f3" }}>

                                    <ListGroup.Item style={{ backgroundColor: "#faf3f3"}}>Creation Date: {creationDate}</ListGroup.Item>
                                    <ListGroup.Item style={{ backgroundColor: "#faf3f3"}}>Update Date: {updateDate} </ListGroup.Item>
                                    <ListGroup.Item style={{ backgroundColor: "#faf3f3"}}>Task ID: {id}</ListGroup.Item>

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
