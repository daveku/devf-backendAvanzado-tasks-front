import React, { useState, useEffect } from "react";
import { createTask, fetchTasks, deleteTask as APIdeleteTask } from "../../api";
import Button from "../../components/Button";
import { TasksFields } from "../../components/TasksFields/TasksFields";
import { Task } from "../../components/Task/Task";
import "./TaskList.css";

const TaskList = ({ isUser }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
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
    <>
      <h2>Bienvenido {isUser}</h2>
      <div className="task-input__container">
        <div className="task-input">
          <TasksFields
            className="task-input__text"
            onChangeTitle={(e) => setTaskTitle(e.target.value)}
            onChangeDescription={(e) => setTaskDescription(e.target.value)}
            valueTitle={taskTitle}
            valueDescription={taskDescription}
          />
        </div>
        <Button className="task-input__btn" onClick={addTask}>
          Ingresar Tarea
        </Button>
      </div>
      {loader && <p> Loading... </p>}
      {tasks.map((task) => {
        return (
          <Task
            key={task._id}
            className="task"
            title={task.title}
            onDelete={() => deleteTask(task._id)}
          />
        );
      })}
    </>
  );
};

export default TaskList;
