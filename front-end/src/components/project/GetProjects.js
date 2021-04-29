import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProjectCard from './ProjectCard';
import Grid from '@material-ui/core/Grid';

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
              //  console.log(response);
                console.log(response.data);
              //  console.log(...response.data);
            //   console.log(projects);
                setProjects(response.data);
                console.log(projects);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

// const handleUpdate = async (id)=>{
//     await fetch(API_URL + "/api/projects/" + id, {
//         method: 'UPDATE'
//     })
//     const newProjects = projects.filter(projects =>projects.id !=id);
// setProjects(newProjects)
// }


    return (
        <>
            {projects && projects.map(project => {
                return (
                    <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
                        <ProjectCard key={project.id} name={project.name} description={project.description} />
                    </Grid>
                )
            })
            }
        </>
    );
}
export default GetProjects;