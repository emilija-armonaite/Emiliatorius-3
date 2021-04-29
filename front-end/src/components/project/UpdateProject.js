import React from 'react';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';

const UpdateProject = ({ id }) => {

    const user = JSON.parse(localStorage.getItem("token"));
    axios.put(`http://localhost:8081/api/projects/${id}`, {
        description : "alibaba",
        name : "petras"},
        {
        headers: {
            "Authorization": "Bearer " + user.token, 
        },
    })
        .then(response => {
            console.log( user.token)
            console.log(response.data)
        })
        .catch(err => {
            console.log(err);
        })

    // return (
    //  //   <Alert severity="error">This is an error alert — check it out!</Alert>
    // )
}

export default UpdateProject;