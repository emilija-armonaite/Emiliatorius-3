import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from "../home/Navbar"
import TaskCard from './TaskCard';
import AddTask from './AddTask';
import { useHistory } from "react-router-dom";

const Tasks = ({ match }) => {

    const [tasks, setTasks] = useState([]);
    const user = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        fetchTask();
    }, [])

    const fetchTask = async () => {
        await axios(
            `http://localhost:8081/api/projects/${match.params.id}/tasks`, {
            headers: {
                "Authorization": "Bearer " + user.token
            },
        })
            .then(response => {
                console.log(response)
                console.log(match)
                setTasks(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const history = useHistory();
    const backToProjects = () => {
        history.push("/projects");
    }

    return (
        <div>
            <NavBar />
            <button type="submit" onClick={backToProjects} className="btn btn-outline-dark btn-sm ml-3 mt-2">Go back to projects</button>
            <div>
                <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mt-4">
                    <AddTask id={match.params.id} />
                </div>

                {tasks.map(task =>
                    <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mt-4">
                        <TaskCard key={task.id} tasks={tasks} id={task.id} name={task.name} userStory={task.userStory} priority={task.priority} status={task.status} creationDate={task.creationDate} updateDate={task.updateDate} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Tasks;