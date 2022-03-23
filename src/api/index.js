import axios from "axios";

export const fetchTasks = (token) => {
  return axios.get("http://localhost:5000/api/v1/tasks/", {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_MONGO_DB_TOKEN}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const createTask = (title, description) => {
  const URL = "http://localhost:5000/api/v1/tasks/";
  return axios.post(
    URL,
    { title, description },
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MONGO_DB_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const deleteTask = (id) => {
  const URL = "http://localhost:5000/api/v1/tasks/" + id;
  return axios.delete(URL, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_MONGO_DB_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
};
