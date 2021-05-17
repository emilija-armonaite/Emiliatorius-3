import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProjectsList from "../Projects/ProjectList"
import AddProject from '../Projects/AddProject';
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import ExportProject from '../Projects/ExportProject';

export default function List() {

    const API_URL = "http://localhost:8081";
    const [projects, setProjects] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [name, setName] = useState("");
    const user = JSON.parse(localStorage.getItem("token"));


    useEffect(() => {
        axios.get(API_URL + "/api/projects?page=" + page + "&title=" + name, {
            headers: {
                "Authorization": "Bearer " + user.token
            },
        })
            .then(response => {
                setProjects(response.data.projects);
                setTotalPages(response.data.totalPages)
                setPage(response.data.currentPage)
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            })
    }, [page, name])

    const goBack = () => {
        if(page !== 0) {
            setTimeout(() => setPage(page - 1), 0);
        }
    }

    const goforward = () => {
        if(page + 1 < totalPages) {
            setTimeout(() => setPage(page + 1), 0);
        }
    }

    const goToLast = () => {
        if(page !== totalPages) {
            setTimeout(() => setPage(totalPages - 1), 0);
        }
    }

    const goToFirst = () => {
        if(page !== 0) {
            setTimeout(() => setPage(0), 0);
        }
    }

    return (
        <div style={{ backgroundColor: "#e1e5ea" }}>
            <div className="mx-3 d-flex"><ExportProject /></div>
            {/* <ExportTask /> */}

            <div class="row py-1 justify-content-center">
                    <div class="col-3 text-center">
                    <form>
                        <div class="form-group">
                            <label for="name">Search</label>
                            <input onChange={e => setName(e.target.value)} type="search" class="form-control" id="name" placeholder="Project name" />
                        </div>
                    </form>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4">
                        <AddProject />
                    </div>
                    {projects.map(project =>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4 d-flex">
                            <ProjectsList key={project.id} projects={projects} id={project.id} name={project.name} description={project.description} status={project.status} tasksAmount={project.tasksAmount} tasksLeft={project.tasksLeft} />
                        </div>
                    )}
                </div>
                <div class="row py-4 justify-content-center">
                    <div class="col-6 text-center">
                        <button onClick={goBack} type="button" class="btn btn-outline-info m-1">
                            <RiArrowLeftSLine />
                        </button >
                        <button onClick={goToFirst} type="button" class="btn btn-outline-info m-1">
                            1
                        </button >
                        <button type="button" class="btn btn-outline-info mx-4">
                            {page + 1}
                        </button>
                        <button onClick={goToLast} type="button" class="btn btn-outline-info m-1">
                            {totalPages}
                        </button>
                        <button onClick={goforward} type="button" class="btn btn-outline-info m-1">
                            <RiArrowRightSLine />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
