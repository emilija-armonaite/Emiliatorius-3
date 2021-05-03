import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProjectsList from "../Projects/ProjectList"
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
                })
                .catch(err => {
                    console.log(err);
                })
        }, [])
    

    return (
        <>
            {projects.map(projects => (
                <ProjectsList key={projects.id} id={projects.id} name={projects.name} description={projects.description}/>
            ))}
        </>
    )
}
