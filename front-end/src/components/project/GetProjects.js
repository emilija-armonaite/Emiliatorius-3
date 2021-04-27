import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProjectCard from './ProjectCard';
import Grid from '@material-ui/core/Grid';

const GetProjects = () => {
    const API_URL = "http://localhost:8081/";
    const [projects, setProjects] = useState([])
    // const [name, setName] = useState("");
    // const [description, setDescription] = useState("");
    // const user = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        axios.get(API_URL + "api/projects", {
            headers: {
                // "Authorization": user.token
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
        })
            .then(response => {
                console.log(response)
                // console.log(response.data)
                // let projectData = response.data;
                // setProjects({ name: projects.name, description: projects.description })
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         const response = await axios(
    //             `http://localhost:8081/api/projects`
    //         );
    //         console.log(response)
    //             // setProjects(response.data)

    //             .catch(err => {
    //                 console.log(err);
    //             })
    //     }
    //     fetchProjects();
    // }, [])

    return (
        <div className="container">
            <div className="row">
                {projects.map(project => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                            <ProjectCard key={project.id} name={project.name} description={project.description} />
                        </Grid>
                    )
                })
                }
            </div>

        </div>
    );
}
export default GetProjects