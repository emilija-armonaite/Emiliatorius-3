import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from "../home/Navbar"
import TaskCard from './TaskCard';
import AddTask from './AddTask';
import { useHistory } from "react-router-dom";
import ExportTask from '../Tasks/ExportTasks';
import Footer from '../home/Footer';
import { v4 as uuid } from 'uuid';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Tasks = ({ match }) => {

  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const user = JSON.parse(localStorage.getItem("token"));


  useEffect(() => {
    fetchTask();
  }, [name])

  const fetchTask = async () => {
    await axios(
      `http://localhost:8081/api/projects/${match.params.id}/tasks?name=` + name, {
      headers: {
        "Authorization": "Bearer " + user.token
      },
    })
      .then(response => {
        setTasks(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const columnsFromBackend = {
    "TO_DO": {
      name: "To Do",
      status: "TO_DO",
    },
    "In_Progress": {
      name: "In Progress",
      status: "IN_PROGRESS",
    },
    "Done": {
      name: "Done",
      status: "DONE",
    }
  };

  const [columns, setColumns] = useState(columnsFromBackend);


  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      console.log(result.draggableId)
      const status = result.destination.droppableId.toUpperCase()

      axios.put(
        `http://localhost:8081/api/tasks/${result.draggableId}/status?status=${status}`, {
      },
        {
          headers: {
            "Authorization": "Bearer " + user.token
          },
        })
        .then(response => {
          fetchTask()
          console.log(response)
        })
        .catch(err => {
          console.log(err);
        })
    }
  };

  const history = useHistory();
  const backToProjects = () => {
    history.push("/projects");
  }

  return (
    <div style={{ backgroundColor: "#e1e5ea" }}>
      <NavBar />
      <div className="buttons mb-3 mr-3 d-flex">
        <button type="submit" onClick={backToProjects} className="btn btn-outline-dark btn-sm ml-3 mt-2">Go back to projects</button>
        <ExportTask project={match.params.id} />
      </div>

      <div className="container">
        <div class="row py-1 justify-content-center">
          <div class="col-3 text-center">
            <form>
              <div class="form-group">
                <label for="name">Search</label>
                <input onChange={e => setName(e.target.value)} type="search" class="form-control" id="name" placeholder="Task name or id" />
              </div>
            </form>
          </div>
        </div>
        <div class="text-center " style={{ display: "flex", justifyContent: "center"}}>
          <AddTask />
        </div>
        <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
          <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div
                  style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                  key={columnId}
                >
                  <h2>{column.name}</h2>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{ padding: 4, width: 300, minHeight: 500 }}
                          >
                            {tasks.filter(task => task.status === column.status).map((task, index) => {
                              return (
                                <Draggable
                                  key={task.id}
                                  draggableId={'' + task.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none", padding: 16, margin: "0 0 8px 0",
                                          minHeight: "50px",
                                          ...provided.draggableProps.style
                                        }}
                                      >
                                        <TaskCard key={task.id} tasks={tasks} id={task.id} name={task.name} userStory={task.userStory} priority={task.priority} status={task.status} creationDate={task.creationDate} updateDate={task.updateDate} />
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
      </div>
      <Footer />
    </div>

    // <div style={{ backgroundColor: "#e1e5ea" }}>
    //     <NavBar />
    //     <div className="buttons mb-3 mr-3 d-flex">
    //         <button type="submit" onClick={backToProjects} className="btn btn-outline-dark btn-sm ml-3 mt-2">Go back to projects</button>
    //         <ExportTask project={match.params.id} />
    //     </div>

    //     <div class="row py-1 justify-content-center">
    //             <div class="col-3 text-center">
    //             <form>
    //                 <div class="form-group">
    //                     <label for="name">Search</label>
    //                     <input onChange={e => setName(e.target.value)} type="search" class="form-control" id="name" placeholder="Task name or id" />
    //                 </div>
    //             </form>
    //         </div>
    //     </div>

    //     <div>
    //         <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mt-4">
    //             <AddTask id={match.params.id} />
    //         </div>

    //         {tasks.map(task =>
    //             <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mt-4">
    //                 <TaskCard key={task.id} tasks={tasks} id={task.id} name={task.name} userStory={task.userStory} priority={task.priority} status={task.status} creationDate={task.creationDate} updateDate={task.updateDate} />
    //             </div>
    //         )}
    //     </div>
    //     <Footer/>
    // </div>
  )
}

export default Tasks;