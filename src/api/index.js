import axios from "axios";

export const fetchTasks = (token) => {
  return axios.get("http://localhost:5000/api/v1/tasks/", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const createTask = (title, token) => {
  const URL = "http://localhost:5000/api/v1/tasks/";
  return axios.post(
    URL,
    { title },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const deleteTask = (id, token) => {
  const URL = "http://localhost:5000/api/v1/tasks/" + id;
  return axios.delete(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const login = (email, password) => {
  const URL = "http://localhost:5000/api/v1/users/login";
  return axios.post(URL, { email, password });
};
