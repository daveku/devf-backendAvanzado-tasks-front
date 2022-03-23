import React, { useState, useEffect } from "react";
import { createTask, fetchTasks, deleteTask as APIdeleteTask } from "./api";
import "./App.css";

function App() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    console.log("useEffect");
    fetchTasks()
      .then((res) => {
        setTasks(res.data);
        setLoader(false);
      })
      .catch((err) => {
        console.error(err);
        setLoader(false);
      });

    return () => {};
  }, []);

  const addTask = () => {
    createTask(taskTitle)
      .then((res) => {
        const task = res.data;
        setTasks(tasks.concat(task));
        setTaskTitle("");
        setTaskDescription("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTask = (id) => {
    APIdeleteTask(id).then((res) => {
      const newTasks = tasks.filter((task) => task._id !== res.data.id);
      setTasks(newTasks);
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="task-input__container">
          <div className="task-input">
            <input
              type="text"
              className="task-input__text"
              value={taskTitle}
              placeholder="Título de la tarea"
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
            />
            <textarea
              type="text"
              className="task-input__text"
              value={taskDescription}
              placeholder="Descripción"
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <button onClick={addTask} className="task-input__btn">
            Ingresar Tarea
          </button>
        </div>
        {loader && <p> Loading... </p>}
        {tasks.map((task) => {
          return (
            <div key={task._id} className="task" id={task._id}>
              <p>{task.title}</p>
              <span
                className="task__delete"
                onClick={() => deleteTask(task._id)}
              >
                X
              </span>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
