import React, { useState } from 'react'
import DeleteProject from "./DeleteProjects"
import swal from 'sweetalert';
import { FaTrash } from "react-icons/fa";
import EditProject from './EditProject';
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
                    swal("Poof! Your project has been deleted!", {
                        icon: "success",
                    });
                    setTimeout(() => window.location.reload(), 1500);
                }
                else {
                    swal("Your project is safe!");
                }
            });
    }

   
    return (
        <div className="card text-center h-100">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <EditProject id={id} name={name} description={description} />
                <button onClick={() => getDeleteAlert()} className="btn btn-outline-danger my-2 my-sm-0 m-2" type="submit">Delete <FaTrash />  </button>
            </div>
        </div>
    )
}
