import React from 'react'
import { RiEdit2Line } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

export default function TaskCard({ id, name, userStory, priority, status, creationDate, updateDate }) {

    return (
        <div>
            <div className="card text-center h-100">
                <div className="card-body">
                    <p className="card-text">{id}</p>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{userStory}</p>
                    <p className="card-text">{priority}</p>
                    <p className="card-text">{status}</p>
                    <p className="card-text">{creationDate}</p>
                    <p className="card-text">{updateDate}</p>
                    <button className="btn btn-outline-info btn-sm my-2 my-sm-0 m-2" type="submit">Edit <RiEdit2Line /></button>
                    <button className="btn btn-outline-danger btn-sm my-2 my-sm-0 m-2" type="submit">Delete <FaTrash /></button>
                </div>
            </div>
        </div>
    )
}
