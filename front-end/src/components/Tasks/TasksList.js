import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TasksList = ({ match }) => {

    const [task, setTasks] = useState([]);
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
        }
        ).then(response => {
            console.log(response)
            // console.log(...response.data);
            // setTasks(response.data);
        }).catch(err => {
            console.log(err);
        })


    }

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">US</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{task.id}</td>
                        <td>{task.name}</td>
                        <td>{task.userStory}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TasksList;