import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProjectCard from './ProjectCard';

const GetProjects = () => {
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
                console.log(response);
                console.log(response.data);
                console.log(...response.data);
                setProjects(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className="container">
            <div className="row">
                {projects && projects.map(project => {
                    return (
                        <ProjectCard key={project.id} name={project.name} description={project.description} />
                    )
                })
                }
            </div>
        </div>
    );
}
export default GetProjects;