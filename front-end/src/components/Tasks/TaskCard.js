import React from 'react'
import { RiEdit2Line } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import DeleteTask from './DeleteTask';
import swal from 'sweetalert';
import EditTask from './EditTask'

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
            <div className="card text-center h-100">
                <div className="card-body">
                    <p className="card-text">{id}</p>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{userStory}</p>
                    <p className="card-text">{priority}</p>
                    <p className="card-text">{status}</p>
                    <p className="card-text">{creationDate}</p>
                    <p className="card-text">{updateDate}</p>
                    <EditTask id={id} name={name} userStory={userStory} priority={priority} />
                    <button onClick={() => getDeleteAlert()} className="btn btn-outline-danger btn-sm my-2 my-sm-0 m-2" type="submit">Delete <FaTrash /></button>
                </div>
            </div>
        </div>
    )
}
