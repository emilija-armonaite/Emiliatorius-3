import React from 'react'
import DeleteProject from "./DeleteProjects"
import swal from 'sweetalert';
import { FaTrash } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";

export default function ProjectList({ projects, id, name, description }) {

    const getDeleteAlert = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this project!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    DeleteProject({ id });
                    window.location.reload(true);
                    swal("Poof! Your project has been deleted!", {
                        icon: "success",
                    });
                }
                else {
                    swal("Your project is safe!");
                }
            });
    }

    return (
        <div>
            <div className="card h-100 mt-3">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Edit <RiEdit2Line /> </button>
                    <button onClick={() => getDeleteAlert()} className="btn btn-outline-danger my-2 my-sm-0 m-2" type="submit">Delete <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    )
}
