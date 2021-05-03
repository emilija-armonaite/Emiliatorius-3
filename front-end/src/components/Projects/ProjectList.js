import React from 'react'
import DeleteProject from "./DeleteProjects"
import swal from 'sweetalert';

export default function ProjectList({ id, name, description }) {

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
                } else {
                    swal("Your project is safe!");
                }
            });
    }

    return (
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <button className="btn btn-outline-dark my-2 my-sm-0 m-2" type="submit">Update <i class="material-icons">system_update</i></button>
                <button onClick={() => getDeleteAlert()} className="btn btn-outline-danger my-2 my-sm-0 m-2" type="submit"> <i class="material-icons">delete_forever</i>
                </button>
            </div>
        </div>
    )
}
