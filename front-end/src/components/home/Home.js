import React from 'react'
import Navbar from "./Navbar"
import List from "./List"
import ProjectsList from "../Projects/ProjectList"
export default function Home() {
    return (

        <div className="container">
            <Navbar />
            <List />
            <ProjectsList/>
        </div>
    )
}
