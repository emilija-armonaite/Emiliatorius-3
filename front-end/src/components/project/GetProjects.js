import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProjectCard from './ProjectCard';
import { Grid } from '@material-ui/core';


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
        <Grid container spacing={3} style={{ padding: "15px" }}>
            {projects && projects.map(project => {
                return (
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <ProjectCard key={project.id} name={project.name} description={project.description} />
                    </Grid>
                )
            })
            }
        </Grid>
    );
}
export default GetProjects;