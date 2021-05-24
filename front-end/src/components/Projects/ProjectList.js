import React from 'react'
import DeleteProject from "./DeleteProjects"
import swal from 'sweetalert';
import { FaTrash } from "react-icons/fa";
import EditProject from './EditProject';
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProjectList({ projects, id, name, description, status, tasksAmount, tasksLeft }) {


    const getStatusText = (statusBack) => {

        switch (statusBack) {
            case "IN_PROGRESS":
                return "IN PROGRESS";


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
            text: "Once deleted, you will not be able to recover this project!",
            icon: "warning",
            buttons: true,
            dangerMode: true

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
                    window.onpopstate = e => {
                        e.stopPropagation();
                    }
                }
            });

    }


    const [backColor, setBackColor] = React.useState("");
    const styles = {
        borderRadius: "15px",
        backgroundColor: "#faf3f3",
        backgroundColor: backColor
    }

    return (
        <div className="card text-left h-100 flex-fill"
            style={styles}
            onMouseEnter={() => setBackColor("#faf3f3")}
            onMouseLeave={() => setBackColor("")}>
            <Link to={`/projects/${id}/tasks`}
                style={{ textDecoration: "none", color: "black" }}>
                <div className="cardTop d-flex">
                    <div style={{ width: "60px", marginLeft: "10px", marginTop: "10px" }}>
                        <CircularProgressbar
                            value={tasksAmount - tasksLeft}
                            text={`${tasksAmount - tasksLeft}/${tasksAmount}`}
                            maxValue={tasksAmount}
                            styles={buildStyles({
                                // textColor: "red",
                                pathColor: "#39C0ED",
                                // trailColor: "#39C0ED"
                            })} />
                    </div>
                    <div>
                        <p className="card-text mt-4 mx-4">{getStatusText(status)}</p>
                    </div>
                </div>
                <div className="card-body flex-fill">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted">{description}</p>
                </div>
            </Link>
            <div className="buttons mb-3 mr-3 d-flex" style={{ justifyContent: "flex-end" }}>
                <EditProject id={id} name={name} description={description} />
                <button onClick={() => getDeleteAlert()} className="btn btn-outline-danger btn-sm my-2 my-sm-0 m-2" type="submit"><FaTrash />
                </button>
            </div>
        </div>
    )
}
