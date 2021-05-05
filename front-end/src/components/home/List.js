import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProjectsList from "../Projects/ProjectList"
import AddProject from '../Projects/AddProject';

export default function List() {

    const API_URL = "http://localhost:8081";
    const [projects, setProjects] = useState([]);
    const user = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        axios.get(API_URL + "/api/projects", {
            headers: {
                "Authorization": "Bearer " + user.token
            },
        })
            .then(response => {
                setProjects(response.data);
                console.log(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div class="col-sm-12 col-md-4 col-lg-3 col-xl-3 mt-4">
                        <AddProject />
                    </div>
                    {projects.map(project =>
                        <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mt-4">
                            <ProjectsList key={project.id} projects={projects} id={project.id} name={project.name} description={project.description} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
